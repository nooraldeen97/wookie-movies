import axios from 'axios';
import "./Details.css";
import React, { useState, useEffect } from 'react';
import {
    useParams
  } from "react-router-dom";
import env from "react-dotenv";
import Header from './Header';




function Details(){

    const { id } = useParams();
    console.log(id)
    const token = process.env.REACT_APP_TOKEN;
    const [arr, setArr] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    useEffect(getData ,[]);
    useEffect(handleDetails ,[arr]);

    function handleDetails () {
      const filteredArr = arr.filter(movie => {
        console.log(movie.id)

        return movie.id == id;
      })
      console.log(filteredArr);
      setFilteredArr(filteredArr);
    }

     

    function getData() {

        axios.get('https://wookie.codesubmit.io/movies', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then(result => {
              setArr(result.data.movies);
            })
            
    }
    return(
        <>
        <Header/>

	<section class="profile_container">
		<div class="profile_img_section">
			<img class="profile_img-LG" src={filteredArr.length?filteredArr[0].poster:"photo"} />
		</div>

		<div class="profile_desc_section">
			<h2>{filteredArr.length?filteredArr[0].title:"title"} <span>({filteredArr.length?filteredArr[0].imdb_rating:"rating"})</span></h2>
			<div class="interests">
                <span class="interests_item">{filteredArr.length?filteredArr[0].released_on.split("-")[0]:"description"}</span>
                <span class="interests_item">{filteredArr.length?filteredArr[0].length:"description"}</span>
                <span class="interests_item">{filteredArr.length?filteredArr[0].director:"description"}</span>
               
			</div>
			<h6 class="description">cast : {filteredArr.length?filteredArr[0].cast.join(" , "):"description"}</h6>
            
			<p class="description">{filteredArr.length?filteredArr[0].overview:"description"}</p>

		</div>

	</section>


        </>
    )

}

export default Details;