import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({open,setOpen,url,handleClose,handleClickOpen}) {
  

  return (
    <div className='w-[100vw]'>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        // keepMounted
        fullWidth={'lg'}
        maxWidth={'xl'}
        onClose={handleClose}
        // aria-describedby="alert-dialog-slide-description"
       className='w-[100vw] '
        // sx={{height:250,width:1050}}
      >
        <DialogContent className='md:h-[80vh]  max-md:h-[40vh] w-[100%] overflow-hidden'>
           {/* {url} */}
           <iframe className='w-[100%] h-[100%]' src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}