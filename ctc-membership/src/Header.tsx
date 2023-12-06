import React from 'react';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Grid, Toolbar, Typography, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB4nDQAhRmAbX9qW1-MsaZJtw8JlyTa7Qw",
  authDomain: "chicagotamilcatholics-6f433.firebaseapp.com",
  projectId: "chicagotamilcatholics-6f433",
  storageBucket: "chicagotamilcatholics-6f433.appspot.com",
  messagingSenderId: "160168855788",
  appId: "1:160168855788:web:75136e333a89160fd47dc9",
  measurementId: "G-F0BZLVYY89"
};

const app = initializeApp(firebaseConfig);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 260;
const navItems = ['Home', 'About Us', 'Mass', 'Events', 'Blog', 'Contact Us'];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [user, setUser] = useState<any>(null);
  const [email] = useState('');
  const [password] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{m:2, my:3}}>
        <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'50px'}} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const auth = getAuth(app);
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error : any) {
      console.error('Error logging out:', error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);

    } catch (error : any) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="absolute" sx={{backgroundImage: 'url("https://test.chicagotamilcatholics.org/wp-content/uploads/2021/12/footer-bg-im-21.jpg")'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={2} sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Grid item xs={10}>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'50px'}} />
                </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Grid item sm={1} md={1} lg={1.2} xl={1.2}>
                <Button variant='text' color='inherit' href='tel:312-970-0053' sx={{my:2.5, display:'inline-block' }}><CallIcon /></Button>  
                <Button variant='text' color='inherit' href='tel:312-970-0053' sx={{ display: { sm: 'none', md:'none', lg: 'none', xl: 'inline-block' } }}><Typography>312-970-0053</Typography></Button>
            </Grid>
            <Grid item sm={2} md={2} lg={2.1} xl={2.1}>
                <Button variant='text' color='inherit' href='mailto:hello@chicagotamilcatholics.org' sx={{my:2.5, display:'inline-block' }}><EmailIcon /></Button>
                <Button variant='text' color='inherit' href='mailto:hello@chicagotamilcatholics.org' sx={{textTransform: 'none', display: { sm: 'none', md:'none', lg: 'none', xl:'inline-block'}}}><Typography>hello@chicagotamilcatholics.org</Typography></Button>
            </Grid>
            <Grid item sm={5.8} md={5.5} lg={5} xl={5}>
                <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'80px'}} />
            </Grid>
            <Grid item sm={3.2} md={3.2} lg={3} xl={3}>
                <Grid container spacing={2}>
                <Grid item sm={3} md={3}><Button variant='text' color='inherit' href='https://www.facebook.com/chicagotamilcatholics'><FacebookIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
                <Grid item sm={3} md={3}><Button variant='text' color='inherit' href='https://www.youtube.com/@chicagotamilcatholics'><YouTubeIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
                <Grid item sm={3} md={3}><Button variant='text' color='inherit' href='https://chat.whatsapp.com/HLGO12Uhc4CLYO98UQWc7w'><WhatsAppIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
                <Grid item sm={3} md={3}>
                  {user ? (
                    <>
                      <Button variant="contained" color="success" onClick={handleLogout} sx={{my:2}}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="contained" color="success" onClick={handleSignIn} sx={{my:2}} href='/'>
                        Sign In
                      </Button>
                    </>
                  )}
                </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}