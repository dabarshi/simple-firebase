import React from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    return (
        <div>
            <button>Google Login</button>
        </div>
    );
};

export default Login;