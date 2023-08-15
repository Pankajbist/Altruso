import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Layout, Button, theme } from 'antd';

const { Content } = Layout;

const Campaign = () => {
    const [file, setFile] = useState(null);

    const handleFormSubmit = async (values) => {
        const data = new FormData();

        Object.entries(values).forEach((item) => {
            data.append(item[0], item[1]);
        });
        data.append('campaigns', file);

        fetch('http://localhost:4000/campaigns', {
            method: 'POST',
            body: data,
        });

        
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
             <h1 style={{ textAlign:"center"}}>Start a Campaign</h1>
      <h2 style={{ textAlign:"center", color:"aqua"}}>___________________________</h2>
                    <Formik
                        initialValues={{
                            username: '',
                            email: '',
                            phoneNumber: '',
                            address: '',
                            state: '',
                            nationality: '',
                            cause: '',
                            bankAccountHolder: '', 
                            bankAccountNumber: '', 
                            swiftCode: '', 
                            branch: '', 
                            estimatedAmount: '',
                        }}
                        validationSchema={Yup.object({
                            
                        })}
                        onSubmit={(values) => {
                            handleFormSubmit(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                            <div className="nice-form-group">
                            <label>
                                <h2>Full Name</h2>

                            </label>
                                <Field placeholder="Full Name" name="username" />
                                {errors.username && touched.username ? (
                                    <div>{errors.username}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Email</h2>

                            </label>
                                <Field placeholder="Email" name="email" />
                                {errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Phone Number</h2>

                            </label>
                                <Field placeholder="Phone Number" name="phoneNumber" />
                                {errors.phoneNumber && touched.phoneNumber ? (
                                    <div>{errors.phoneNumber}</div>
                                ) : null}
                                <br /> 
                                 <label>
                                <h2>Current Address</h2>

                            </label>
                                <Field placeholder="Current Address" name="address" />
                                {errors.address && touched.address ? (
                                    <div>{errors.address}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Permanent Address</h2>

                            </label>
                                <Field placeholder="Permanent Address" name="address" />
                                {errors.address && touched.address ? (
                                    <div>{errors.address}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>State</h2>

                            </label>
                                <Field placeholder="State" name="state" />
                                {errors.state && touched.state ? (
                                    <div>{errors.state}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Nationality</h2>

                            </label>
                                <Field placeholder="Nationality" name="nationality" />
                                {errors.nationality && touched.nationality ? (
                                    <div>{errors.nationality}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Bank Account Holder</h2>

                            </label>
                                <Field placeholder="Bank Account Holder" name="bankAccountHolder" />
                                    {errors.bankAccountHolder && touched.bankAccountHolder ? (
                                        <div>{errors.bankAccountHolder}</div>
                                    ) : null}
                                    <br />
                                    <label>
                                <h2>Bank Account Number</h2>

                            </label>
                                    <Field placeholder="Bank Account Number" name="bankAccountNumber" />
                                    {errors.bankAccountNumber && touched.bankAccountNumber ? (
                                        <div>{errors.bankAccountNumber}</div>
                                    ) : null}
                                    <br />
                                    <label>
                                <h2>SWIFT Code</h2>

                            </label>
                                    <Field placeholder="SWIFT Code" name="swiftCode" />
                                    {errors.swiftCode && touched.swiftCode ? (
                                        <div>{errors.swiftCode}</div>
                                    ) : null}
                                    <br />
                                    <label>
                                <h2>Branch</h2>

                            </label>
                                    <Field placeholder="Branch" name="branch" />
                                    {errors.branch && touched.branch ? (
                                        <div>{errors.branch}</div>
                                    ) : null}
                                    <br/>
                                <label>
                                    
                                <h2>Enter Your Cause</h2>
                            </label>
                                <Field
                                    placeholder="Start typing ..."
                                    name="cause"
                                    component="textarea"
                                />
                                {errors.cause && touched.cause ? (
                                    <div>{errors.cause}</div>
                                ) : null}
                                <br />
                                <label>
                                <label>
                                <h2>Estimated amount</h2>
                            </label>
                                <Field placeholder="Estimated Amount" name="estimatedAmount" />
                                {errors.estimatedAmount && touched.estimatedAmount ? (
                                    <div>{errors.estimatedAmount}</div>
                                ) : null}
                                <br />
                                <br/>   
                                <h2 style={{color:'black',textAlign:'center'}}><b>Upload Proof</b> </h2>
                            </label>
                            <br/> 
                         
                                <label>
                                <h2>Write Proof Letter Of Relative Sector </h2>
                            </label> <Field
                                    placeholder="Start typing ..."
                                    name="cause"
                                    component="textarea"
                                />
                                {errors.cause && touched.cause ? (
                                    <div>{errors.cause}</div>
                                ) : null}
                                <br />
                                <label>
                                <h2>Upload Photo of Campaigner</h2>
                            </label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                               
                                <div className="nice-form-group">
                            <button className="fundraiser"><b>Start a Campaign Now</b></button>
                        </div>
                            </div>
                        </Form>
                        )}
                    </Formik>
              
        
        </Layout>
    );
};

export default Campaign;
