import React from 'react'
import Topic from '../components/Topic'

function SelectTopic() {
  return (
    <>
      <div className="fixed">
        <div className="absolute inset-0 flex items-center justify-center mt-[10rem]">
          <Topic></Topic>
          <Topic></Topic>
          <Topic></Topic>
          <Topic></Topic>
        </div>

        <div className="flex items-center justify-center">
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className=" flex items-center justify-center border-dashed border-b border-l border-r border-gray-400 w-[60vw] h-[33.3vh]">
            <div className="text-[5em] pb-[1rem]">please select your topic</div>
          </div>
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

export default SelectTopic

// border-gray-400
{
  /* <div className="flex items-center">
<div className="border-dashed border-b border-gray-400 w-[20%] h-[33.3vh]"></div>
<div className="border-dashed border-b border-l border-r border-gray-400 w-[20%] h-[33.3vh]"></div>
<div className="border-dashed border-b border-gray-400 w-[20%] h-[33.3vh]"></div>
<div className="border-dashed border-b border-l border-r border-gray-400 w-[20%] h-[33.3vh]"></div>
<div className="border-dashed border-b border-gray-400 w-[20%] h-[33.3vh]"></div>
</div> */
}
