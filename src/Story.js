import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './Story.css'

function Story(props) {
    return (
        <div className="story">
            <Avatar src={props.profileSrc}/>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Story
