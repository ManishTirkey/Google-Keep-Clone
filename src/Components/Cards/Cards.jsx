import './Note.css';
import React from 'react';
// import OfflinePinOutlinedIcon from '@material-ui/icons/OfflinePinOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ContactlessIcon from '@material-ui/icons/Contactless';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Cards =(props)=>{
    return (
            <div className="Notes-container" id={props.id}>
                <div className="Notes">
                    <div className="select-notes disp-none">
                        <Tooltip title="Select note">
                            <CheckCircleIcon/>
                        </Tooltip>
                    </div>
                    <div className="notes-heading-container">
                        <div className="heading">
                            <h3>{props.title}</h3>
                            
                            <div 
                            className="note-pin disp-none" 
                            // onClick={props.deleteit}
                            onClick = {(eve)=>{
                                props.deleteit(props.id)
                            }}
                            >

                                {/* <Tooltip title="Pin note">
                                    <OfflinePinOutlinedIcon/>
                                </Tooltip> */}
                                <Tooltip title="Delete">
                                    <DeleteOutlineOutlinedIcon/>
                                </Tooltip>
                            </div>
                        </div>
                        <h3 className="notes-text">{props.note}</h3>
                    </div>

                    <div className="notes-icon">
                        <div className="note-custom-btn">
                            <Tooltip title="Remind me">
                                <AddAlertOutlinedIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>

                        <div className="note-custom-btn">
                            <Tooltip title="collaborator">
                                <ContactlessIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>
                        
                        <div className="note-custom-btn">
                            <Tooltip title="Change color">
                                <PaletteOutlinedIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>

                        <div className="note-custom-btn">
                            <Tooltip title="Add image">
                                <ImageOutlinedIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>

                        <div className="note-custom-btn">
                            <Tooltip title="Archive">
                                <ArchiveOutlinedIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>

                        <div className="note-custom-btn">
                            <Tooltip title="More">
                                <MoreVertOutlinedIcon fontSize="small" className="disp-none"/>
                            </Tooltip> 
                        </div>
                    </div>

                </div>
            </div>
    );
}
export default Cards;