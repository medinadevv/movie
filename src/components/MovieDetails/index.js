import React, {useContext} from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import Actors from "../Actors";
import Trailer from "../Trailer";
import {LanguageContext} from "../../context";


const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {movieId} = useParams()


    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
            .then((res) => {
                console.log(res.data)
                setDetails(res.data)
            })
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [])

    const {poster_path, title, release_date, overview, runtime, vote_average, backdrop_path, genres} = details
    return (

        <>
            <div id="details"
                 style={{
                     backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`})`
                 }}>> <div className="container">
                <div className="details">
                    <div className="details--img">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt=""/>
                    </div>
                    <div className="details--info">
                        <h1>{title}</h1>
                        <div className="details--info__genres">
                            {
                                genres?.map((el) => {
                                    return (
                                        <h4>{el.name}</h4>
                                    )

                                })
                            }
                        </div>
                        <h4> Дата выхода : {release_date}</h4>

                        <div className="details--info__par">
                            <h2>{Math.floor(runtime / 60)} <small>ч</small> {runtime % 60} <small>мин</small></h2>
                            <h1>{Math.floor(vote_average * 10)}<small>%</small></h1>
                        </div>
                        <h3>{overview}</h3>


                    </div>
                </div>
            </div>
            </div>
            <Actors movieId={movieId}/>
            <Trailer movieId={movieId}/>
            <Actors personId={movieId}/>
        </>
    )
};

export default MovieDetails;
//https://image.tmdb.org/t/p/w300_and_h450_bestv2/