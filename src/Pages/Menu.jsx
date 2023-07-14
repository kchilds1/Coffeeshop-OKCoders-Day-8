import { Box, Typography, Card }  from "@mui/material";
import React, { useState, useEffect } from 'react';
import menuItems from './Data';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Nav from "../components/Nav";
import AlertDialogSlide from "../components/Dialog";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Footer from "../components/Footer";

const Menu = () => {
    const [showAlertDialog, setShowAlertDialog] = useState(false);
      
    useEffect(()=> {
      const timer = setTimeout(() => {
      setShowAlertDialog(true);
  }, 3000);

    return() =>{
        clearTimeout(timer);
    };
    }, []);
    
    return  (
        <div>
        <Nav />  
          <Container>
            <Box sx={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}> 
              {menuItems.map((item) => (
                <Card sx={{maxWidth:400, maxHeight:450, border:'solid', margin:'10px', marginTop:'40px'}}  key={item.id} >
                <CardMedia>
                    <img src={item.img} alt={item.name} style={{width:'150px', height:'auto'}}/>
                </CardMedia>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <p>Price ${item.price}</p>
                    </Typography>
                    </CardContent> 
                    <CardActions>
                    <Button variant='contained'>ADD TO CART</Button>
                    </CardActions>
                </Card>
            ))}
            {showAlertDialog && <AlertDialogSlide originalPrice={5.00} discount={25} />}
            </Box>
          </Container>
            <Footer style={{padding:'10px'}} />
      <div>
       </div>
        </div>
    );
};

export default Menu;