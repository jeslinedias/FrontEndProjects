import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button} from '@mui/material';
import { Link } from "react-router-dom";


const LandingPage: React.FC = () => {
  return (
    <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={12}>
            <Card>
                <CardContent>
                <Typography variant="h4" gutterBottom>
                    Membership Page
                </Typography>
                <br></br>
                <Typography variant="h6">
                    Explore exclusive benefits by becoming a member!
                </Typography>
                <br></br><br></br>
                <Link to={'/'}>
                    <Button variant="contained" color="secondary" size='large'>
                        Learn More
                    </Button>
                </Link>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12}>
            <Card>
                <CardContent>
                <Typography variant="h4" gutterBottom>
                    Registration Form
                </Typography>
                <br></br>
                <Typography variant="h6">
                    Fill out the form to register for our services.
                </Typography>
                <br></br><br></br>
                <Link to={'/registrationform'}>
                    <Button variant="contained" color="primary" size='large'>
                        Register Now
                    </Button>
                </Link>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </Container>
  );
};

export default LandingPage;
