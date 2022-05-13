import axios from "axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Listado = () => {
    const API_KEY = "4245f97181b9770be8a62c794e0c582e"
    const token = localStorage.getItem("Alkemytoken")
    console.log(token);

useEffect(()=> {
    const ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    async function fetchData(){
    const response = await axios.get(ENDPOINT);
    console.log(response.data)
    }
    fetchData();
    

}, [])





    return <>
        {!token && <Navigate replace to="/" />}
            <h2>Soy el componente listado</h2>
        </>
        }

        export default Listado;