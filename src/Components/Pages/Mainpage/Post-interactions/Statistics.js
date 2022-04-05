import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import stat from '../../../../Images/stat.svg'
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
      <img src={stat} alt="logo pepolls"  />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='dialogtitle'>{"Statistics"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div className="numbers">
            <div className="stat-numbers">
              <p>321</p> <p>Reach</p>
            </div>
            <div className="stat-numbers">
              <p>208</p>
              <p>Voters</p>
            </div>
            <div className="stat-numbers">
              <p>78</p>
              <p>Debaters</p>
            </div>
          </div>
          </DialogContentText>
        </DialogContent>
     
      </Dialog>
    </div>
  );
}
