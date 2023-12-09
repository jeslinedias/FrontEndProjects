import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import {
  Paper,
  Checkbox,
  Box,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  //FormControlLabel,
  FormControl,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import PasswordField from "../components/PasswordField";
import CopyRightCTC from "../components/CopyRightCTC";
import EmailField from "../components/EmailField";
import { createUserWithEmailAndPassword, getAuth, AuthError } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyB4nDQAhRmAbX9qW1-MsaZJtw8JlyTa7Qw",
  authDomain: "chicagotamilcatholics-6f433.firebaseapp.com",
  projectId: "chicagotamilcatholics-6f433",
  storageBucket: "chicagotamilcatholics-6f433.appspot.com",
  messagingSenderId: "160168855788",
  appId: "1:160168855788:web:75136e333a89160fd47dc9",
  measurementId: "G-F0BZLVYY89"
};

const auth = getAuth(initializeApp(firebaseConfig));

if (!auth) {
  throw new Error('Firebase authentication not initialized!');
}


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {

  const [error, setError] = React.useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    //const { password, confirmPassword } = event.currentTarget.elements;
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      setIsFormValid(true);
      navigate('/landingpage')
    } catch (error: any) {
      setIsFormValid(false);
      console.error('Error signing up:', error.code, error.message);
      handleSignInError(error as AuthError);
    }
  }    

  const handleSignInError = (error: AuthError) => {
    if (error.code === 'auth/email-already-in-use') {
      setError('Email is already in use');
    } else {
      setError('Incorrect Email or Password. Please try again.');
    }       
  };
  

  useEffect(() => {
    setIsFormValid(email.trim() !== '' && password !== '');
  }, [email, password]);


  const paperStyle = { padding: "1vh" };

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
      <Container component="main" maxWidth="md" sx={{width: {md:'900px'}}}>
        <CssBaseline />
        <Paper elevation={2} style={paperStyle}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
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
              sx={{ mt: 1, p: 2, width: {md:'800px'} }}
            >
              <Stack spacing={1} direction={"row"} margin={1}>
                <TextField
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  fullWidth
                  margin='normal'
                />
                <TextField
                  required
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  fullWidth
                  margin='normal'
                />
              </Stack>

              <Stack spacing={1} direction={"column"} margin={1} marginTop={3}>
                <EmailField setEmail={setEmail} />
                <br></br>
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

              {error && (
                <FormControl margin="normal" fullWidth>
                  <Typography variant="body2" color="error" align="center">
                    {error}
                  </Typography>
                </FormControl>
              )}

              <Typography variant="h6" justifyContent="center">
                <Checkbox value="remember" color='primary' required sx={{display:'inline-block'}} size='medium'/>
                <Typography variant='body1' sx={{display:'inline-block'}}>I accept the <Link to='#'>Terms and Conditions</Link></Typography>
              </Typography>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} disabled={!isFormValid}>
                  Sign Up
                </Button>
              <Grid container justifyContent="center">
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
