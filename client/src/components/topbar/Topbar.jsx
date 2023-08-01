import React, { useContext } from 'react'
import "./topbar.css"
import { Chat, Notifications, Person, Search } from '@mui/icons-material';
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext.js';


const Topbar = () => {

  const user = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // console.log(user.user.username);

  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
        <Link to='/' style={{textDecoration:"none"}}>
          <span className="logo">GoodToKnoW</span>
        </Link>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className='searchIcon'/>
            <input placeholder='Search for Friends, Posts and Videos' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <Link to ={`/profile/${user.user.username}`}>
              <img src={user.user.profilePicture ? PF+user.user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
          </Link>
        </div>
    </div>
  )
}

export default Topbar