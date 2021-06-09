import React, { useState } from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';
import MenuItem from '@material-ui/core/MenuItem';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Popover from "@material-ui/core/Popover";
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [logo, setLogo] = useState(true);
  const search = () => {
    setLogo(false);
  }
  const searchClose = () => {
    setLogo(true);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div className="header">
      <div className="header__left">
        {logo ? <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        /> :
          <IconButton onClick={searchClose}>
            <KeyboardBackspaceIcon/>
          </IconButton>
        }
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" onClick={search} />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCirceIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <span>{user.displayName}</span>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
            <div>
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                <ExpandMoreIcon />
              </IconButton>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}

              ><div style={{ width: "363px", height: "464px",margin:"7px"  }}>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <Avatar style={{width:"60px",height:"60px"}} src={user.photoURL}/>Sai Praneeth
                  </MenuItem>
                  <hr></hr>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <FeedbackIcon/><span>Give me some feedback</span>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <SettingsIcon/><span>Settings and Privacy</span>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <HelpIcon/><span>Help and Support</span>
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <NightsStayIcon/>Display and Accessbility
                  </MenuItem>
                  <MenuItem style={{ backgroundColor: "transparent" }} disableTouchRipple>
                    <ExitToAppIcon/>Log out
                  </MenuItem>
                  <span></span>
                </div>
              </Popover>
            </div>
      </div>
    </div>
  );
}

export default Header;