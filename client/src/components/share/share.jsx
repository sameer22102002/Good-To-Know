import React, { useContext, useRef, useState, useEffect } from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions, Cancel } from '@mui/icons-material'
import { AuthContext } from '../../context/AuthContext.js'
import axios from 'axios'
import { redirect } from 'react-router-dom'

const Share = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const user = useContext(AuthContext);
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user.user._id,
            desc: desc.current.value,
        }; 
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          console.log(newPost.desc);
          try {
                await axios.post("/upload", data);
          } catch (err) {
                console.log(err);
          }
        }
        try {
            await axios.post("/posts", newPost);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
        };


  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src={user.user.profilePicture ? PF + user.user.profilePicture : PF + "person/noAvatar.png"} alt="" className="shareProfileImg" />
                <input placeholder={"What's in your mind " + user.user.username + " ?"} className="shareInput" ref = {desc}/>
            </div>
            <hr className='shareHr'/>
            {file && (
                <div className="shareImgContainer">
                    <img alt="" src = {URL.createObjectURL(file)} className="shareImg" />
                    <Cancel className='shareCancleImg' onClick = {() => setFile(null)} />
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                    <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                        <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                    </label>
                    <div className="shareOption">
                    <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                    <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                    <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type='submit'>Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share