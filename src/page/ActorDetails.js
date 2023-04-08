import React,{useState,useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../API"
import {useParams} from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import MovieVideo from "../components/MovieVideo";

const ActorDetails = () => {
    const [actorDetails,setActorDetails] = useState({})
    const [bio,setBio] = useState(300)
    const {personId} = useParams()

    const getActorDetails = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US`)
    .then((res) => {
            setActorDetails(res.data)
        })
    }


const more =(text) => {
        if (bio === 300) {
            setBio(text.length)
        } else  {
            setBio(300)
        }
}
   useEffect(()=> {
       getActorDetails(API_KEY)
   }, [])
    console.log(ActorDetails)


    const {profile_path,also_known_as,birthday,biography,name,place_of_birth} = actorDetails
    return (
        <div id="actorDetails">
            <div className="container">
                <div className="actorDetails">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actorDetails--info">
                        <h1>{name}</h1>
                        <h3> Дата рождения :{birthday}</h3>
                        <h3> Место рождения :{place_of_birth}</h3>
                        <h4>Так же известность как :</h4>
                    <div className="actorDetails--info__about">
                        {
                           also_known_as?.map((el) => (
                               <p style={{
                                   fontSize : `15px`,
                                   margin : "5px 20px 30px 0"
                               }}>{el}</p>
                           ))
                        }

                    </div>

                    <h5>Биография</h5>
                    <p>{biography?.slice(0,bio)}</p>
                    <h6 onClick={() => {
                        more(biography)
                    }}>{bio === 300 ? "Читать еще" : "Закрыть"}</h6>
                        <MovieVideo personId={personId}/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;