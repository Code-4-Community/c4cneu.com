import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      // primary: {
      //   // light: will be calculated from palette.primary.main,
      //  // main: '#6C4087',
      //   // dark: will be calculated from palette.primary.main,
      // },
      // secondary: {
      //   // light: will be calculated from palette.primary.main,
      //   //main: '#C71C5B',
      //   // dark: will be calculated from palette.primary.main,
      //   // contrastText: will be calculated to contrast with palette.primary.main
      // },
      // text: {
      //   //primary: '',
      //   //secondary: ''
      // },
    },
    typography: {
      fontFamily: ['IBM Plex Sans', 'sans-serif'].join(','),

      //
      h2: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 600,
      },
    },
  })
);
