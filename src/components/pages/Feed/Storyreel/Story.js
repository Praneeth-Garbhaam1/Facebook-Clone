import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './Story.css'

function Story(props) {
    return (
        <div className="story">
            <img id="image" src="https://scontent.fhyd14-2.fna.fbcdn.net/v/t1.6435-0/s552x414/190354380_1492592561071735_3170820532021821712_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=365331&_nc_ohc=4XCBsa2i-dcAX9pjPdw&_nc_ht=scontent.fhyd14-2.fna&tp=7&oh=d82462d43910c84b7b40c5bddcb0ba6d&oe=60E32BB1"/>
            <div className="avatar">
                <Avatar src={props.src} style={{border:"3px solid #216bda"}}/>
            </div>
            <div className="title">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Story
