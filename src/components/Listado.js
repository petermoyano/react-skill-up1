// React and RR imports
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// external libraries
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

//components
import MovieCard from "./MovieCard"


const Listado = () => {
    const [movieList, setMovieList] = useState([])
    const API_KEY = "4245f97181b9770be8a62c794e0c582e"
    const token = localStorage.getItem("Alkemytoken")


    useEffect(() => {
        const ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
        async function fetchData() {
            const response = await axios.get(ENDPOINT);
            setMovieList(response.data.results);
        }
        fetchData();
    }, [setMovieList])





    return <>
        {!token && <Navigate replace to="/" />}
        <h2>Soy el componente listado</h2>
        <ul>
        {movieList.map((movie => {
            return <MovieCard key={uuidv4()} movie={movie} />

        }))}
        </ul>
    </>
}

export default Listado;