import React from 'react'
import AvatarComp from '../../AvatarComp';
import './ContactItem.css';

function ContactItem() {
    return (
        <div className="single-contact">
            <AvatarComp className="avataricon"/>
            <span>Sai Praneeth</span>
        </div>
    )
}

export default ContactItem
