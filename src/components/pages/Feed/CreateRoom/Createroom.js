import React from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import { IconButton } from '@material-ui/core';
import AvatarComp from '../AvatarComp';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import './Createroom.css';

function Createroom(props) {
    return (
        <div className="createroom">
             <div className="messageSender__option">
                    <VideocamIcon id="videoicon" />
                    <span>Create Room</span>
                </div>
            <AvatarComp src={props.src}/><AvatarComp src={props.src}/><AvatarComp src={props.src}/><AvatarComp src={props.src}/><AvatarComp src={props.src}/>
            <div className="more">
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Createroom
