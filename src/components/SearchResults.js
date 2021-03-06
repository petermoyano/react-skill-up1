import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY } from "../config";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useNavigate } from "react-router-dom"
import swal from "sweetalert";

export default function SearchResults(){
    const [movieList, setMovieList] = useState([]);
    const search = useParams().search;
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
    const token = localStorage.getItem("Alkemytoken");
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchSearch(){
            const response = await axios.get(SEARCH_URL);
            setMovieList(response.data.results);
            if(response.data.results.length === 0){
                swal("Your search didn't throw any results! Please try another keyword")
                navigate("/");
            }
        }
        fetchSearch();

    }, [navigate, SEARCH_URL])
    
    return <>
        {!token && <Navigate replace to="/" />}
        <h2>List of movies matching {search}</h2>
        <ul>
            <Grid container spacing={4} justifyContent={'center'}>
                <>
                    {movieList.map((movie => {
                        return <Grid item xs={12} sm={6} md={4} lg={3} key={uuidv4()}><MovieCard key={uuidv4()} movie={movie} /></Grid>

                    }))}
                </>
            </Grid>
        </ul>
    </>
}


