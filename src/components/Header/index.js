import React, {useContext, useState} from 'react';
import logo from '../../img/vol.jpg';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {BiSun} from "react-icons/bi";
import {BsMoonFill} from "react-icons/bs";


const Header = () => {
    const [search,setSearch] = useState("")
    const {dark} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const nav = useNavigate()
    const {setLanguage}= useContext(LanguageContext)
    return (
        <div id="header" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img"/>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" >Home</NavLink>
                        <NavLink to={"/popoular"} className="header--nav__link">Popular</NavLink>
                        <NavLink to={"/topRated"} className="header--nav__link">Top Rated</NavLink>
                    </div>

                    <select onChange={(e)=> setLanguage(e.target.value)}>
                        <option value="ru-RU">Русский</option>
                        <option value="en-US">English</option>
                        <option value="fr-FR">France</option>
                    </select>

                    <div className="header--btn">
                        <input type="text" placeholder=" Search" onChange={(e) => {
                            setSearch(e.target.value)
                        }}/>
                          <button onClick={() => nav (`/search/search_movie/${search}`)}>Sign in</button>
                    </div>

                    <div className="header--dark">
                        <button onClick={()=> setDark(false)}><BiSun/></button>
                        <button onClick={()=> setDark (true)}><BsMoonFill/></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;