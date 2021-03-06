import * as React from 'react';

import "../css/MovieCard.css"
import { FavsContext } from '../FavsContext'

import { Link } from "react-router-dom";


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';



export default function MovieCard({ movie }) {

    const { Favs, setFavs } = React.useContext(FavsContext)

    const addOrRemoveFromFavs = (id, title) => {
        //Check if id is in Fav, if true, detele it, else add it
        if (Favs.some(fav => fav.id === id)) {
            const NewFavs = Favs.filter(fav => fav.id !== id);
            setFavs(NewFavs);
        }
        else {
            setFavs(Favs => [...Favs, { title, id }]);
        }
    }

    // Update localStorage when Favs state change
    React.useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(Favs))
    }, [Favs]);

    //set color of Fav icon
    const favIcon = () => {
        function movieInFav() {
            return Favs.some(function (fav) {
                return fav.id === movie.id
            })
        }
        if (movieInFav()) {
            return <FavoriteIcon color='primary' />
        }
        return <FavoriteIcon />
    }

    return (
        <Card sx={{ maxWidth: 450 }} className="MovieCard" variant="outlined">
            <CardActionArea>
                <Link to={`/detalle/${movie.id}`}>
                    <CardHeader
                        title={movie.title.slice(0, 25)}
                        subheader={`${movie.release_date.slice(0, 4)}`}
                        sx={{ color: '#823200', maxHeight: 100, minHeight: 100 }}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </Link>
                <CardContent sx={{ maxHeight: 160, overflow: "hidden" }}>
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <Box >
                    <IconButton aria-label="add to favorites" onClick={() => addOrRemoveFromFavs(movie.id, movie.title)}>
                        {favIcon()}
                    </IconButton>
                    <Link to={`/detalle/${movie.id}`}>
                        <Button>More info</Button>
                    </Link>
                </Box>
            </CardActions>
        </Card>
    );
}
