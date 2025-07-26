// src/theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define your custom colors (based on your CSS variables or brand guide)
const primaryBlue = '#232F3E'; // A deep blue, similar to Amazon's AppBar
const secondaryDark = '#3C4048'; // A dark grey/charcoal for secondary text/elements
const accentPink = '#FF4081'; // A vibrant pink for accents, buttons, highlights
const lightBackground = '#F8F8F8'; // A very light grey for backgrounds
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
      default: lightBackground, // Default background color for the body
      paper: whiteColor, // Background color for Cards, Papers, etc.
    },
    // You can add your accentPink here as a custom property if you want,
    // or just use it directly for specific components if it's not part of the main palette.
    // For example, if you want a custom accent color:
    miruteAccent: {
        main: accentPink,
        contrastText: whiteColor,
    }
  },
  typography: {
    fontFamily: [
      'Roboto', // MUI's default and a good choice
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
    // ... you can define more typography variants as needed
  },
  components: {
    // Here you can customize default props or styles for MUI components
    MuiButton: {
      defaultProps: {
        // Apply a default variant if you want all buttons to be 'contained' unless specified
        // variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text on all buttons
          borderRadius: '8px', // Slightly rounded corners
        },
      },
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                // Ensures the AppBar always uses the primary color background
                // even if not explicitly set in the component
                backgroundColor: primaryBlue,
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '8px', // Consistent border-radius for cards, papers
            }
        }
    },
    // Add more component overrides as your project grows
  },
  // You can add custom variables here, similar to CSS variables
  customColors: {
    accentPink: accentPink,
  }
});

// Make font sizes responsive to screen size
theme = responsiveFontSizes(theme);

export default theme;