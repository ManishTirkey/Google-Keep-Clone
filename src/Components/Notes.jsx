import React, {useState} from 'react';
import './Notes.css';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import BrushIcon from '@material-ui/icons/Brush';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import OfflinePinOutlinedIcon from '@material-ui/icons/OfflinePinOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ContactlessIcon from '@material-ui/icons/Contactless';
import PaletteOutlinedIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Note from './Cards/Cards.jsx';


const Notes =()=>{
    const [st1, upDate] = useState({display: "none"});
    const [st2, upDate2] = useState({display: "flex"});
    // -------------------------------------------------------------------------

    const [noteobj, UpdateNotes] = useState({
        Notetitle: "",
        note: "",
    });       
    const [Allnotes, AddNotes] = useState([])
    

    // --------------------------


    const deleteNote = (id="none")=>{
        // console.log("delete");
        // console.log(id);

        AddNotes(()=>{
            return Allnotes.filter((note, index)=>{
                // console.log(note, index)
                if (id !==index){
                    return note
                }
              
            }); 
        })
    }

    // ----------------------------
     const Add =()=>{
        if(noteobj.title!=="" || noteobj.note!==""){
            AddNotes((prev)=>{
                return [...prev, noteobj]
            })            
        }

        UpdateNotes({
            note: "",
            Notetitle: "",
        });
    }
    // -----------------------------
    const InputUpdate = (event)=>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        const {name, value} = event.target;

        UpdateNotes((prev)=>{
            return {
                ...prev,
                [name]: value,
            }
        });
    }

    // ------------------------------------------------------------------------
    
    const expand=()=>{
        upDate({
            display: "flex",
        });
        upDate2({
            display: "none",
        });        
    }
    const comprase=()=>{
        upDate({
            display: "none",
        }); 
        upDate2({
            display: "flex",
        });


    }
    return (
        <div className="notes-container container-2 container">
            <div className="notes">
                <div className="create-note-container">
                    <div className="create-note">

                        <div className="note-title" style={st1}>

                            <input 
                            type="text" 
                            placeholder="Title"
                            onChange={InputUpdate}
                            name="Notetitle"
                            value={noteobj.Notetitle}
                            autoComplete="off"
                            // onBlur={comprase}
                            // onFocus={expand} 
                            />
                            

                            <div className="pin custom-btn" onClick={Add}>
                                <Tooltip title="Add">
                                    <OfflinePinOutlinedIcon/>
                                </Tooltip>
                            </div>
                        </div>
                        
                        <div className="take-a-note ">

                            <input 
                            id="main-input"
                            type="text" 
                            onFocus={expand} 
                            placeholder="Take a note..."
                            onChange={InputUpdate}
                            name="note"
                            value = {noteobj.note}
                            autoComplete="off"
                            // onBlur={comprase}
                            />


                            <div className="import-icons" style={st2}>
                                <div className="imp-icon custom-btn">
                                    <Tooltip title="New List">
                                        <CheckBoxOutlinedIcon/>
                                    </Tooltip>
                                </div>

                                <div className="imp-icon custom-btn">
                                    <Tooltip title="New note with drawing">
                                        <BrushIcon/>
                                    </Tooltip> 
                                                                            
                                </div>

                                <div className="imp-icon custom-btn">
                                    <Tooltip title="New note with image">
                                        <ImageOutlinedIcon />
                                    </Tooltip> 
                                </div>
                            </div>
                        </div>

                        <div className="customize-icons" style={st1}>
                            <div className="all-icons">
                                <div className="custom-btn">
                                    <Tooltip title="Remind me">
                                        <AddAlertOutlinedIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                                <div className="custom-btn">
                                    <Tooltip title="collaborator">
                                        <ContactlessIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                                <div className="custom-btn">
                                    <Tooltip title="Change color">
                                        <PaletteOutlinedIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                                <div className="custom-btn">
                                    <Tooltip title="Add image">
                                        <ImageOutlinedIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                                <div className="custom-btn">
                                    <Tooltip title="Archive">
                                        <ArchiveOutlinedIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                                <div className="custom-btn">
                                    <Tooltip title="More">
                                        <MoreVertOutlinedIcon fontSize="small"/>
                                    </Tooltip> 
                                </div>
                            </div>
                            
                            <div className="close" onClick={comprase}>
                                <div className="close-btn custom-btn">
                                    Close
                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                <div className="cards">
                    {/* <Note/> */}

                    {Allnotes.map((notes, index)=>{
                        return <Note 
                        key={index} 
                        id = {index}
                        title={notes.title} 
                        note={notes.note}
                        deleteit={deleteNote}
                        />
                    })}  
                    
                </div>
            </div>
        </div>        
    );
}
export default Notes;