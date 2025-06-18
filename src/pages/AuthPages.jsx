import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // <--- ALREADY PRESENT, GOOD!

const AuthPages = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || 'register');

  const [registerFullName, setRegisterFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    console.log('Register Attempt:', {
      fullName: registerFullName,
      email: registerEmail,
      password: registerPassword,
      confirmPassword: registerConfirmPassword,
    });
    alert('Registration form submitted! (Check console for data)');
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    console.log('Sign In Attempt:', {
      email: signInEmail,
      password: signInPassword,
    });
    alert('Sign In form submitted! (Check console for data)');
  };

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
            <form style={pageStyles.form} onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                style={pageStyles.input}
                value={registerFullName}
                onChange={(e) => setRegisterFullName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email Address"
                style={pageStyles.input}
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={pageStyles.input}
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                style={pageStyles.input}
                value={registerConfirmPassword}
                onChange={(e) => setRegisterConfirmPassword(e.target.value)}
              />
              <button type="submit" style={pageStyles.submitButton}>Register Account</button>
            </form>
          </div>
        ) : (
          <div style={pageStyles.formSection}>
            <h1 style={pageStyles.heading}>Sign In to Your Account</h1>
            <p style={pageStyles.paragraph}>
              Welcome back! Please sign in to access your Mirute Ltd. account.
            </p>
            <form style={pageStyles.form} onSubmit={handleSignInSubmit}>
              <input
                type="email"
                placeholder="Email Address"
                style={pageStyles.input}
                value={signInEmail}
                onChange={(e) => setSignInEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={pageStyles.input}
                value={signInPassword}
                onChange={(e) => setSignInPassword(e.target.value)}
              />
              <button type="submit" style={pageStyles.submitButton}>Sign In</button>

              {/* ✅ FIXED LINK FOR NETLIFY */}
              <Link to="/forgot-password" style={pageStyles.forgotPasswordLink}>
                Forgot Password?
              </Link>
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
    margin: '60px auto',
    padding: '40px',
    backgroundColor: 'var(--white)',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    textAlign: 'center',
    color: 'var(--text-color)',
    lineHeight: '1.7',
  },
  tabNav: {
    display: 'flex',
    marginBottom: '30px',
    borderBottom: '2px solid var(--border-color)',
  },
  tabButton: {
    flexGrow: 1,
    padding: '18px 0',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: 'var(--text-color)',
    cursor: 'pointer',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
    outline: 'none',
  },
  activeTab: {
    color: 'var(--primary-blue)',
    borderBottom: '3px solid var(--primary-blue)',
  },
  tabContent: {
    paddingTop: '20px',
  },
  formSection: {},
  heading: {
    fontSize: '2.5em',
    color: 'var(--primary-blue)',
    marginBottom: '20px',
    fontWeight: '700',
  },
  paragraph: {
    fontSize: '1.05em',
    marginBottom: '30px',
    color: 'var(--secondary-dark)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  input: {
    padding: '14px 18px',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    fontSize: '1em',
    outline: 'none',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  submitButton: {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--white)',
    padding: '16px 25px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
    marginTop: '10px',
  },
  forgotPasswordLink: {
    marginTop: '15px',
    color: 'var(--primary-blue)',
    textDecoration: 'underline',
    fontSize: '0.95em',
    transition: 'color 0.3s ease',
  },
};

export default AuthPages;