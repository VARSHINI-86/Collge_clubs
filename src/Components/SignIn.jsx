import React, { useState } from 'react';
import './signin.css';

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log(formData);
    };

    return (
        <div className="backgrounds-image">
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    minLength="3"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="8"
                />
                <a href=""><button type="submit">Sign In</button></a>
            </form>
            <div className="signup-link">
                Not registered? <a href="SignUp.jsx">SignUp here</a>
            </div>
        </div>
        </div>
    );
};

export default Signin;
