import React from 'react';
import StoryReel from './Storyreel';
import { IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MessageSender from './Messagesender';
import CreateRoom from './Createroom';
import Posts from './Posts';
import './Feed.css'

function Feed() {
    return (
        <div className="feed">
            <div className="stories">
                <StoryReel />
            </div>
            <div className="moreStories">
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div className="section">
            <MessageSender />
            <CreateRoom src="https://lh3.googleusercontent.com/a-/AOh14GiUFD0WRAk_BTkFEiJ_4eLkg4LsIKF14OAi-UG7qW0=s96-c"/>
            <Posts 
                profilePic="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file78t1uwxtc48ldc0s1z6-1879176103-1578811466.jpg?itok=e6uJpSj3"
                message="Yo!! Check Out my new DP"
                timestamp="This is a timestamp"
                username="Robert Downie Jr"
                image="https://www.rd.com/wp-content/uploads/2018/03/rdj.jpg"
            />
            <Posts 
                profilePic="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file78t1uwxtc48ldc0s1z6-1879176103-1578811466.jpg?itok=e6uJpSj3"
                message="Yo!! Check Out my new DP"
                timestamp="This is a timestamp"
                username="Robert Downie Jr"
                image="https://www.rd.com/wp-content/uploads/2018/03/rdj.jpg"
            />
            <Posts 
                profilePic="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/file78t1uwxtc48ldc0s1z6-1879176103-1578811466.jpg?itok=e6uJpSj3"
                message="Yo!! Check Out my new DP"
                timestamp="This is a timestamp"
                username="Robert Downie Jr"
                image="https://www.rd.com/wp-content/uploads/2018/03/rdj.jpg"
            />
            </div>
            
        </div>
    )
}

export default Feed
