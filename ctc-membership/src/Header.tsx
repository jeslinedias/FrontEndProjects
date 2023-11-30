import React from 'react';
import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  return (
    <AppBar position="absolute" sx={{backgroundImage: 'url("https://test.chicagotamilcatholics.org/wp-content/uploads/2021/12/footer-bg-im-21.jpg")'}}>
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item xs={1.2}>
            <Button disabled variant='contained' sx={{my:2.5}}><CallIcon sx={{display:'inline-block', color:'#ffffff'}}/></Button>  
            <Button variant='text' color='inherit' href='tel:312-970-0053' sx={{display:'inline-block'}}><Typography>312-970-0053</Typography></Button>
          </Grid>
          <Grid item xs={2.5}>
            <Button disabled variant='contained' sx={{my:2.5}}><EmailIcon sx={{display:'inline-block', color:'#ffffff'}}/></Button>
            <Button variant='text' color='inherit' href='mailto:hello@chicagotamilcatholics.org' sx={{display:'inline-block', textTransform: 'none'}}><Typography>hello@chicagotamilcatholics.org</Typography></Button>
          </Grid>
          <Grid item xs={4.5}>
            <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'80px'}} />
          </Grid>
          <Grid item xs={3.5}>
            <Grid container spacing={2}>
              <Grid item xs={2}><Button variant='text' color='inherit' href='https://www.facebook.com/chicagotamilcatholics'><FacebookIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
              <Grid item xs={2}><Button variant='text' color='inherit' href='https://www.youtube.com/@chicagotamilcatholics'><YouTubeIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
              <Grid item xs={2}><Button variant='text' color='inherit' href='https://chat.whatsapp.com/HLGO12Uhc4CLYO98UQWc7w'><WhatsAppIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
              <Grid item xs={2}><Button variant='text' color='inherit' href='https://chicagotamilcatholics.org/#'><SearchIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
