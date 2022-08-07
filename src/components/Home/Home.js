import "./Home.css";
import React, { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import HomeCard from '../HomeCard';
import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Category from '../category/Category';
import BounceLoader from "react-spinners/BounceLoader";
import {dataContext} from "../../contexts/dataContext";

function Home(props) {

    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [filteredArr, setFilteredArr] = useState([]);
    const {setArr,arr}=useContext(dataContext);

    useEffect(getData, []);
    useEffect(updateFilteredArr, [searchValue]);

    const styleCardDiv = " col-md-4 col-lg-3 mx-auto g-2";
    const token = process.env.REACT_APP_TOKEN;


    function getData() {
        axios.get('https://wookie.codesubmit.io/movies', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(result => {
            setArr(result.data.movies);
            setLoading(false);
        })

    }

    function updateFilteredArr() {
        if (searchValue != "" && searchValue != " ") {
            axios.get(`https://wookie.codesubmit.io/movies?q=${searchValue}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(result => {
                setFilteredArr(result.data.movies);
            })
        }
    }


    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    }



    return (
        <>
            <Header searchHandler={searchHandler}
                searchValue={searchValue}
                signOutHandler={props.signOutHandler}
            />
            {loading ?
                <BounceLoader id="spinner" color="#F33820" loading={loading} size={150} />
                :
                <Container fluids>
                    <Row>
                        {
                            filteredArr.length ? filteredArr.map(elem => {
                                return <Row className={styleCardDiv}>
                                    <Link to={`/movie/${elem.id}`} style={{ textDecoration: 'none' }} >
                                        <HomeCard elem={elem} />
                                    </Link>
                                </Row>

                            })
                             : (filteredArr.length == 0 && searchValue != "" ?
                                <h1>There is no such movie name ! please enter a valid movie name </h1> :
                                <>
                                    <Category arr={arr} genres="Action" />
                                    <Category arr={arr} genres="Crime" />
                                    <Category arr={arr} genres="Drama" />
                                    <Category arr={arr} genres="Adventure" />
                                </>)
                        }

                    </Row>
                </Container>
            }
        </>
    );
}

export default Home;