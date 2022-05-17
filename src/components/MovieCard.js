import * as React from 'react';

import "../css/MovieCard.css"

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

export default function MovieCard({ movie }) {

    return (
        <Card sx={{ maxWidth: 345 }} className="MovieCard" variant="outlined">
            <CardActionArea>
                <Link to={`/detalle/${movie.id}`}>
                    <CardHeader
                        title={movie.title}
                        subheader={`released on ${movie.release_date}`}
                        sx={{ color: 'black' }}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                </Link>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Button variant="outlined">More like this</Button>
            </CardActions>
        </Card>
    );
}
