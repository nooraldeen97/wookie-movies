import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/movie/:id" exact element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
