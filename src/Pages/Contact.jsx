import Nav from '../components/Nav';
import {  Navigate } from "react-router-dom";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import ContactComp from '../components/ContactComp';
import Footer from '../components/Footer';

const loggedIn = true;





 const Contacts = () => {
     if(!loggedIn){
         return <Navigate to='./Login' />;
         
        }    
        return(
        <>
          <Nav />
          <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>Contact Us</h1>      
          </div>
          <div>
          <ContactComp />
          </div>
          <Footer>
            <Footer />
          </Footer>
        </>
      )

    
    
};

export default Contacts;