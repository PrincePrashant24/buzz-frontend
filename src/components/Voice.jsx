import React, { useEffect } from 'react'

export default function Voice({listenHandle}) {
    // useEffect(()=>{
    //     console.log(listenHandle);
    // },[])

    const switchListen =()=>{
        console.log("hii");
    }
  return (
    <div className=''>
         
        <div style={{
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        height: '55vh',
        width: '85vh',
        position: 'fixed',
        top: "20%",
        left: "25%",
        right: 0,
        backgroundColor:'white',
        justifyContent:"center"
      }}
      className="shadow-lg p-3 mb-5 bg-body rounded"
      >
          <div>
           <img src='https://cdn.dribbble.com/users/2790075/screenshots/5571604/microphone_ui_animation.gif' className='voice-assistant' />
          </div>
     
      <div className='color-overlay d-flex align-items-end justify-content-center'>
      <i className="fa-solid fa-3x fa-power-off mb-3 text-dark" onClick={listenHandle}style={{zIndex:1001,cursor: "pointer" }}></i>
      </div>
        </div>
        
        
    </div>
  )
}
