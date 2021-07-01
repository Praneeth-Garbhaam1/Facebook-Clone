import React,{ useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core'; 
import './Posts.css';
import { MoreHoriz } from '@material-ui/icons';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Picker from 'emoji-picker-react';
function Posts(props) {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
      setChosenEmoji(emojiObject);
    };
    return (
        <div className="posts">
            <div className="post-top">
                <div className="top_info">
                    <Avatar src={props.profilePic} className="post__avatar" />
                    <div className="post__topinfo">
                        <span><b>{props.username}</b></span>
                        <p>8h.&#127758; Visakhapatnam</p>
                    </div>
                </div>
                <IconButton id="morehorizonvert">
                    <MoreHoriz />
                </IconButton>
            </div>
            <div className="post_message">
                <p>{props.message}</p><br></br>
                <p>Pc:<a href="#">@viswanathan2196 </a><br></br>
                .<br></br>
                <a href="#">#bike</a><a href="#"> #200ns </a><a href="#">#pulsar</a> <a href="#">#biker</a> <a href="#">#bikersofinstagram</a> <a href="#">#dreamalive</a><a href="#">#travel</a> <a href="#">#wanderlust</a> <a href="#">#instagood </a></p>
            </div>
            <div className="post__image">
                <img src={props.image} alt=""/>
            </div>
            <div className="post_bottom">
                <div className="likesection">
                    {/* <AvatarGroup max={4}>
                        <Avatar alt="like" src="https://i.pinimg.com/originals/63/3b/2e/633b2ea2a96ceaa39669a86dac0f3c01.jpg" />
                        <Avatar alt="heart" src="https://i.pinimg.com/564x/d9/fa/40/d9fa401bc63e116457be8412026cde2c.jpg" />
                    </AvatarGroup> */}
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
                    {chosenEmoji ? (
                    <input type="text" value={chosenEmoji.emoji} placeholder="Write your comment" />):
                    (<input type="text"  placeholder="Write your comment" />)}
                    <div className="comment_icons">
                        <IconButton>
                            
                             
                            <EmojiEmotionsIcon  />

                        </IconButton>
                    <IconButton>
                    <PhotoCameraIcon/>
                    </IconButton>
                    <IconButton>
                    <GifIcon/>
                    </IconButton>
                    <IconButton>
                    <InsertDriveFileIcon/>
                    </IconButton>
                    </div>
                </div><br></br>
            </div>
        </div>
    )
}

export default Posts
