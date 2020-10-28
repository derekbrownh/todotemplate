import React, { useState } from "react";
import Modal_Component from "./modal"

import Button from "@material-ui/core/Button";
// import { db } from "../firebase";
// import * as firebase from 'firebase';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
}))

export default function CreateEvent(props) {
  const classes = useStyles();

    return(
      <div className={classes.wrapper}>
          <Card className={classes.card} >
            <CardActionArea >
              <CardMedia
                className={classes.media}
                //image={props.event.pictureURL}
                title="Awesome Image"
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {/* {props.event.name} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {props.event.time} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {props.event.address} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* {props.event.description} */}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {/* Attendance Capacity {props.event.attendees.length}/{props.event.capacity} */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary"
              >
                Delete RSVP
              </Button>
              
                <Button size="small" color="primary"
              >
                RSVP
              </Button>
              
              <Modal_Component user = {props.user} attendees = {props.event.attendees}/>
            </CardActions>
          </Card>
          </div>
    )
}