import React, { useState } from "react";
import Modal_Component from "./modal"

import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import * as firebase from 'firebase';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 25,
    maxWidth: 345,
    minWidth: 345,
    padding: 0,
    margin: 0
  },
  card: {
    width: '100%',
  },
  media: {
    height: 140,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  hidden: { 
    display:"none" 
  },
}));





export default function Event(props) {
  const classes = useStyles();
  const [seeAttendees, setSeeAttendees] = useState(false);

  const RSVP = 'false'


  function isRSVPedForThisEvent() {
    if (props.event.attendees === undefined) return false;
    for (const j in props.event.attendees) {
      if (props.event.attendees[j].UID === props.user.uid) {
        return true
      }
    }
    return false
  }

  function isRSVPedForThisEventtest() {
    if (props.event.attendees === undefined) return false;
    for (const j in props.event.attendees) {
      if (props.event.attendees[j].UID === props.user.uid) {
        return true
      }
    }
    return false
  }

  function checkIsFull() {
    if (props.event.attendees !== undefined && props.event.attendees.length >= 10) {
      return true
    }
    return false
  }

  const addRSVP = () => {
    console.log(props.event)
    db.collection("events")
      .doc(props.event.id)
      .update({
        attendees: firebase.firestore.FieldValue.arrayUnion({ UID: props.user.uid, name: props.user.displayName})
      })
  };

  const deleteRSVP = () => {
    console.log(props.event)
    db.collection("events")
      .doc(props.event.id)
      .update({
        attendees: firebase.firestore.FieldValue.arrayRemove({ UID: props.user.uid, name: props.user.displayName})
      })
  };

  console.log(props.user.displayName)
    return(
      <div className={classes.wrapper}>
          <Card className={classes.card} >
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={props.event.pictureURL}
                title="Awesome Image"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.event.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.event.time}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.event.address}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {props.event.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Attendance Capacity {props.event.attendees.length}/{props.event.capacity}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

            {(() => {
              switch(RSVP) {
                case 'true':
                    return(
                      <Button size="small" color="primary"
                className={(props.isRSVP === true || checkIsFull() === true) ? 'classes.hidden' : ''}

                onClick={addRSVP}
                disabled={props.isRSVP === true || checkIsFull() === true}  // If they are RSVPed anywhere, disable OR if it is full, disable it
              >
                RSVP
              </Button>
                    )
                case 'false':
                  return(
                    <Button size="small" color="primary"
                onClick={deleteRSVP}
                disabled={isRSVPedForThisEvent() === false}  // If they arent RSVPed for this event, dont allow them allow them to delete
              >
                Delete RSVP
              </Button>
                  )
              }

            })}
            
              {isRSVPedForThisEvent()? (
                <Button size="small" color="primary"
                onClick={deleteRSVP}
                disabled={isRSVPedForThisEvent() === false}  // If they arent RSVPed for this event, dont allow them allow them to delete
              >
                Delete RSVP
              </Button>
              ) : (
                <Button size="small" color="primary"
                className={(props.isRSVP === true || checkIsFull() === true) ? 'classes.hidden' : ''}

                onClick={addRSVP}
                disabled={props.isRSVP === true || checkIsFull() === true}  // If they are RSVPed anywhere, disable OR if it is full, disable it
              >
                RSVP
              </Button>
              )}

            {/* <Button size="small" color="primary"
                // onClick={seeAttendees = !seeAttendees}
              >
                See Attendees
              </Button> */}
              <Modal_Component user = {props.user} attendees = {props.event.attendees}/>
            </CardActions>


            

            



{/* 
            <div className={classes.list}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <Typography variant="body1" color="textSecondary" component="p">
                    Attendees
                  </Typography>
                </ListItem>


                <ListItem button>
                  <ListItemText primary="Herbert Hoover" />
                </ListItem>

                

              </List>
              <Divider />

            </div> */}


          </Card>
          </div>
    )
}