// import React from 'react'
import NavBar from '../components/NavBar'
import image from '../assets/logo.png'
function FinalSelectPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="fixed">
        {/* 토픽 로직 추가 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div>own Create Your Logo is</div>
          <div>
            <img src={image}></img>
            <button className="color-black">download</button>
            <button>retry</button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
        </div>
        <div className="flex items-center ">
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
        </div>
        <div className="flex items-center ">
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-l border-r border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
        </div>
      </div>
    </>
  )
}
export default FinalSelectPage
