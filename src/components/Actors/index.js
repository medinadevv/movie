import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import logo from "../../img/user.png"
import Slider from "react-slick"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";


const Actors = ({movieId}) => {
    const [actors,setActors]= useState([])
    const {dark} = useContext(LanguageContext)
    const getActors = (key) => {
        axios (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`)
            .then ((res)=> {
                setActors(res.data.cast)
            })
    }
    useEffect(()=> {
        getActors(API_KEY)
    },[])
    console.log(actors)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
    return (
        <div id="actors" style={{
            background: dark === true ? "black": "white"
        }}>
            <div className="container">
                <h1>Starring</h1>
                <div className="actors">
                   <Slider {...settings}>
                       {
                           actors.map((el)=> (
                               <div className="actors--card">
                                  <Link to={`/person/person_details/${el.id}`}>
                                      {el.profile_path ?  <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`} alt="img"/>
                                          :  <img src={logo} alt="img"/> }
                                  </Link>
                                   <h1>{el.name}</h1>
                               </div>
                           ))
                       }
                   </Slider>

                </div>
            </div>
        </div>
    );
};

export default Actors;



// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US






















