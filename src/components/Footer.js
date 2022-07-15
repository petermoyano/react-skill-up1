import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
    return (<footer>
        <Box
            bgcolor={"text.primary"}
            color='#823200'
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1} sx={{ paddingBottom: 1 }}>
                            Go to
                        </Box>
                        <Box sx={{ p: 1 }}>
                            <Link to="/contact" color="inherit">
                                About
                            </Link>
                        </Box>
                        <Box sx={{ p: 1 }}>
                            <Link to="/privacy" color="inherit">
                                Back end
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Account
                        </Box>
                        <Box sx={{ p: 1 }}>
                            <Link to="/signin" color="inherit">
                                Login
                            </Link>
                        </Box>
                        <Box sx={{ p: 1 }}>
                            <Link to="/register" color="inherit">
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>
                            Contact
                        </Box>
                        <Grid container justifyContent={"space-evenly"} sx={{ py: 2 }}>
                            <Link to="/" color="inherit" >
                                <GitHubIcon />
                            </Link>
                            <Link to="/" color="inherit">
                                <TwitterIcon />
                            </Link>
                            <Link to="/" color="inherit">
                                <LinkedInIcon />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>The boring App &reg; {new Date().getFullYear()}</Box>
        </Box>

    </footer>)
}

export default Footer;