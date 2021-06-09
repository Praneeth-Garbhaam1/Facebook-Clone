import React,{ useState }from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Button from '@material-ui/core/Button';
import Dialog from './Dialogbox';
import { useStateValue } from './StateProvider';
import './Messagesender.css';

function Messagesender(props) {
    const [{ user }, dispatch] = useStateValue();
    
    return (
        <div className="message">
            <div className="first">
                <Avatar  src={user.photoURL}/>
                <Dialog/>
            </div>
            <hr></hr>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default Messagesender
