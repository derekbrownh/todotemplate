import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { db } from "../firebase";

export default function Event(props) {

    const [open, setOpen] = useState(false);
    const [taskID, setTaskID] = useState("");
    const [new_RSVP, setNewRSVP] = useState("");

      const handleAddRSVP = () => {
        db.collection("events")
          .doc(props.events)
          .collection("attendees")
          .add({ user: props.user.uid})
          .then(() => {
            setNewRSVP("");
            // setPriority("");
          });
      };
      // console.log(props.events.name)
      console.log(props.user.displayName)
    return(
        <Paper style={{ padding: 30, maxWidth: 700, display: "flex", flexGrow: 1}}>
          <Typography variant="h6">{props.events.name}</Typography>
          <div style={{ display: "flex", marginTop: 30 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddRSVP}
              // disabled={new_task === ""}
            >
              RSVP
            </Button>
          </div>
        </Paper>
    )
}