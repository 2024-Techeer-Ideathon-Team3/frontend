// import React from 'react'
// import { useState } from 'react'
import apiV1Instance from '../api/api-instance'
import { useNavigate } from 'react-router-dom'

function Topic({ data }) {
  const [color, setColor] = useState('')
  const handleColorChange = (event) => {
    setColor(event.target.value)
  }
  const navigate = useNavigate()
  const data2 = {
    explanation: string,
    elements: [],
    colorCode: string,
  }
  console.log(data)
  const handleClick = async () => {
    try {
      console.log(data2)
      const response = await apiV1Instance.post('/generate_logos', data2)
      console.log(response.data2)
      navigate('/final')
    } catch (error) {
      // 에러 뜰 때
      alert(error) // 경고창
    }
  }
  return (
    <div
      onClick={handleClick}
      className="border-dashed border border-gray-400 w-[20vw] h-[30vh] mx-[2rem] bg-white"
    >
      주제 : {data}
      <input
        type="text"
        className="w-32 h-10 border border-black"
        placeholder="  ex)노란색"
        onChange={handleColorChange}
      ></input>
    </div>
  )
}

export default Topic
