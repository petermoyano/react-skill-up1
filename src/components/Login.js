import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom"
function Login() {
    const navigate = useNavigate()
    const URL = 'http://challenge-react.alkemy.org'
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "" || password === "") {
            swal(
                <h2>Los campos no pueden estar vacios</h2>
            );
            return;
        }
        axios
            .post(URL, { email, password })
            .then(res => {
                console.log(res.data);
                localStorage.setItem('Alkemytoken', res.data.token);

                swal(
                    <h2>Exito!</h2>
                );
                navigate("/listado");
            });
    }

    const token = localStorage.getItem("Alkemytoken");
    return (
    <>
        {token && <Navigate to="/listado" /> }
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label><span>Email</span>
                    <input type="email" name="email" />
                    <br />
                </label>
                <label><span>Password</span>
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>)
}

        export default Login;