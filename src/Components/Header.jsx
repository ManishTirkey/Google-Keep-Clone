import './Header.css';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Image/image.png';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import AppsIcon from '@material-ui/icons/Apps';
import Action from "./Action/Action";



const Header = ()=>{
    const Update=(ev)=>{
        Action(ev.target.id);
    }


  return (
    <React.Fragment>
    <div className="navbar">
        <nav className="nav">
            <div className="first-item items">
                <div className="control"> 
                    <input type="checkbox" onChange={Update} id="menu-collapse-expand"/>                       
                    
                    <MenuIcon className="menuIcon"/>
                </div>

                <div className="img"><img src={Logo} alt="notes img"/></div>
                <h2>Keep</h2>
            </div>

            
            <div className="third-item items">
                <div className="search">
                    <button><SearchIcon/></button>
                    <input id="searchInput" type="text" placeholder="Search" autoComplete="false"/>
                </div>
                <div className="Icons">
                    <div className="Icon-1 Icon"><RefreshIcon/></div>
                    <div className="Icon-2 Icon"><BlurOnIcon/></div>
                    <div className="Icon-3 Icon"><SettingsIcon/></div>
                </div>
            </div>

            <div className="fourth-item items">
                <AppsIcon/>
                <Avatar className="manish">M</Avatar>
            </div>

        </nav>
        
        <div className="line"></div>
    </div>
    

    </React.Fragment>    
  );
}


export default Header;