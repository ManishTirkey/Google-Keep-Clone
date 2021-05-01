import React, {useState} from 'react';
import './Menus.css';
import Label from '../Labels/Labels.jsx';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Menus =()=>{

 const [selection, UpDate] = useState("Notes");
    const ActivateIt = (ev)=>{
        UpDate(ev.target.id);
    }

    return (
        <>
            <div className="menus-list">
                <div className="labels">
                    <Label 
                    icon={EmojiObjectsOutlinedIcon}
                    id="menu-1"
                    text="Notes"
                    btn={ActivateIt}
                    activate = {(selection==="Notes")?true:false}
                    />

                    <Label 
                    icon={AddAlertOutlinedIcon}
                    id="menu-2"
                    text="Reminders"
                    btn={ActivateIt}
                    activate = {(selection==="Reminders")?true:false}
                    />
                    <Label 
                    icon={CreateOutlinedIcon}
                    id="menu-3"
                    text="Edit labels"
                    btn={ActivateIt}
                    activate = {(selection==="Edit labels")?true:false}
                    />
                    <Label 
                    icon={ArchiveOutlinedIcon}
                    id="menu-4"
                    text="Archive"
                    btn={ActivateIt}
                    activate = {(selection==="Archive")?true:false}
                    />
                    <Label 
                    icon={DeleteOutlinedIcon}
                    id="menu-5"
                    text="Bin"
                    btn={ActivateIt}
                    activate = {(selection==="Bin")?true:false}
                    />
                </div>
            </div>
        </>
    );
}
export default Menus;