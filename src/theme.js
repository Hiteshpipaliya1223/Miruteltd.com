// src/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define your custom colors (based on your CSS variables or brand guide)
const primaryBlue = '#232F3E'; // A deep blue, similar to Amazon's AppBar
const secondaryDark = '#3C4048'; // A dark grey/charcoal for secondary text/elements
const accentOrangePink = '#fd7e14'; // A warm orange/pink accent for highlights - MATCHING INDEX.CSS
const lightBackground = '#f8f9fa'; // Very light grey for subtle backgrounds - MATCHING INDEX.CSS
const whiteColor = '#FFFFFF'; // Pure white

let theme = createTheme({
  palette: {
    primary: {
      main: primaryBlue,
      light: '#4C5D73', // A lighter shade for primary
      dark: '#1C2530',  // A darker shade for primary
      contrastText: whiteColor,
    },
    secondary: {
      main: secondaryDark,
      light: '#65696D', // A lighter shade for secondary
      dark: '#2A2D33',  // A darker shade for secondary
      contrastText: whiteColor,
    },
    error: {
      main: '#F44336', // Standard MUI red for errors
    },
    warning: {
      main: '#FF9800', // Standard MUI orange for warnings
    },
    info: {
      main: '#2196F3', // Standard MUI blue for info
    },
    success: {
      main: '#4CAF50', // Standard MUI green for success
    },
    text: {
      primary: secondaryDark, // Default text color
      secondary: '#757575', // Lighter text for secondary info
    },
    background: {
      default: lightBackground, // Default background color for the body - THIS IS THE KEY!
      paper: whiteColor, // Background color for Cards, Papers, etc.
    },
    miruteAccent: { // Custom accent color for buttons/highlights
        main: accentOrangePink, // Using the orange-pink from index.css
        contrastText: whiteColor,
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: primaryBlue,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: primaryBlue,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: secondaryDark,
    },
    h4: {
        fontSize: '1.75rem',
        fontWeight: 600,
        color: primaryBlue,
    },
    h5: {
        fontSize: '1.5rem',
        fontWeight: 600,
        color: secondaryDark,
    },
    body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
        color: secondaryDark,
    },
    body2: {
        fontSize: '0.9rem',
        lineHeight: 1.5,
        color: '#757575',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          transition: 'background-color 0.3s ease-in-out, transform 0.15s ease-in-out',
        },
        containedPrimary: {
            '&:hover': {
                backgroundColor: theme => theme.palette.primary.dark,
            },
        },
        containedSecondary: {
            '&:hover': {
                backgroundColor: theme => theme.palette.secondary.dark,
            },
        },
        containedMiruteAccent: {
            '&:hover': {
                backgroundColor: '#e66b12', // A slightly darker orange-pink for hover
            },
        },
      },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: primaryBlue,
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
            }
        }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
          },
        },
      },
    },
    MuiLink: {
        defaultProps: {
            underline: 'hover',
        },
        styleOverrides: {
            root: {
                color: accentOrangePink, // Links use the accent color
                '&:hover': {
                    color: primaryBlue, // Change color on hover
                },
            },
        },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;