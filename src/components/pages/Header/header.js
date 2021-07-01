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
import { useStateValue } from '../../../StateProvider';
import MenuItem from '@material-ui/core/MenuItem';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Popover from "@material-ui/core/Popover";
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { CSSTransition } from 'react-transition-group';

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const [logo, setLogo] = useState(true);
  const [activeMenu, setActiveMenu] = useState('main')
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
            <KeyboardBackspaceIcon />
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
          >
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500}>
            <div className="Menubar">
              <MenuItem disableTouchRipple>
                <Avatar style={{ width: "60px", height: "60px", marginRight: "10px" }} src={user.photoURL} />
                <div className="profilename">
                  <span style={{ fontSize: "18px" }}><b>Sai Praneeth</b></span><br></br>
                  <span id="seeurprofile">See your profile</span>
                </div>
              </MenuItem>
              <b><hr></hr></b>
              <MenuItem id="menulistitem" disableTouchRipple>
                <div className="item">
                  <IconButton id="icon-btn">
                    <FeedbackIcon />
                  </IconButton>
                  <div className="profilename">
                    <span>Give feedback</span>
                    <br></br>
                    <span id="seeurprofile" style={{fontSize:"smaller"}}>Help us to improve the new facebook</span>
                  </div>
                </div>
                <ChevronRightIcon id="right-icon"/>
              </MenuItem>
              <hr></hr>
              <MenuItem id="menulistitem" disableTouchRipple>
                <div className="item">
                  <IconButton id="icon-btn">
                    <SettingsIcon />
                  </IconButton><span>Settings and Privacy</span>
                </div>
                <ChevronRightIcon id="right-icon"/>
              </MenuItem>
              <MenuItem id="menulistitem" disableTouchRipple>
                <div className="item">
                  <IconButton id="icon-btn">
                    <HelpIcon />
                  </IconButton><span>Help and Support</span>
                </div>
                <ChevronRightIcon id="right-icon"/>
              </MenuItem>
              <MenuItem id="menulistitem" disableTouchRipple>
                <div className="item">
                  <IconButton id="icon-btn">
                    <NightsStayIcon />
                  </IconButton>  <span>Display and Accessbility</span>
                </div>
                <ChevronRightIcon id="right-icon"/>
              </MenuItem>
              <MenuItem id="menulistitem" disableTouchRipple>
                <div className="item">
                  <IconButton id="icon-btn">
                    <ExitToAppIcon />
                  </IconButton><span>Log out</span>
                </div>
                <ChevronRightIcon id="right-icon"/>
              </MenuItem>
              <span id="privacy">Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Facebook &copy; 2021</span>
            </div>
            </CSSTransition>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Header;