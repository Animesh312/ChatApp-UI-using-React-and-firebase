import React from 'react'
import './Sidebar.css'
import man from './images/man.png';
import SidebarChat from './SidebarChat'

export default function Sidebar() {
  return (
    <div className='sidebar'>
     
      {/*-------------------Header------------------ */}
      <div className='sidebarHeader'>
        <div><img src={man} alt="" /></div>
     
      <div className='sidebarHeaderRight'>
        <button style=
          {{ border: "none" }}>
          <span className='material-symbols-outlined'>
            arrow_drop_down_circle
          </span>


        </button>
        <button style=
          {{ border: "none" }}>
          <span className='material-symbols-outlined'>
            more_vert
          </span>


        </button>
        <button style=
          {{ border: "none" }}>
          <span className='material-symbols-outlined'>
            chat
          </span>



        </button>
      </div>
      </div>
      {/*----------sidebar search---------- */}
        <div className='sidebarSearch'>
          <div className='sidebarSearchContainer'>
          <span className='material-symbols-outlined'>
search
</span>
<input type ="text" placeholder="Search contact"/>
          </div>
        </div>
      {/*---------sidebar chats------------*/}
      <div className='sidebarChats'>
       <SidebarChat addNewChat/>
       <SidebarChat/>
       <SidebarChat/>
       <SidebarChat/>
      </div>
      </div>
    
  )
}
