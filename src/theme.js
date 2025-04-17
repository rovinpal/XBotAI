import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9785BA',
      light: '#AF9FCD',
      contrastText: '#F9FAFA',
    },
    secondary: {
      main: '#D7C7F4',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#3C3C3C',
      secondary: '#AF9FCD',
    },
  },
  typography: {
    fontFamily: 'Ubuntu, sans-serif',
    h1: {
      fontFamily: 'Ubuntu, sans-serif',
    },
    h2: {
      fontFamily: 'Ubuntu, sans-serif',
    },
    h3: {
      fontFamily: 'Ubuntu, sans-serif',
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
    body2: {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, #FFFFFF 0%, #9785BA 100%)',
        },
      },
    },
  },
});

export default theme;
