// import React from 'react'
// import { useState } from 'react'
import apiV1Instance from '../api/api-instance'
import { useNavigate } from 'react-router-dom'



function Topic({test}) {
  const navigate = useNavigate()

  const handleLogo = async (test) => {
  
    const sendData = {
      elements : test.elements,
      explanation : test.explanation,
      colorCode : '파랑색'
    }
    console.log('click')
    try {
      const response = await apiV1Instance.post('/generate_logos',
        sendData
      )
      
      const url = response.data
      console.log('Topic Success Url: ',url);
      navigate('/final',{ state : {url}})
    }
    catch (e){
      console.error(e)
    }
  }

  return (
    <div className="border-dashed flex flex-col items-center gap-4 justify-center border cursor-pointer border-gray-400 w-[20vw] h-[30vh] mx-[2rem] bg-white"
    onClick={() => handleLogo(test)}
    >
      {test.elements.map((element, index) => (
        <div key={index}
        className='flex flex-col items-center justify-center font-bold'>{element}</div>
      ))}
      
    </div>
  )
}

export default Topic
