import React from 'react';
import './Menu.css';
import Menus from './Menus/Menus.jsx';

const Menu =()=>{

    return (
        <div className="menu-container container-1 container">
            <Menus/>           

            <div className="footer">
            <span>Open-source licenses</span>
            </div>
        </div>
    );
}
export default Menu;