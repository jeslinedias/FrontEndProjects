import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Grid, Toolbar, Typography, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About Us', 'Mass', 'Events', 'Blog', 'Contact Us'];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
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
            <Grid item sm={1} md={1.2}>
                <Button disabled variant='contained' sx={{my:2.5 }}><CallIcon sx={{color:'#ffffff'}}/></Button>  
                <Button variant='text' color='inherit' href='tel:312-970-0053' sx={{ display: { sm: 'none', md: 'inline-block' } }}><Typography>312-970-0053</Typography></Button>
            </Grid>
            <Grid item sm={2} md={2.5}>
                <Button disabled variant='contained' sx={{my:2.5 }}><EmailIcon sx={{color:'#ffffff'}}/></Button>
                <Button variant='text' color='inherit' href='mailto:hello@chicagotamilcatholics.org' sx={{textTransform: 'none', display: { sm: 'none', md: 'inline-block'}}}><Typography>hello@chicagotamilcatholics.org</Typography></Button>
            </Grid>
            <Grid item sm={5.8} md={4.3}>
                <img src='src/images/ctclong_logo.webp' alt="Your Image Alt Text" style={{height:'80px'}} />
            </Grid>
            <Grid item sm={3.2} md={3}>
                <Grid container spacing={2}>
                <Grid item sm={1} md={1} xl={1}></Grid>
                <Grid item sm={3} md={2} xl={2}><Button variant='text' color='inherit' href='https://www.facebook.com/chicagotamilcatholics'><FacebookIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
                <Grid item sm={3} md={2} xl={2}><Button variant='text' color='inherit' href='https://www.youtube.com/@chicagotamilcatholics'><YouTubeIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
                <Grid item sm={3} md={2} xl={2}><Button variant='text' color='inherit' href='https://chat.whatsapp.com/HLGO12Uhc4CLYO98UQWc7w'><WhatsAppIcon sx={{display:'inline-block', my:2}} /></Button></Grid>
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