import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { AppContext } from '../contexts/theme-context';

import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
    const { darkMode, toggleTheme } = useContext(AppContext);
    let theme = darkMode;
    return (
        <button className="app__dark-mode-btn icon level-right" onClick={toggleTheme}>
            <FontAwesomeIcon icon={theme ? faSun : faMoon} color={theme ? '#FFA500' : '#4D5B6B'}/>
        </button>
    );

}

export default ThemeSwitcher;