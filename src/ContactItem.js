import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import './ContactItem.css';

function ContactItem() {
    return (
        <div className="single-contact">
            <Avatar/>
            <p>Sai Praneeth</p>
        </div>
    )
}

export default ContactItem
