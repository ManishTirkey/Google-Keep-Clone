import React from 'react';
import './Main.css';
import Menu from './Menu.jsx';
import Notes from './Notes.jsx'

const Main =()=>{
    return (
        
        <div className="main-container">
        <Menu/>
        <Notes/>
        </div>
        
    );
}
export default Main;