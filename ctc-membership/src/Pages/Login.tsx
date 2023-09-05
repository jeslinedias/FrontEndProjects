import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { VisibilityOff, Visibility } from "@mui/icons-material/";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Checkbox,
  Link,
  Box,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  FormControlLabel,
  Typography,
  Container,
  Stack,
} from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://chicagotamilcatholics.org/">
        https://chicagotamilcatholics.org
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("outlined-adornment-password"),
    });
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const paperStyle = { padding: "2vh" };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper elevation={2} style={paperStyle}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              src="src\icons\ctc_vertical.png"
            />

            <Typography variant="h5">Membership Registration</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              //noValidate
              sx={{ mt: 1 }}
            >
              <Stack spacing={2} direction={"row"}>
                <TextField
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                />
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                />
              </Stack>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Stack spacing={2} direction={"row"}>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              </Stack>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="I Accept the Terms and Conditions"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
