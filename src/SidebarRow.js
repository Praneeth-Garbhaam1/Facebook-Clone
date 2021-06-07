import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebarRow.css'

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <span>{title}<br></br><span id="req"><span id="dot">.</span>4 new</span></span>
        </div>
    )
}

export default SidebarRow
