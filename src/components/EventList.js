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

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { db } from "../firebase";

export default function EventList(props) {

    const [open, setOpen] = useState(false);
    const [taskID, setTaskID] = useState("");

    const handleCheckTask = (checked, task_id) => {
        db.collection("users")
          .doc(props.user.uid)
          .collection("tasks")
          .doc(task_id)
          .update({ checked: checked });
    }
    const handleNewPriority = (priority, task_id) => {
        db.collection("users")
          .doc(props.user.uid)
          .collection("tasks")
          .doc(task_id)
          .update({ priority: priority });
      };
      const handleClickOpen = taskID => {
        setTaskID(taskID);
        setOpen(true);
      };
    return(
        <Paper style={{ width: 700, padding: 30 }}>
        <List style={{ MarginTop: 30 }} subheader={<li />}>
            {props.tasks.filter(value => value.checked === false).length > 0
              ? "Incomplete Tasks"
              : ""}
            {props.tasks
              .filter(value => value.checked === false)
              .map(value => {
                return (
                  <ListItem key={value.id} disabled={false}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={value.checked}
                        onChange={e => {
                          handleCheckTask(e.target.checked, value.id);
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={value.text} />
                    <ListItemSecondaryAction>
                      <FormControl style={{ width: 90 }}>
                        <InputLabel shrink={value.priority !== null}>
                          Priority
                        </InputLabel>
                        <Select
                          value={value.priority}
                          onChange={e => {
                            handleNewPriority(e.target.value, value.id);
                          }}
                        >
                          <MenuItem value={1}>Low</MenuItem>
                          <MenuItem value={2}>Mid</MenuItem>
                          <MenuItem value={3}>High</MenuItem>
                        </Select>
                      </FormControl>

                      <IconButton
                        onClick={() => {
                          handleClickOpen(value.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
          </List>
        </Paper>
    )
}