import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {LanguageContext} from "../../context";

const Trailer = ({movieId}) => {
    const [video, setVideo] = useState([])
    const {dark} = useContext(LanguageContext)


    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`)
            .then((res) => {
                setVideo(res.data.results)
            })
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])
    console.log(video)

    return (
        <div id="video" style={{
            background: dark === true ? "black":"white"
        }}>
            <div className="container">
                <div className="video">
                    {
                        video.map((el)=> (
                            <div className="video--card">
                                <iframe width="375" height="272" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="BLACKPINK - ‘Shut Down’ DANCE PERFORMANCE VIDEO" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Trailer;