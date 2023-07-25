import React, { useState } from 'react';
import { useRouter } from 'next/router';
const Campaign = () => {
    const Router = useRouter();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [nationality, setNationality] = useState('');
    const [cause, setCause] = useState('');
    const [bankAccountHolder, setBankAccountHolder] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [branch, setBranch] = useState('');
    const [estimatedAmount, setEstimatedAmount] = useState('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            state: state,



            // 
            nationality: nationality,
            cause: cause,
            bankAccountHolder: bankAccountHolder,
            bankAccountNumber: bankAccountNumber,
            ifscCode: ifscCode,
            branch: branch,
            estimatedAmount: estimatedAmount
        };

        const response = await fetch('http://localhost:4000/campaign', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(formData);

    };

    return (
        <div className="Campaign">
            <div>
                <h1 className="main-heading">Why Need Campaign?</h1>
            </div>
            <div className="card">
                <div className="align-card">
                    <form onSubmit={handleFormSubmit}>
                        <div className="nice-form-group">
                            <label>
                                <h2>Full Name</h2>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Email</h2>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Phone Number</h2>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Address</h2>
                            </label>
                            <textarea
                                type="text"
                                name="address"
                                placeholder="Your full address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={2}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>State</h2>
                            </label>
                            <input
                                type="text"
                                name="state"
                                placeholder="Enter state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Nationality</h2>
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                placeholder="Enter nationality"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Enter Your Cause</h2>
                            </label>
                            <textarea
                                type="text"
                                name="cause"
                                placeholder="Start typing..."
                                value={cause}
                                onChange={(e) => setCause(e.target.value)}
                                rows={6}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Upload Proof</h2>
                            </label>
                            <div className="proof">
                                <h3> Certificate </h3>
                                <button>Upload</button>
                            </div>
                            <div className="proof">
                                <h3>Prescription</h3>
                                <button><span></span>Upload</button>
                            </div>
                            <div className="proof">
                                <h3>Others</h3>
                                <button><span></span>Upload</button>
                            </div>
                        </div>
                
                        <div className="nice-form-group">
                            <label>
                                <h2>Estimated amount</h2>
                            </label>
                            <input
                                type="text"
                                name="estimatedAmount"
                                placeholder="Enter estimated amount in Rs"
                                value={estimatedAmount}
                                onChange={(e) => setEstimatedAmount(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Supporting Documents</h2>
                            </label>
                            <div className="proof">
                                <h3>Amount Proof</h3>
                                <button>Upload</button>
                            </div>
                            <div className="proof">
                                <h3>Pay Slip</h3>
                                <button><span></span>Upload</button>
                            </div>
                        </div>

                        <div className="nice-form-group">
                            <button className="fundraiser">Start a Campaign Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
