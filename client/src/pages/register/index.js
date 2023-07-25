import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Register = () => {
  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().min(5, 'Password Too Short!').required('Required'),
    confirmPassword: Yup.string()
      .min(5, 'Password Too Short!')
      .required('Required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (values) => {
    const { confirmPassword, ...formFields } = values;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields),
    };
    const res = await fetch('http://localhost:4000/register', requestOptions);
    const data = await res.json();
    if (data) {
      alert(data.msg);
      // Redirect to localhost/3000 on successful registration
      window.location.href = 'http://localhost:3000';
    }
  };

  // Inline CSS styles (you can also use a separate CSS file as shown in previous responses)
  

  // CSS styles
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  };

  const appLoginStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    padding: '20px',
  };

  const h2Style = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const errorMessageStyle = {
    color: 'red',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const pStyle = {
    textAlign: 'center',
  };

  const aStyle = {
    color: '#007bff',
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={appLoginStyle}>
          <h2 style={h2Style}>Sign up</h2>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              handleRegister(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label>Full Name</label>
                  <Field name="fullName" placeholder="Full Name" style={inputStyle} />
                  {errors.fullName && touched.fullName ? (
                    <div style={errorMessageStyle}>{errors.fullName}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <Field name="email" type="email" placeholder="Email" style={inputStyle} />
                  {errors.email && touched.email ? (
                    <div style={errorMessageStyle}>{errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      style={inputStyle}
                    />
                    <i
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    ></i>
                  </div>
                  {errors.password && touched.password ? (
                    <div style={errorMessageStyle}>{errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <div style={{ position: 'relative' }}>
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      style={inputStyle}
                    />
                    <i
                      className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    ></i>
                  </div>
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div style={errorMessageStyle}>{errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <Field name="phoneNumber" type="text" placeholder="Phone Number [Optional]" style={inputStyle} />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div style={errorMessageStyle}>{errors.phoneNumber}</div>
                  ) : null}
                </div>
                <button  type="submit"
          style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
        >
          <span></span>
                  Signup
                </button>
              </Form>
            )}
          </Formik>
          <p style={pStyle}>
            Already have an account? <a href="/login" style={aStyle}>log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;