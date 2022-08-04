import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from './HomeCard';
import "./Home.css";
import { Container } from 'react-bootstrap';
import { Col,Row} from "react-bootstrap";
import Header from './Header';
import { Link } from "react-router-dom";
import env from "react-dotenv";

function Home() {

    const [arr, setArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [searchValue,setSearchValue]=useState("");
   
    useEffect(getData,[]);
    useEffect(updateFilteredArr,[searchValue]);
    const styleCardDiv = " col-md-4 col-lg-3 mx-auto g-2"
    const token = process.env.REACT_APP_TOKEN;

    function getData() {

        axios.get('https://wookie.codesubmit.io/movies', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(result => {
            console.log(result.data.movies)
                setArr(result.data.movies);
            })
            
        }
        
        

    const searchHandler =(e)=> {
        console.log(searchValue);
            setSearchValue(e.target.value);
          
    }

    function updateFilteredArr(){
        axios.get(`https://wookie.codesubmit.io/movies?q=${searchValue}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(result => {
            setFilteredArr(result.data.movies);
            })
    }


    return (
        <>
           <Header searchHandler={searchHandler} searchValue={searchValue}/>

           <Container fluids>
            <Row>
                {
                    filteredArr.length? filteredArr.map(elem => {
                        return <Row  className={styleCardDiv}>
                                  <Link to={`/movie/${elem.id}`}style={{ textDecoration: 'none'}} >
                                     <HomeCard elem={elem} />  
                                  </Link>
                              </Row>  
                        
                    }) :  
                    arr.map(elem => {
                        return <Row  className={styleCardDiv}>
                                     
                                 <Link to={`/movie/${elem.id}`}style={{ textDecoration: 'none'}} >
                                     <HomeCard elem={elem} />   
                                 </Link>
                             </Row>
                             
                    })
                }
                </Row>
                </Container>
        </>
    );
}

export default Home;