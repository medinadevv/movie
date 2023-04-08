import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import movie from "../../img/movie.jpg"
import {LanguageContext} from "../../context";


const MovieVideo = ({personId}) => {
    const [movieVideo,setMovieVideo] = useState([])
    const {dark} = useContext(LanguageContext)

    const video = (key) => {
        axios (`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${key}&language=en-US`)
            .then((res)=> {
                setMovieVideo(res.data.cast)
            })
    }

    useEffect(()=> {
        video(API_KEY)
    },[])
    console.log(movieVideo)
    return (
        <div id="movieVideo" style={{
            background: dark=== true ? "black" : "white"
        }}>
                <div className="movieVideo">
                    {
                        movieVideo.map((el) => {
                             return (
                                 <div className="movieVideo--card">
                                     <Link to={`/movie/movie_details/${el.id}`}>
                                         {el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                             width={140} alt=""/>
                                            : <img width={140} src={movie} alt=""/>}
                                     </Link>
                                     <h4>{el.title}</h4>
                                 </div>
                             )
                        })
                    }

            </div>
        </div>
    );
};

export default MovieVideo;





//https://api.themoviedb.org/3/person/{person_id}/movie_credits?api_key=<<api_key>>&language=en-US