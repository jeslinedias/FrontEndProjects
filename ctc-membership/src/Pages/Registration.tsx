import React from 'react';
import {
  Container,
  CssBaseline,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';
import Personal from './Personal';
import Contact from './Contact';
import Member from './Member';

   
const RegistrationForm: React.FC = () => {

  return (
    <Container maxWidth="lg">
    <Paper elevation={3}>
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div>
        <Toolbar />
        <Typography variant="h4">Registration Form</Typography>
        <br></br>
        <Typography variant='h6'>"We welcome you and are delighted to have you as a member of Chicago Tamil Catholics"</Typography>
        <hr></hr>
        <br></br>
        <Typography variant='h6'>Personal Details</Typography>
        <form noValidate>
          <Personal />
          <br></br><br></br><br></br>
          <Member />
          <br></br><br></br><br></br>
          <Contact />
          <br></br><br></br>
        </form>
      </div>
    </Container>
    </Paper>
    </Container>
  );
};

export default RegistrationForm;
