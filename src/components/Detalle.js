import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from 'axios';
import swal from "@sweetalert/with-react";
import { API_KEY } from "../config"

import DetailMovieCard from "./DetailMovieCard";


function Detalle() {
    const [movieData, setMovieData] = useState(null);
    const token = localStorage.getItem('Alkemytoken');

    const { movieId } = useParams();
    const DETALLE_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`

    useEffect(() => {
        function fetchMovieData(DETALLE_URL) {
            axios.get(DETALLE_URL)
                .then(res => {
                    setMovieData(res.data)
                    console.log(res.data)
                })
                .catch(e =>
                    swal(<h2>Oops... It seams something went wrong. Please try again later.</h2>));


        }
        fetchMovieData(DETALLE_URL);
    }, [DETALLE_URL])

    return <>

        {movieData ? <DetailMovieCard movieData={movieData} /> : "Loading........."}
    </>
}

export default Detalle;