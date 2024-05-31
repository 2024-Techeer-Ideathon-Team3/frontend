import React from 'react'
import NavBar from '../components/NavBar'
import ps from '../assets/ps.png'

function SelectColorPage() {
  return (
    <>
      <NavBar></NavBar>
      <div className="fixed">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div>
            <img src={ps} className="w-[70vw] my-[5rem]" />
          </div>
          <form action="">
            <input
              type="text"
              className="block bg-gray-100 w-[25vw] text-4xl px-3 py-2 my-[5rem] rounded-lg"
              placeholder="ex) 빨간색"
            />
            <button
              type="submit"
              className="block bg-gray-100 text-3xl py-2 w-[25vw] rounded-lg"
            >
              선택
            </button>
          </form>
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

export default SelectColorPage
