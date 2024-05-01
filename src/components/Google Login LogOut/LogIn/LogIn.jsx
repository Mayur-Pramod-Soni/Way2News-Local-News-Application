import React from 'react'
import GoogleLogin from "react-google-login"

const clientId = "310176454088-9smtl0ep4c0fjb06ph806rvic1qlqha2.apps.googleusercontent.com";

const LogIn = () => {

    const onSuccess =(res) =>{
        console.log("LOGIN SUCCESS! CURRENT USER: ",res.profileObj);
    }

    const onFailure =(res) =>{
        console.log("LOGIN Failed! res: ",res);
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignnedIn={true}
            />
        </div>
    )
}

export default LogIn