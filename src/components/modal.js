import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
//   console.log("props +++++++ ", props.attendees)
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  let attendees = props.attendees;
//   const onClose = props.onClose
//   const selectedValue = props.selectedValue
//   const open = props.open
//   const onClose = props.onClose



//   const [all_attendees, setAttendees] = React.useState([]);


//   function convertToArrayOfString(val) {
//     console.log("start")
//     for (const j in val) {
//         console.log("ASDFJSDF", val[j])
//     }
//   }

//   convertToArrayOfString(temp_attendees)

  if (attendees === undefined) {
    attendees = [];
  }
  
//   console.log("temp_attendees +++++++ ", temp_attendees);
//   console.log("attendees +++++++ ", all_attendees);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Attendees</DialogTitle>
      <List>
        {attendees.map((attendee, index) => (

            <ListItem key={index}>
                <ListItemAvatar>
                <Avatar className={classes.avatar}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={attendee.name} />
            </ListItem>
        ))}

        {/* <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button size="small" color="primary" onClick={handleClickOpen}>
        Attendees
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} attendees = {props.attendees} />
    </div>
  );
}
