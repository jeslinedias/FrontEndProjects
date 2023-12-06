import React from 'react';
import {
  Container,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import Personal from './Personal';
import Contact from './Contact';
import Member from './Member';
import { useNavigate } from 'react-router-dom';

export default function Registration() {

  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Toolbar />
          <Typography variant="h4">Registration Form</Typography>
          <br />
          <Typography variant="h6">
            "We welcome you and are delighted to have you as a member of Chicago Tamil Catholics"
          </Typography>
          <hr />
          <br />
          <Typography variant="h6">Personal Details</Typography>
          <form onSubmit={handleFormSubmit}>
            <Personal />
            <br />
            <br />
            <br />
            <Member />
            <br />
            <br />
            <br />
            <Contact />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ my: 2 }}
            >
              Register
            </Button>
          </form>
          <br />
          <br />
        </Container>
      </Paper>
    </Container>
  );
};
