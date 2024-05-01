import React from 'react'
import { GoogleLogout } from "react-google-login"

const clientId = "310176454088-9smtl0ep4c0fjb06ph806rvic1qlqha2.apps.googleusercontent.com";

const LogOut = () => {

    const onSuccess =(res) =>{
        console.log("LOGIN SUCCESS! CURRENT USER: ",res.profileObj);
    }

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={"logOut"}
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default LogOut