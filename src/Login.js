import React from 'react';
import "./Login.css";
import Button from "@material-ui/core/Button";

export default function Login() {
    function signIn() {

    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://whatsappbrand.com/wp-content/themes/whatsapp-brc/images/WhatsApp_Logo_2.png" alt=""/>
            </div>
            <div className="login__text">
                <h1>Sign In To WhatsApp</h1>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>


        </div>
    );
}