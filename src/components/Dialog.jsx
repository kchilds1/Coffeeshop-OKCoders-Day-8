import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useEffect, useState } from 'react';
import menuItems from '../Pages/Data';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Card } from '@mui/material';
import Stack from '@mui/material/Stack';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const AlertDialogSlide = ({ originalPrice, discount }) => {
  const [open, setOpen] = useState(false);
  const calculateDiscountedPrice = () => {
    const discountAmount = (originalPrice * discount) / 100;
    return originalPrice - discountAmount;
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <Stack>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Card sx={{maxWidth:400, maxHeight:500, border:'solid',  margin:'4px',display:'flex',flexDirection:'column', alignItems:'center',background:'yellow', padding:'4px'}}>
        { <DialogTitle>{"Bagel Sale of the Day"}</DialogTitle> }
        <CardMedia>
          <img src={'https://source.unsplash.com/400x400/?bagels'} alt={menuItems.name} style={{width:'auto', height:'230px'}}/>
        </CardMedia>
          <CardContent >
            <DialogContentText id="alert-dialog-slide-description" style={{color:'red'}}>
            {<h2>SAVE 25% OFF</h2>}
            <span className="original-price" style={{textDecoration:'line-through'}}>Original  ${originalPrice}    </span>
            <span className="discounted-price">Sale ${calculateDiscountedPrice()}</span>
            </DialogContentText>
          </CardContent>
        <CardActions>
          <Button onClick={handleClose}variant='contained'>BUY</Button>
          <Button onClick={handleClose}variant='contained'>EXIT</Button>
        </CardActions>
        </Card>
      </Dialog>
    </Stack>
  );
}

export default AlertDialogSlide;
