import React from 'react'
import "./SidebarChat.css"
export default function SidebarChat({addNewChat}) {
  return (
    !addNewChat?( <div className='sidebarChat'>
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt='' />
    
    <div className="sidebarChatInfo">
        <h2> coderoom</h2>
        <p>This is message</p>
        
      </div>
      </div> ):(
        <div className='sidebarChat'>
          <h3>Add New Chat</h3>
        </div>
      )
     
      );
  
}
