import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../API";
import {useParams} from "react-router-dom";


const Search = () => {
    const [searchMovie, setSearch] = useState([])
    const {movieName} = useParams()
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
            .then((res) => {
                setSearch(res.data.results)
                console.log(res.data.results)
            })
    }

    useEffect(() => {
        getSearch(API_KEY)
    }, [movieName])


    return (
        <div id="search">
            <div className="container">
                <div className="search">

                    {
                        searchMovie.map((el) => {
                            return (
                                <div className="search--card">
                                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                         alt="img"/>
                                    <h3>{el.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Search;