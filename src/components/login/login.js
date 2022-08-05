import "./login.css";

function Login() {

    return (
        <>
    
    <body className="cont">

<form class="sign-up">
    <h1 class="sign-up-title">Sign up in seconds</h1>
    <input type="text" class="sign-up-input" placeholder="What's your username?" autofocus/>
    <input type="password" class="sign-up-input" placeholder="Choose a password"/>
    <input type="submit" value="Sign me up!" class="sign-up-button"/>
  </form>
    </body>

        </>
    )
}

export default Login;