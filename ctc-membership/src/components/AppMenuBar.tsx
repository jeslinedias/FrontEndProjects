import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";
//import MenuIcon from "@mui/icons-material/Menu";

export default function AppHeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 2 }}
          >
            <img
              className="mui-img"
              aria-setsize={3}
              src="src\icons\ctclong_logo.webp"
              alt="src\icons\ctc_vertical.png"
              sizes="small"
            />

            {/* <MenuIcon /> */}
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chicago Tamil Catholics
          </Typography> */}
          <Button color="inherit" aria-label="right">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
