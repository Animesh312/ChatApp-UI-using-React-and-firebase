import React from 'react'
import "./SidebarChat.css"
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "./firebase"
export default function SidebarChat({addNewChat}) {
  const createChat= async()=>{
    const group=prompt("Please enter your groupname")
    if(group){

try {
  const docRef = await addDoc(collection(db, "groups"), {
    name: group,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }
  }
  return (
    !addNewChat?( <div className='sidebarChat'>
      <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt='' />
    
    <div className="sidebarChatInfo">
        <h2> coderoom</h2>
        <p>This is message</p>
        
      </div>
      </div> ):(
        <div onClick={createChat} className='sidebarChat'>
          <h3>Add New Chat</h3>
        </div>
      )
     
      );
  
}
