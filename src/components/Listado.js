// React and RR imports
import { useEffect, useState, useContext } from "react";
import { Navigate } from "react-router-dom"
import { Grid } from "@material-ui/core";

// external libraries
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

//components
import MovieCard from "./MovieCard"


//config
import { API_KEY } from "../config";


const Listado = () => {
    const [movieList, setMovieList] = useState([])
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
        <h2>List of most current movies</h2>
        <ul>
            <Grid container spacing={4} justifyContent={'center'}>
                <>
                    {movieList.map((movie => {
                        return <>
                            <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}>
                                <MovieCard
                                    key={uuidv4()}
                                    movie={movie}
                                />
                            </Grid>
                        </>
                    }))}
                </>
            </Grid>
        </ul>
    </>
}

export default Listado;