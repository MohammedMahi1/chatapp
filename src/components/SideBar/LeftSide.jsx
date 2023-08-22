import React from "react";
import { Link } from "react-router-dom";
import MessageIcon from '@mui/icons-material/Message';
import GroupsIcon from '@mui/icons-material/Groups';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar } from "@mui/material";
const LeftSide = () => {
  return (
    <div className="left_side">
      <div className="group-items">
        <Link to="/chat">
          <MessageIcon />
        </Link>
        <Link>
          <GroupsIcon />
        </Link>
        <Link>
          <WebStoriesIcon />
        </Link>

      </div>
      <div className="group-items">
        <Link>
          <NotificationsIcon />
        </Link>
        <Link>
          <PersonAddIcon />
        </Link>
        <Link>
          <SettingsIcon />
        </Link>

      </div>
      <div className="group-items">
      <hr style={{ outline: "none", color: "#fff" }} />
        <Avatar alt="Remy Sharp" sx={{width:27,height:27}}/>
      </div>
    </div>
  );
};

export default LeftSide;
