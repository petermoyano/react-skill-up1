import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { FavsContext } from '../FavsContext'



export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { Favs } = React.useContext(FavsContext)

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'inherit',
        display: 'block',
        alignItems: 'center',
        textAlign: 'center'
    }}
      >
        Favorites
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          {Favs.length ? Favs.map(fav => {return <MenuItem onClick={handleClose}>{fav.title}</MenuItem>}) : "No favorites added yet!"}
      </Menu>
    </div>
  );
}
