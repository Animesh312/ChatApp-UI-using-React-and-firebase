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
      <span className="material-symbols-outlined">
search
</span>
      </button>
      <button style={{border: "none"}}>
      <span className="material-symbols-outlined">
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
      <p className='chatMessage'>
        <span className='chatName'>Rahul</span>
        Hello guys
        <span className='timestamp'>11:11</span>
      </p>
      <p className='chatMessage'>
        <span className='chatName'>Rahul</span>
        Hello guys
        <span className='timestamp'>11:11</span>
      </p>
      <p className='chatMessage chatReceiver'>
        <span className='chatName'>Rakesh</span>
        Hello Guys
        <span className='timestamp'>12:01</span>
      </p>
      
    </div>
    {/* ------------chat footer------------- */}
    <div className='chatFooter'>
    <span className="material-symbols-outlined">
mood
</span>
      <form>
        <input type="text" placeholder="Type a message"/>
        <button type="submit" style={{border:'none'}} ><span className="material-symbols-outlined">
send
</span> </button>
      <button style={{border:'none'}}><span className="material-symbols-outlined">
mic
</span></button>

      </form>
    </div>

    </div>
  )
}
