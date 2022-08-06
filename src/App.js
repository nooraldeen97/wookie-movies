import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/login/login.js';
import Details from './components/Details/Details';
import React, {useState} from 'react';
import {dataContext} from "./contexts/dataContext"
import { useCookies } from "react-cookie";

function App() {

  const [cookies, setCookie, removeCookie] = useCookies();
  const [arr, setArr] = useState([]);


  function signOutHandler(){
    removeCookie("token",{path:"/"});
}
  return (
    <BrowserRouter>
      <dataContext.Provider value={{arr,setArr}}>
    <Routes>
        <Route path="/" exact element={cookies.token?<Home signOutHandler={signOutHandler}/>:<Login/>}/> 
        <Route path="/movie/:id" exact element={<Details/>}/>
    </Routes>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
