import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title='Covid-19 Information Centre'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title='Friends'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title='Groups'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title='Marketplace'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title='Watch'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title='Events'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" title='Memories'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title='Saved'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png" title='Pages'/>
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title='See more'/>
        </div>
    )
}

export default Sidebar
