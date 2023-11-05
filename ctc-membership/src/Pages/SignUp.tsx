import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

import {
  Paper,
  Checkbox,
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
import PasswordField from "../components/PasswordField";
import CopyRightCTC from "../components/CopyRightCTC";
import EmailField from "../components/EmailField";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);

    //const { password, confirmPassword } = event.currentTarget.elements;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      email: data.get("email"),
      Password: password,
    });
  };

  const paperStyle = { padding: "2vh" };
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  // function emailValidation(
  //   event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  // ): boolean {
  //   console.log(event.currentTarget.value);
  //   const email = event.currentTarget.value;
  //   const re =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

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
              sx={{ m: 1, bgcolor: "secondary.main", width: "50" }}
              src="src\images\ctc_vertical.png"
              sizes="20"
            />

            <Typography variant="h5">Membership SignUp</Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              //noValidate
              sx={{ mt: 1, p: 2 }}
            >
              <Stack spacing={1} direction={"row"} margin={1}>
                <TextField
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  fullWidth
                />
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  fullWidth
                />
              </Stack>

              <Stack spacing={1} direction={"column"} width={350} margin={1}>
                <EmailField />
                <PasswordField
                  id="password"
                  label="Password"
                  passwordValue={setPassword}
                />
                <PasswordField
                  id="confirmpassword"
                  label="Confirm Password"
                  passwordValue={setConfirmPassword}
                  
                />
              </Stack>

              <Typography variant="h6">
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="I Accept the"
                />
                <Link to="#">Terms and Conditions</Link>
              </Typography>

              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={`../`}>Already have an account? Sign in</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CopyRightCTC sx={{ mt: 8, mb: 4 }} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
