import React from 'react'
import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilled, Group, Bookmark, HelpOutline, WorkOutline, Event, School} from '@mui/icons-material'
import { Users } from '../../dummyData'
import CloseFriend from '../closefriend/closeFriend.jsx'
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Sidebar = () => {
  // console.log(closeFriend)
  const {user, dispatch} = useContext(AuthContext) ;

  const handleLogout = (e) => {
    dispatch({type:"LOGOUT"})
}

  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className='sidebarIcon'/>
            <span className="sidebarItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarItemText">Courses</span>
          </li>
            <li className="sidebarListItem" onClick={handleLogout}>
              <LogoutIcon className='sidebarIcon'/>
              <span className="sidebarItemText">Logout</span>
            </li>
        </ul>

        <button className="sidebarButton">show more</button>
        <hr className='sidebarHr'/>

        <ul className="sidebarFriendList">
            {Users.map((u) => (<CloseFriend key = {u.id} user = {u}/>))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
  