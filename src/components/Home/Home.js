import "./Home.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCard from '../HomeCard';
import { Container } from 'react-bootstrap';
import { Col,Row} from "react-bootstrap";
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Category from '../Category';

function Home(props) {

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
        if(searchValue!="" && searchValue!=" "){
        axios.get(`https://wookie.codesubmit.io/movies?q=${searchValue}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(result => {
            setFilteredArr(result.data.movies);
            })}
    }


    return (
        <>
           <Header searchHandler={searchHandler} 
                   searchValue={searchValue}
                   signOutHandler={props.signOutHandler}
                   />

           <Container fluids>
            <Row>
            {
                    filteredArr.length? filteredArr.map(elem => {
                        return <Row  className={styleCardDiv}>
                                  <Link to={`/movie/${elem.id}`}style={{ textDecoration: 'none'}} >
                                     <HomeCard elem={elem} />  
                                  </Link>
                              </Row>  
                        
                    }) :(filteredArr.length==0 && searchValue!=""?
                    <h1>does not exist</h1>:
                    <>
                    <Category arr={arr} genres="Action"/>
                    <Category arr={arr} genres="Crime" />
                    <Category arr={arr} genres="Drama" />
                    <Category arr={arr} genres="Adventure" />
                    </>)
                }
                
                </Row>
                </Container>
        </>
    );
}

export default Home;