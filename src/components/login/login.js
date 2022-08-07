import "./login.css";
import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";
const google = window.google;


function Login() {

    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(()=>{
        console.log(google);
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline", size:"large"}
        );
        google.accounts.id.initialize({
            client_id:"150657318603-gom14rgike3127q2jcopge1mjmafr1ek.apps.googleusercontent.com",
            callback:handleCallbackResponse
        })

    },[]);

    function handleCallbackResponse(response){
        console.log("token",response.credential);
        setCookie("token",response.credential,{ path: '/' });
    }

    console.log(cookies);
   

    
    return (
        <>
    
    <body className="cont">

<form class="sign-up">
    <h1 class="sign-up-title">wookie movies</h1>
    {/* <input type="text" class="sign-up-input" placeholder="What's your username?" autofocus/>
    <input type="password" class="sign-up-input" placeholder="Choose a password"/> */}
    {/* <input type="submit" id="signInDiv" value="Sign me up!" /> */}
    <h3 id="h3Element">Sign in by Google account</h3>
        <div id="signInDiv"></div>
      </form>
    </body>

        </>
    )
}

export default Login;