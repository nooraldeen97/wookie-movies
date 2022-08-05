import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login/login.js';
import Details from './components/Details';
import React, { useEffect ,useState} from 'react';
import { useCookies } from "react-cookie";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies();
  const [valid,setValid]=useState("");
  useEffect(()=>{
    // setValid(cookies.get("token"))
    console.log(cookies.token);
  },[])

  function signOutHandler(){
    console.log("here we gooooooooooo");
    removeCookie("token",{path:"/"});
    console.log(cookies);
}
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={cookies.token?<Home signOutHandler={signOutHandler}/>:<Login/>}/> 
        <Route path="/movie/:id" exact element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
