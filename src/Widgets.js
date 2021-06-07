import React from 'react';
import './Widget.css';
import Item from './Item';
import Contact from './Contact';
function Widgets() {
    return (
        <div className="widgets">
            <div className="sponsor">
                <span>Sponsored</span><br></br>
                <div className="item-one"><Item /></div>
                <div className="item-one"><Item /></div>
            </div>
            <hr></hr>
            <div className="contacts">
                <h4>Contacts</h4>
                <Contact/>
            </div>
        </div>
    )
}

export default Widgets




// https://external.fhyd14-1.fna.fbcdn.net/safe_image.php?d=AQFG1hcChtHUaKVY&w=960&h=960&url=https%3A%2F%2Fwww.facebook.com%2Fproducts%2Fimage%2F%3Fitem_id%3D2898617976932284%26display%3Dmulti%26version%3D1%26uh%3Df35d0ae0%26image_id%3D5196861397053216%26display_option%3Dbackground_cropping_and_padding%26logging_boundary%3Ddpa_rhc&cfs=1&tp=1&ccb=3-5&_nc_hash=AQH-gHO7lV9U86Z4