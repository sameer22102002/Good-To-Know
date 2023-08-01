import React from 'react'

const closeFriend = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
        <li className="sidebarFriend">
            <img src= {PF+user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
  )
}

export default closeFriend