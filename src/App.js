/*
Change it to handle actual timestamps
rsvp for future events    /future
only load this weeks events
add the automatic calendar thing
google sign-in
styling
Make the RSVP button into one button
Add friends - people that already have an account


*/




import React, { useState, useEffect } from "react";
import AppBarComponent from "./AppBar"
import EventList from "./components/Event"
import { auth, db } from "./firebase";


export function App(props) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([])
  let [isRSVPed, setRSVPBoolean] = useState(true)

  function isUserCurrentlyRSVPed(events) {
    for (const i in events) {
      if (events[i].attendees === undefined) continue;
      for (const j in events[i].attendees) {
        if (events[i].attendees[j].UID === user.uid) {
          return true
        }
      }
    }
    return false
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
      // do something
    });

    return unsubscribe;
  }, [props.history]);

  // console.log(user)
  useEffect(() => {
    let query;

    if (user) {
      query = db
        .collection("users")
        .doc(user.uid)
        .collection("tasks")
        .onSnapshot(snapshot => {
          const updated_tasks = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            updated_tasks.push({
              text: data.text,
              checked: data.checked,
              id: doc.id,
              priority: data.priority
            });
          });
          setTasks(updated_tasks);
        });
    }
    return query;
  }, [user]);

  useEffect(() => { 
    let query;

    if (user) {
      query = db
        .collection("events")
        .onSnapshot(snapshot => {  // onSnapshot method means you constantly listen to a document!!!
          const updated_events = [];
          snapshot.forEach(doc => {
            const data = doc.data();
            updated_events.push({
              id: doc.id,
              name: data.name,
              attendees: data.attendees,
              description: data.description,
              pictureURL: data.pictureURL,
              capacity: data.capacity,
              address: data.address,
              time: data.time
            });
          });
          setEvents(updated_events);
          setRSVPBoolean(isUserCurrentlyRSVPed(updated_events));
        });
    }
    return query;
  }, [user]);


  // If the user is not valid or doesn't exist, return an 
  // empty div instead of what should be in the page
  if (!user) {
    return <div />;
  }

  console.log(isRSVPed);

  return (
    <div>
      <AppBarComponent/>
      <div style={{ display: "flex", marginTop: 30, flexDirection: "column", alignItems: "center" }}>
      {events.map(events => {
        return <EventList user = {user} event = {events} isRSVP = {isRSVPed}/>   // This is currently giving the red warning
      })}
      </div>
    </div>
  );
}





