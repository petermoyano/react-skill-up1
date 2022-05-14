import React, {useEffect, useState} from "react";
import {useParams, Navigate} from "react-router-dom";
import DetailMovieCard from "./DetailMovieCard";
import axios from 'axios';


function Detalle(){
    const [movieData, setMovieData] = useState({})
    const token = localStorage.getItem('Alkemytoken');
    const {id} = useParams();
    const DETALLE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4245f97181b9770be8a62c794e0c582e&language=en-US`	

    useEffect(() =>{
        async function fetchMovieData(){
             const res = await axios.get(DETALLE_URL);
             setMovieData(res)
        }
        fetchMovieData();

        
        	
    }, [])
    return <>
    {!token && <Navigate replace to="/" />}
    <DetailMovieCard movieDetails={movieData.data} />
    </>
}

export default Detalle;