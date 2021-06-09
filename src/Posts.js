import React from 'react';
import { Avatar, IconButton } from '@material-ui/core'; 
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import './Posts.css';

function Posts(props) {
    return (
        <div className="posts">
            <div className="post-top">
                <Avatar src={props.profilePic} className="post__avatar"/>
                <div className="post__topinfo">
                    <span><b>{props.username}</b></span>
                    <p>8h.Visakhapatnam</p>
                </div>
            </div>
            <div className="post_message">
                <p>{props.message}</p>
            </div>
            <div className="post__image">
                <img src={props.image} alt=""/>
            </div>
            <div className="post_bottom">
                <div className="likesection">
                    <AvatarGroup max={4}>
                        <Avatar alt="like" src="https://i.pinimg.com/originals/63/3b/2e/633b2ea2a96ceaa39669a86dac0f3c01.jpg" />
                        <Avatar alt="heart" src="https://i.pinimg.com/564x/d9/fa/40/d9fa401bc63e116457be8412026cde2c.jpg" />
                    </AvatarGroup>
                    <span>55</span>
                </div>
                <hr></hr>
                <div className="like_section">
                    <button>Like</button>
                    <button>Comment</button>
                    <button>Share</button>
                </div>
                <hr></hr>
                <div className="comment_section">
                    <Avatar src=""/>
                    <input type="text" placeholder="Write your comment" />
                </div><br></br>
            </div>
        </div>
    )
}

export default Posts
