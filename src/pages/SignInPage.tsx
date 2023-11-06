import * as React from 'react';

import { createStyles, withStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { getCurrentUser } from '../features/signin/api';
import { SignInForm } from '../features/signin/components/SignInForm';
import { useSignInService } from '../features/signin/hooks/useSignInService';
import Notification from '../libs/ui/components/Notification';
import SignInStyles from './styles/SignInStyles';

const customTypography = createTheme({
  typography: {
    fontFamily: 'Poppins',
  },
}).typography;

const theme = createTheme({
  typography: customTypography,
});

const styles = createStyles({
  ...(SignInStyles as any),
});

const SignInSide = withStyles(styles)(({ classes }: any) => {
  const { createPost, isLogging } = useSignInService();
  const navigate = useNavigate();
  const accessToken = getCurrentUser();

  React.useEffect(() => {
    if (accessToken) {
      navigate('/product', { replace: true });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" className={classes.loginContent}>
        <CssBaseline />
        <Notification />
        <Grid item xs={12} sm={12} md={4} className={classes.formContent}>
          <Box className={classes.formGroup}>
            <img src="icons/logo.png" className={classes.logo} height="auto" />
            <Box className={classes.formTitle}>
              <Typography className={classes.formSignInText}>
                Welcome to
              </Typography>
              <Typography className={classes.formCompanyText}>U-xer</Typography>
            </Box>
            <Typography className={classes.formSubtitle}>
              Sign into your account
            </Typography>
            <Box component="form" sx={{ mt: 1, display: 'contents' }}>
              <SignInForm onSubmitClick={createPost} isLogging={isLogging} />
            </Box>
          </Box>
        </Grid>
        <Grid item md={8} className={classes.formLoginImage}>
          <img src="icons/login-image.svg" className={classes.LoginImage} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
});

export default SignInSide;
