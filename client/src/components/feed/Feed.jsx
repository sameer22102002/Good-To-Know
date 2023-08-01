import React, { useState, useEffect, useContext } from 'react'
import "./feed.css"
import Share from "../share/share.jsx"
import Post from "../post/Post.jsx"
import axios from "axios"
import { AuthContext } from '../../context/AuthContext.js'
// import {Posts} from "../../dummyData.js"

const Feed = ({username}) => {
  const [posts ,setPosts] = useState([]);
  const user = useContext(AuthContext)
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("/posts/profile/"+username): await axios.get("/posts/timeline/"+user.user._id);
      setPosts(res.data.sort((p1, p2) => {return new Date(p2.createdAt) - new Date(p1.createdAt)}));
    }
    fetchPosts();
  },[username, user.user._id]);  
   
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username || username === user.username || username === user.user.username) && <Share/>}
        {posts.map((p) => (  <Post key = {p._id} post = {p}/>  ))}

      </div>
    </div>
  )
}

export default Feed