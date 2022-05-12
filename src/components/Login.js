import React, { useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
function Login() {

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
        const token = axios
            .post(URL, { email, password })
            .then(res => console.log(res))
        localStorage.setItem('Alkemytoken', token)
        console.log(token)

    }

    return (<>
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