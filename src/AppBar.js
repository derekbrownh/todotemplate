import React, { useState, useEffect } from "react";

import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';

import { auth, db} from "./firebase";

export default function AppBarComponent(props) {

  const [admin, setAdmin] = useState('')

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() => {
            //props.history.push("/");
          })
          .catch(error => {
            alert(error.message);
          });
      };

useEffect(() => { 
  let query;

  if (props.user) {
    query = db
      .collection("users")
      .onSnapshot(snapshot => {  // onSnapshot method means you constantly listen to a document!!!
        const updated_admin = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          updated_admin.push({
            admin: data.admin,
          });
        });
        setAdmin(updated_admin);
      });
  }
  return query;
}, [props.user]);

console.log(admin.admin)
    return(

<AppBar position="static" color="primary">
<Toolbar style={{ display: "flex" }}>
  <Typography
    variant="h6"
    color="inherit"
    style={{ flexGrow: 1, marginleft: 30 }}
  >
    67th Ward FHE
  </Typography>
  {/* {props.user.admin} */}
  <EditIcon color = 'secondary'/>
  <Button color="inherit" onClick={handleSignOut}>
    Sign Out
  </Button>
</Toolbar>
</AppBar>

    )
}




