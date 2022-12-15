import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
// import { refreshTokenSetup } from './refreshtokens';

const clientId = '916703848201-bq5a3ue5ht7cdo67itvao4g116kejorg.apps.googleusercontent.com'


function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} \n See console for full profile object.`
        );
        // refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login`
        );
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;