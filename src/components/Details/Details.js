import "./Details.css";
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FaCaretLeft } from "react-icons/fa";
import Header from '../Header/Header';
import Stars from './Stars';
import { dataContext } from "../../contexts/dataContext";




function Details() {


  const { id } = useParams();
  const { arr, setArr } = useContext(dataContext);
  const [filteredArr, setFilteredArr] = useState([]);
  useEffect(getData, []);
  useEffect(handleDetails, [arr]);


  function handleDetails() {
    const filteredArr = arr.filter(movie => {
      return movie.id == id;
    })
    setFilteredArr(filteredArr);
  }


  function getData() {
    setArr(arr);
  }


  return (
    <>
      <Header page="Details" />
      <a href="/" id='backBtn' >
        <FaCaretLeft />
        back</a>
      <section class="profile_container">
        <div class="profile_img_section">
          <img class="profile_img-LG" src={filteredArr.length ? filteredArr[0].poster : "photo"} />
        </div>

        <div class="profile_desc_section">
          <div id='rateDiv'>
            <h2 className='title'>{filteredArr.length ? filteredArr[0].title : "title"} <span>({filteredArr.length ? filteredArr[0].imdb_rating : "rating"})</span></h2>
            <Stars starNum={filteredArr.length ? filteredArr[0].imdb_rating : ""} />
          </div>

          <div class="interests">
            <span class="interests_item">{filteredArr.length ? filteredArr[0].released_on.split("-")[0] : "description"}</span>
            <span class="interests_item">{filteredArr.length ? filteredArr[0].length : "description"}</span>
            <span class="interests_item">{filteredArr.length ? filteredArr[0].director : "description"}</span>
          </div>
          <h6 class="description">cast : {filteredArr.length ? filteredArr[0].cast.join(" , ") : "description"}</h6>

          <p class="description">{filteredArr.length ? filteredArr[0].overview : "description"}</p>

        </div>

      </section>


    </>
  )

}

export default Details;