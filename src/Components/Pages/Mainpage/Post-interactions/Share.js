import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import share from '../../../../Images/share.svg'
import './interaction.css'




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
      <img src={share} alt="logo pepolls"  />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='dialogtitle'>{"Share poll"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
       <div className='share-poll-buttons'>
           <button className='button-poll-share'>Share in my profile</button>
           <button className='button-poll-share'>Send it in a message</button>

       </div>
          </DialogContentText>
        </DialogContent>
     
      </Dialog>
    </div>
  );
}
