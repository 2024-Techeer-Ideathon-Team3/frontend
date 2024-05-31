// import React from 'react'
import NavBar from '../components/NavBar'
import image from '../assets/logo.png'
import own from '../assets/own.png'
import cy from '../assets/cy.png'

function FinalSelectPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="fixed">
        <div className="absolute inset-0 flex items-center justify-center mb-[17vh]">
          <div>
            <img src={own} className="w-[30vw]"></img>
            <img src={cy} className="w-[50vw]"></img>
          </div>
          <div className="w-[30rem] items-center justify-center ">
            <img src={image} className="w-[100rem]"></img>
            {/* 이미지 추가 */}
            <div className="flex items-center justify-center ">
              <button className="bg-black text-white px-3 py-2 m-4 rounded-lg text-2xl">
                download
              </button>
              <button className="bg-black text-white px-3 py-2 m-4 rounded-lg text-2xl">
                retry
              </button>
            </div>
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
