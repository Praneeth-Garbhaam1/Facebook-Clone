import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
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
                    <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png"/>
                    <img src="https://e7.pngegg.com/pngimages/764/686/png-clipart-white-heart-love-social-media-like-button-emoticon-emoji-like-new-s-text-heart-thumbnail.png"/>
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
                    <input type="text" placeholder="comment \n sai praneeth" />
                </div><br></br>
            </div>
        </div>
    )
}

export default Posts
