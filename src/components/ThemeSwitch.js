import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function ThemeSwitch({ themeMode, SetThemeMode }) {
    const toggleThemeMode = () => {
        themeMode === 'light' ? SetThemeMode('dark') : SetThemeMode('light')
    }
    return (
        <FormGroup >
            <FormControlLabel control={<Switch onClick={toggleThemeMode} />} label={`${themeMode.toUpperCase()}`} />
        </FormGroup>
    );
}