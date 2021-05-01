// import React, {useState} from 'react';
import React from 'react';
import './Label.css';

const Label = (props)=>{
    
    
    return (
        <React.Fragment>
            <div
            className="menu"
            id={props.id}
            >
                <div className="icon"
                style={{backgroundColor: props.activate?"#feefc3":"#fff"}}>
                
                    <div 
                    className="selection-btn"
                    id={props.text}
                    onClick={props.btn}
                    >
                    </div>

                    <div className="label-Icon">
                        <props.icon className="label-icon"/>
                    </div>
                    <div className="label-text">
                        <span>{props.text}</span> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    );


}
export default Label;