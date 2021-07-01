import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from '../../../StateProvider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GroupIcon from '@material-ui/icons/Group';
import './Dialogbox.css';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Dialogbox() {
  const [open, setOpen] = React.useState(false);
  const [{ user }, dispatch] = useStateValue();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const text = (data) => {
    console.log(data)
  }
  return (
    <div className="dialog">
      <input type="text" placeholder={`What's on your mind, ${user.displayName}?`} onClick={handleClickOpen} />
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ textAlign: "center" }}>
          <b>Create post</b>
        </DialogTitle>
        <DialogContent dividers>
          <div className="itemcontent">
            <div className="avatar">
              <Avatar src={user.photoURL} />
            </div>
            <div className="name">
              <span><b>{user.displayName}</b></span><br></br>
              <span style={{ background: "#e4e6e9",padding: "2px",borderRadius: "2px",cursor:"pointer"}}><GroupIcon/>Friends<ArrowDropDownIcon/></span>
            </div>
          </div>
          <textarea style={{ width: "480px", height: "301px", border: "none", fontSize: "24px" }} placeholder={`What's on your mind, ${user.displayName}?`}
          onClick={text}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary" style={{ width: "100%" }}>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
