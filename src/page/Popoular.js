import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import MovieCard from "../components/MovieCard";
import {API_KEY} from "../API";
import {LanguageContext} from "../context";

const Popoular = () => {
    const [popular, setpopular] = useState([])
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    console.log(language)
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [active,setActive] = useState(1)
    const getpopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                console.log(res.data.results)
                setpopular(res.data.results)
            })
    }


    useEffect(() => {
        getpopular(API_KEY)
    }, [active,language])



    return (
        <div id="pupoular" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <h1>Popular</h1>
                <div className="popoular">

                    {
                        popular.map((el) => {
                            return (
                                <MovieCard el={el} id={el.id}/>
                            )
                        })
                    }
                </div>
                <div className="popoular--pages">
                    {
                        array.map((el) => (
                            <button onClick={() => setActive(el)}>{el}</button>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Popoular;