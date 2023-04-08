import logo from './logo.svg';
import './Apps.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Actors from "./components/Actors";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popoular from "./page/Popoular";
import TopRated from "./page/TopRated";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./page/ActorDetails";
import Search from "./page/Search";



function App() {
    return (
        <div id="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popoular"} element={<Popoular/>}/>
                <Route path={"/toprated"} element={<TopRated/>}/>
                <Route path={"/actors"} element={<Actors/>}/>
                <Route path={"/movie/movie_details/:movieId"} element={<MovieDetails/>}/>
                <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
                <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
            </Routes>
            <Footer/>

        </div>
    );
}

export default App;
