import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
// import for MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PreviewIcon from '@mui/icons-material/Preview';
import TextField from '@mui/material/TextField';



import swal from "@sweetalert/with-react";
//import custom css
import '../css/Header.css';

import FavsSelect from './FavsSelect';
import ThemeSwitch from './ThemeSwitch';


const pages = ['MOVIES', 'ABOUT'];
const settings = ['My Profile', 'Logout'];

const ResponsiveAppBar = ({ themeMode, SetThemeMode }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [search, setSearch] = React.useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim().length < 5) {
            swal(<h2>Please enter at least 5 characters</h2>)

        } else {
            e.target.value = "";
            navigate(`/search/${search}`)
        }

    }

    return (

        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <PreviewIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', lg: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            textDecoration: 'none',
                        }}
                    >
                        The boring App
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                color: 'primary.main'
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} >
                                    <Link to={`/${page}`} >
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </Link>
                                </MenuItem >
                            ))}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <FavsSelect
                                    key="FavsSelect"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', }}
                                />
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <ThemeSwitch themeMode={themeMode} SetThemeMode={SetThemeMode} />
                            </MenuItem>
                        </Menu>

                    </Box>

                    <PreviewIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        The Boring app
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                <Link to={`/${page}`}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                        <FavsSelect key="FavsSelect"
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }} />

                        <Box sx={{ flexGrow: 0 }}>
                            <Box
                                sx={{
                                    '& > :not(style)': { m: 1, height: '6ch' },
                                }}
                            >
                                <Box spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <ThemeSwitch themeMode={themeMode} SetThemeMode={SetThemeMode} />
                                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                        <TextField
                                            onChange={(e) => setSearch(e.target.value)}
                                            id="outlined-basic"
                                            label="Search..."
                                            variant="outlined"
                                            color="warning" />
                                    </form>
                                </Box>
                            </Box>
                        </Box>

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default ResponsiveAppBar;
