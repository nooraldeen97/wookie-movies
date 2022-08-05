import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import Login from './components/login/login.js';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" exact element={<Home/>}/> 
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/movie/:id" exact element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
