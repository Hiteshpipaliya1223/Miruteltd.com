import React, { useState } from 'react';

const AuthPages = () => {
  const [activeTab, setActiveTab] = useState('register'); // 'register' or 'signIn'

  return (
    <div style={pageStyles.container}>
      <div style={pageStyles.tabNav}>
        <button
          style={{ ...pageStyles.tabButton, ...(activeTab === 'register' ? pageStyles.activeTab : {}) }}
          onClick={() => setActiveTab('register')}
        >
          Register / Create Account
        </button>
        <button
          style={{ ...pageStyles.tabButton, ...(activeTab === 'signIn' ? pageStyles.activeTab : {}) }}
          onClick={() => setActiveTab('signIn')}
        >
          Sign In
        </button>
      </div>

      <div style={pageStyles.tabContent}>
        {activeTab === 'register' ? (
          <div style={pageStyles.formSection}>
            <h1 style={pageStyles.heading}>Create Your Mirute Ltd. Account</h1>
            <p style={pageStyles.paragraph}>
              Join the Mirute Ltd. community to enjoy faster checkout, track your orders, and manage your preferences.
            </p>
            <form style={pageStyles.form}>
              <input type="text" placeholder="Full Name" style={pageStyles.input} />
              <input type="email" placeholder="Email Address" style={pageStyles.input} />
              <input type="password" placeholder="Password" style={pageStyles.input} />
              <input type="password" placeholder="Confirm Password" style={pageStyles.input} />
              <button type="submit" style={pageStyles.submitButton}>Register Account</button>
            </form>
          </div>
        ) : (
          <div style={pageStyles.formSection}>
            <h1 style={pageStyles.heading}>Sign In to Your Account</h1>
            <p style={pageStyles.paragraph}>
              Welcome back! Please sign in to access your Mirute Ltd. account.
            </p>
            <form style={pageStyles.form}>
              <input type="email" placeholder="Email Address" style={pageStyles.input} />
              <input type="password" placeholder="Password" style={pageStyles.input} />
              <button type="submit" style={pageStyles.submitButton}>Sign In</button>
              <a href="#" style={pageStyles.forgotPasswordLink}>Forgot Password?</a>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const pageStyles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto', // Increased vertical margin
    padding: '40px', // More internal padding
    backgroundColor: 'var(--white)',
    borderRadius: '12px', // More rounded corners
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)', // Professional shadow
    textAlign: 'center',
    color: 'var(--text-color)',
    lineHeight: '1.7',
  },
  tabNav: {
    display: 'flex',
    marginBottom: '30px', // More space
    borderBottom: '2px solid var(--border-color)', // Lighter border
  },
  tabButton: {
    flexGrow: 1,
    padding: '18px 0', // More padding
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1.2em', // Slightly larger font
    fontWeight: 'bold',
    color: 'var(--text-color)',
    cursor: 'pointer',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
    outline: 'none', // Remove outline on focus
  },
  activeTab: {
    color: 'var(--primary-blue)',
    borderBottom: '3px solid var(--primary-blue)', // Stronger underline for active tab
  },
  tabContent: {
    paddingTop: '20px',
  },
  formSection: {
    // Styles specific to the form content (no changes needed here, as parent handles it)
  },
  heading: {
    fontSize: '2.5em', // Larger heading
    color: 'var(--primary-blue)',
    marginBottom: '20px', // More space
    fontWeight: '700',
  },
  paragraph: {
    fontSize: '1.05em',
    marginBottom: '30px', // More space
    color: 'var(--secondary-dark)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', // Increased gap between form elements
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '14px 18px', // Larger input fields
    border: '1px solid var(--border-color)',
    borderRadius: '8px', // More rounded
    fontSize: '1em',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    '&:focus': {
      borderColor: 'var(--primary-blue)',
      boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.25)', // Subtle focus ring
    }
  },
  submitButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '16px 25px', // Larger button
    border: 'none',
    borderRadius: '8px', // More rounded
    fontSize: '1.2em', // Larger font
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)', // Shadow for button pop
    marginTop: '10px', // Space above button
    '&:hover': {
      backgroundColor: '#0056b3', // Darker blue on hover
      transform: 'translateY(-2px)', // Subtle lift
      boxShadow: '0 8px 20px rgba(0, 123, 255, 0.4)', // More shadow on hover
    },
  },
  forgotPasswordLink: {
    marginTop: '15px', // More space
    color: 'var(--primary-blue)',
    textDecoration: 'underline',
    fontSize: '0.95em',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: 'var(--accent-pink)',
    },
  },
  '@media (max-width: 768px)': {
    container: {
      margin: '30px 20px',
      padding: '30px',
    },
    heading: {
      fontSize: '2em',
    },
    tabButton: {
      padding: '15px 0',
      fontSize: '1em',
    },
    input: {
      padding: '12px 15px',
    },
    submitButton: {
      padding: '14px 20px',
      fontSize: '1.1em',
    },
  },
};

export default AuthPages;