import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, message,Space } from 'antd';
import { useHistory } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { setUserDetails } from '@/redux/reducerSlice/users';
import { useDispatch } from 'react-redux';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [msg, contextHolder] = message.useMessage();

 
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (values) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    const res = await fetch('http://localhost:4000/login',requestOptions)
    const data = await res.json()
    if(data && data.success && res.status==200) { 
      dispatch(setUserDetails(data))
      router.push('/')
      msg.info(data.msg);
    }else{
      msg.info(data.msg);
    }
    }catch(err){
      msg.info('Something went wrong!!');
    }}
    const LoginSchema = Yup.object().shape({
      BankAccountNumber: Yup.string().min(8, 'BankAccountNumber Too Short!').max(50, 'Too Long!').required('Required'),
      password: Yup.string().min(8, 'Password Too Short!').max(50, 'Too Long!').required('Required'),
    });
  

  // Inline CSS styles

  // CSS styles
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
  const h3Style = {
    textAlign: 'center',
    marginBottom: '20px',
    color:"aqua"
  
 
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
      display: 'flex',
  justifyContent: 'center',
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

  // ... (same as the styles in the Register component)

  return (
    <>
     {contextHolder}
      <div style={containerStyle}>
        <div style={appLoginStyle}>
          
          <h2 style={h2Style}>Log in</h2>
          <h3 style={h3Style}>_______________________________________________________</h3>

          <Formik
            initialValues={{
              BankAccountNumber: '',
              password: '',
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label>BankAccountNumber</label>
                  <Field name="BankAccountNumber" type="BankAccountNumber" placeholder="BankAccountNumber" style={inputStyle} />
                  {errors.BankAccountNumber && touched.BankAccountNumber ? (
                    <div style={errorMessageStyle}>{errors.BankAccountNumber}</div>
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
                <button
                  type="submit"
                  style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'aqua', color: '#000', cursor: 'pointer' }}
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <p style={pStyle}>
            Don't have an account? <a href="/register" style={aStyle}>Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
