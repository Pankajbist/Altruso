import { useState } from 'react';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
 
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [forgotPasswordStatus, setForgotPasswordStatus] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Validate the form data against the schema
      await LoginSchema.validate(formData);

      // Add your login logic here. Check if the credentials are correct.

      // For now, just assume login is successful.
      setTimeout(() => {
        router.push('http://localhost:3000');
      }, 100);

    } catch (error) {
      console.error(error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleVerificationCodeSubmit = () => {
    // Add code to verify the entered verification code
    setForgotPasswordStatus('otp-verified');
  };

  const handleNewPasswordSubmit = () => {
    // Add code to submit the new password
    setForgotPasswordStatus('password-reset-success');
  };

  const handleForgotPasswordSubmit = () => {
    // Add code to submit the email for password reset
    setForgotPasswordStatus('otp-required');
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  });

  const { email, password } = formData;

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>LOGIN</h1>
      <form onSubmit={handleLogin} style={{ display: 'grid', gap: '10px' }}>
        <div>
          <label style={{ fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <p style={{ color: 'red', fontSize: '14px', margin: '5px 0' }}>{LoginSchema.errors?.email}</p>
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Password:</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password (min 8 characters)"
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
              onClick={handleShowPassword}
              style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
            ></i>
          </div>
          <p style={{ color: 'red', fontSize: '14px', margin: '5px 0' }}>{LoginSchema.errors?.password}</p>
        </div>

        <p style={{ textAlign: 'left', marginTop: '0px' }}>
          <button
            type="button"
            onClick={handleForgotPassword}
            style={{ padding: '8px', border: 'none', backgroundColor: 'transparent', color: 'blue', cursor: 'pointer' }}
          >
            Forgot Password?
          </button>
        </p>

        <button
          type="submit"
          style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
        >
          <span></span>
          Login
        </button>
      </form>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '300px',
              padding: '20px',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
          >
            {forgotPasswordStatus === 'password-reset-success' ? (
              <div>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Password Reset Successful!</p>
                <p style={{ textAlign: 'center' }}>You can now log in with your new password.</p>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPasswordModal(false);
                      setForgotPasswordStatus('');
                      setVerificationCode('');
                      setNewPassword('');
                      setConfirmNewPassword('');
                    }}
                    style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', cursor: 'pointer' }}
                  >
                    OK
                  </button>
                </div>
              </div>
            ) : forgotPasswordStatus === 'otp-verified' ? (
              <div>
                <p style={{ textAlign: 'center' }}>Please enter your new password:</p>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>New Password:</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>Confirm New Password:</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    onClick={handleNewPasswordSubmit}
                    style={{ padding: '8px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : forgotPasswordStatus === 'otp-required' ? (
              <div>
                <p style={{ textAlign: 'center' }}>Please enter your email to reset your password.</p>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>Email:</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    onClick={handleForgotPasswordSubmit}
                    style={{ padding: '8px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p style={{ textAlign: 'center' }}>Please enter the verification code sent to your email:</p>
                <div style={{ marginBottom: '10px' }}>
                  <label style={{ fontWeight: 'bold' }}>Verification Code:</label>
                  <input
                    type="text"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
                  />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="button"
                    onClick={handleVerificationCodeSubmit}
                    style={{ padding: '8px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button
                type="button"
                onClick={() => {
                  setShowForgotPasswordModal(false);
                  setForgotPasswordStatus('');
                  setVerificationCode('');
                  setNewPassword('');
                  setConfirmNewPassword('');
                }}
                style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', cursor: 'pointer' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Sign Up Link */}
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Don't have an account?{' '}
        <a href="http://localhost:3000/register" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default Login;
