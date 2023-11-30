import React from 'react';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{backgroundImage: 'url("https://test.chicagotamilcatholics.org/wp-content/uploads/2021/12/footer-bg-im-21.jpg")'}}>
      <Toolbar>
        <Container maxWidth='xl' sx={{ml:10}}>
          <Grid container spacing={1}>
            <Grid item xs={1.6} sx={{mr:3}}>
              <Button disabled variant='contained' sx={{my:2.5}}><CallIcon sx={{display:'inline-block', color:'#ffffff'}}/></Button>  
              <Button variant='text' color='inherit' href='tel:312-970-0053' sx={{display:'inline-block'}}><Typography>312-970-0053</Typography></Button>
            </Grid>
            <Grid item xs={3.1} sx={{mr:3}}>
              <Button disabled variant='contained' sx={{my:2.5}}><EmailIcon sx={{display:'inline-block', color:'#ffffff'}}/></Button>
              <Button variant='text' color='inherit' href='mailto:hello@chicagotamilcatholics.org' sx={{display:'inline-block', textTransform: 'none', mr:0.5}}><Typography>hello@chicagotamilcatholics.org</Typography></Button>
            </Grid>
            <Grid item xs={3.5} sx={{mr:3}}>
              <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'80px'}} />
            </Grid>
            <Grid item xs={3} sx={{ml:3}}>
              <Grid container spacing={1}>
                <Grid item xs={3.2}><FacebookIcon sx={{display:'inline-block', my:2.5}} /></Grid>
                <Grid item xs={3}><YouTubeIcon sx={{display:'inline-block', my:2.5}} /></Grid>
                <Grid item xs={3}><WhatsAppIcon sx={{display:'inline-block', my:2.5}} /></Grid>
                <Grid item xs={2.8}><SearchIcon sx={{display:'inline-block', my:2.5}} /></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
