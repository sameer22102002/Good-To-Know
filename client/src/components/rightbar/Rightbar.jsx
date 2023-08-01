import React, { useContext, useEffect, useState } from 'react'
import "./rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online.jsx" 
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext.js';
import {Add, Remove} from '@mui/icons-material'

const Rightbar = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext);
  const [followed, setFollowed] = useState( currentUser.followings.includes(user?._id));

  // console.log(currentUser.followings.includes(user?._id)); 
 
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id); 
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try{
      if(followed){
        await axios.put("/users/" + user._id + "/unfollow", {userId: currentUser._id});
        dispatch({ type: "UNFOLLOW", payload: user._id });
      }
      else{
        await axios.put("/users/" + user._id + "/follow", {userId: currentUser._id});
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    }catch(err)
    {
      console.log(err);
    }
    setFollowed(!followed);
  };

  const HomeRightBar = () => {
    return <>
        <div className="birthdayContainer">
          <img className = "birthdayImg" src="assets/gift.png" alt="" />
          <span className='birthdayText'><b>Raghav Charan</b> and <b>2 other friends</b> have a birthday today.</span>
        </div>
        <img className='rightBarAd' src="assets/ad.png" alt="" />
        <h4 className='rightBarTitle'>Online friends</h4>
        <ul className='rightBarFriendList'>
            {Users.map((u) => ( <Online key = {u.id} user = {u}/> ))}
        </ul>
    </>
  }

  const ProfileRightBar = () => {
    return <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}

        <h4 className='rightBarTitle'>User Information</h4>
        <div className="rightBarInfo">
            <div className="rightBarInfoItem">
                <span className='rightBarInfoKey'>City:</span>
                <span className='rightBarInfoValue'>{user.city}</span>
            </div>

            <div className="rightBarInfoItem">
                <span className='rightBarInfoKey'>From:</span>
                <span className='rightBarInfoValue'>{user.from}</span>
            </div>

            <div className="rightBarInfoItem">
                <span className='rightBarInfoKey'>Age:</span>
                <span className='rightBarInfoValue'>{user.age}</span>
            </div>

            <div className="rightBarInfoItem">
                <span className='rightbarInfoKey'>Relationship:</span>
                <span className='rightbarInfoValue'>{user.relationships === 1 ? "Single" : user.relationships === 2 ? "Married" : "-"}</span>
            </div>
        </div>

        <h4 className='rightBarTitle'>User Friends</h4>
        <div className="rightbarFollowings">

        { friends.map((friend) => (
            <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }} >
              <div className="rightbarFollowing">
                <img src={ friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvatar.png"} alt="" className="rightBarFollowingImg" />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}          

        </div>        
    </>
  }

  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
          {user ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar