import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

import './SearchBox.css';
import { searchIcon } from '../../../assets/images';


export const SearchBox = () => {
    return (
        <div>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search Your Job" />
                <button className="search-button">
                    <SearchIcon color='primary' />
                </button>
            </div>
        </div>
    )
}
