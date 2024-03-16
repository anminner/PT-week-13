import React from 'react';
import './LoginForm.css'; 

const LoginForm = () => {
    return (
        <div className="login-form">
            <h3>Log In</h3>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
