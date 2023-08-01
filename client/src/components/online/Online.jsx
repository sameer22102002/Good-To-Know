import React from 'react'
import "./online.css"

const Online = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
        <li className='rightBarFriend'>
            <div className="rightBarProfileImageContainer">
            <img className='rightBarProfileImg' src={PF+user.profilePicture} alt="" />
            <span className='rightBarOnline'></span>
            </div>
            <span className='rightBarUserName'>{user.username}</span>
        </li>
    </div>
  )
}

export default Online