import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { List } from "@mui/material";
import MenuComp from './MenuComp';

const Nav = () =>  {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <List>
          <MenuComp color="inherit" label='Contacts' path='/Contacts'>Contacts</MenuComp>
          </List>
          
          <List>
          <MenuComp color="inherit" label='Menu' path='/Menu'>Contacts</MenuComp>
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;