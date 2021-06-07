import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import Button from '@material-ui/core/Button';
import './Messagesender.css';

function Messagesender() {
    return (
        <div className="message">
            <div className="first">
                <Avatar  />
                <input type="text" placeholder="Whats on your mind, sai?" />
            </div>
            <hr></hr>
            <div className="messagebut">
                <div className="message-option">
                    <Button>
                        <VideocamIcon style={{color:"#e52645"}}/>Live video
                    </Button>
                </div>
                <div className="message-option">
                    <Button>
                        <PhotoLibraryIcon style={{color:"#41b35e"}}/><span>Photo/Video</span>
                    </Button>
                </div>
                <div className="message-option">
                    <Button>
                        <InsertEmoticonIcon style={{color:"#eab12a"}}/><span>Feeling/Activity</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Messagesender
