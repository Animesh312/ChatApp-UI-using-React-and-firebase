import React from 'react'
import './Chat.css'

export default function Chat() {
  return (
    <div className='chat'>
      {/*---------------chat header------------- */}
    <div className='chatHeader'>
    <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt=" "/>
    <div className='chatHeaderInfo'>
      <h3>Room name</h3>
      <p>Last seen....</p>
    </div>
    <div className='chatHeaderRight'>
      <button style={{border:'none'}}>
      <span class="material-symbols-outlined">
search
</span>
      </button>
      <button style={{border: "none"}}>
      <span class="material-symbols-outlined">
attach_file
</span>
      </button>
      <button style=
          {{ border: "none" }}>
          <span className='material-symbols-outlined'>
            more_vert
          </span>


        </button>
      </div>
    </div>
    {/*----------chat body---------- */}
    <div className='chatBody'>
      <p></p>
    </div>
    </div>
  )
}
