import * as React from "react";
import Box from '@mui/material/Box';

import { BASE_URL } from "../config"
import { Typography } from "@mui/material";

import { numFormatter } from "../helpers";


function DetailMovieCard({ movieData: { backdrop_path,
  budget,
  genres,
  homepage,
  overview,
  poster_path,
  production_companies,
  release_date,
  tagline,
  title,
  vote_average,
  vote_count } }) {

  return <>
    <Typography variant="h1">
      {title}
    </Typography>
    <Typography variant="h3" gutterBottom>
      {tagline}
    </Typography>
    <Box 
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 400,
        },
      }}
    gutterBottom>
      <img src={`${BASE_URL}w500${backdrop_path}`} alt={title} />
      <img src={`${BASE_URL}w500${poster_path}`} alt={title} />

    </Box>
    <Box>
      <Typography variant="h3">Overview</Typography>
      <Typography variant="h5">{overview}</Typography>
      <hr />
      <Typography variant="h5">Budget</Typography>
      <Typography variant="h6">{numFormatter(budget)} dollars!</Typography>
      <hr />
      <Typography variant="h5">Visit the HomePage of {title}</Typography>
      <Typography variant="h6">{homepage}</Typography>
      <hr />
      <Typography variant="h5">More Info</Typography>
      <Typography variant="h6">This movie was realeased in {release_date}</Typography>
    </Box>
  </>
}

export default DetailMovieCard;