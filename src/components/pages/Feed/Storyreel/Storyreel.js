import React from 'react'
import './Storyreel.css'
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Story from './Story';

function Storyreel() {
    return (
        <>
            <div className="storyreel">
                <img src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c" alt="" />
                <div className="plus">
                    <IconButton style={{ width: "40px", height: "40px" }}>
                        <AddIcon style={{ color: "#fff" }} />
                    </IconButton>
                </div>
                <span> <br></br> <br></br>create story</span>
            </div>
            <div className="storyreel">
                <Story src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c" title="Sai Praneeth" />
            </div>
            <div className="storyreel">
                <Story src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c" title="Sai Praneeth" />
            </div>
            <div className="storyreel">
                <Story src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c" title="Sai Praneeth" />
            </div>
            <div className="storyreel">
                <Story src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c" title="Sai Praneeth" />
            </div>
        </>
    )
}

export default Storyreel
