import React from 'react';
import './post.css';
import Avatar from "@material-ui/core/Avatar";

function post({username , caption, imageUrl}) {
    return (
        <div className="post">
            
          <div className="post__header">
           <Avatar
               className="post__avatar"
               alt='abhi'
               src='/static/images/avatar/1.jpg'
        
           />
           <h2>{username}</h2>             
        </div>
        
            
        <img
         className="post__image" 
         src={imageUrl}
         alt=""
        />
        
        <h4 className="post__text"><strong>{username}</strong> { caption}</h4>
        {/* username + caption */ }
        </div>
    )
}

export default post

