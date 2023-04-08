import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from ".././API";
import MovieCard from "../components/MovieCard";
import {LanguageContext} from "../context";


const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [active,setActive] = useState(1)
    const getTopRated = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setTopRated(res.data.results)
            })
    }

    useEffect(() => {
        getTopRated(API_KEY)
    }, [active,language])

    return (
        <div id="topRated" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <h1>Top Rated</h1>
                <div className="top--pages">
                    <button onClick={() => setActive(active - 1)}>Back</button>
                    <h3 style={{
                        textAlign: "center",
                        color: "white"
                    }}>{active}{active ? active === -0 : setActive(1)}</h3>
                    <button onClick={() => setActive(active + 1)}>Next</button>
                </div>
                <div className="topRated">
                    {
                        topRated.map((el) => {
                            return (
                                <MovieCard el={el} key={el.id}/>
                            )
                        })
                    }
                </div>


            </div>
        </div>
    );
};

export default TopRated;
