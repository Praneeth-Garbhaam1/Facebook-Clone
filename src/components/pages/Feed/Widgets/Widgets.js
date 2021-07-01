import React from 'react';
import './Widget.css';
import Item from './Item';
import Contact from './Contacts/Contact';
import {  Search } from '@material-ui/icons';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';

function Widgets() {
    return (
        <div className="widgets">
            <div className="sponsor">
                <span style={{ color: "gray",fontSize: "large"}}>Sponsored</span><br></br>
                <div className="item-one"><Item /></div>
                <div className="item-one"><Item /></div>
            </div>
            <hr></hr>
                <div className="contact-header">
                    <span style={{ color: "gray",fontSize: "large"}}><b>Contacts</b></span>
                    <span className="contact-icons">
                        <IconButton><VideocamIcon/></IconButton>
                        <IconButton><Search/></IconButton>
                        <IconButton><MoreHorizIcon/></IconButton>
                    </span>
                </div>
                <Contact/>
        </div>
    )
}

export default Widgets




