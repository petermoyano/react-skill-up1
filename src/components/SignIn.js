import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, Navigate } from "react-router-dom"
import axios from "axios";
import swal from "@sweetalert/with-react";
import { useTransition } from 'react';


const theme = createTheme();

export default function SignIn() {
    const [formData, setFormData] = React.useState(null);
    const navigate = useNavigate();
    const BE_URL = 'https://boringappbe.herokuapp.com/auth/token';

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({ ...fData, [name]: value }))
    }
    const submitHandler = e => {
        e.preventDefault();
        const { username, password } = formData;

        if (username === "" || password === "") {
            swal(
                <h2>Los campos no pueden estar vacios</h2>
            );
            return;
        }
        axios
            .post(BE_URL, formData)
            .then(res => {
                console.log(res.data);
                console.log(formData)
                localStorage.setItem('token', res.data.token);
                navigate("/listado");
            })
            .catch(err => {
                swal("Sorry, wrong credentials")
                console.log(formData, BE_URL)
                console.log(err)
            });
    }

    const token = localStorage.getItem("token");

    return (
        <ThemeProvider theme={theme}>
            {token && <Navigate to="/listado" />}
            <Container component="main" maxWidth="xs" marginBottom={4}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="username"
                            id="username"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}