import NavBar from '../components/NavBar'
import intro1 from '../assets/intro1.png'
import intro2 from '../assets/intro2.png'
import intro3 from '../assets/intro3.png'
import intro4 from '../assets/intro4.png'
import { useState } from 'react'

import apiV1Instance from '../api/api-instance'
import { useNavigate } from 'react-router-dom'

export default function Page() {
  const [concept, setConcept] = useState('')
  const navigate = useNavigate()
  const data = {
    topic: concept,
  }
  const handleConceptChange = (event) => {
    setConcept(event.target.value)
  }
  const handleSubmit = async () => {
    try {
      console.log(data)
      const response = await apiV1Instance.post(
        `/generate_concepts?topic=${data.topic}`
      )
      console.log(response.data)
      navigate('/topic', { state: { conceptData: response.data } })
    } catch (error) {
      // 에러 뜰 때
      alert(error) // 경고창
    }
  }
  return (
    <div>
      <NavBar />
      <div className="absolute top-16 right-[21rem] flex items-center justify-center w-[600px] h-full border-x text-center border-gray-400 border-dashed">
        {' '}
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-8 ">
        <img src={intro1} alt="intro1" className="w-[300px]" />
        <img src={intro2} alt="intro2" className="w-[500px]" />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full p-10 border-gray-400 border-dashed border-y">
        <img src={intro3} alt="intro3" className="w-[550px]" />
        <img src={intro4} alt="intro4" className="w-[300px]" />
      </div>
      <div className="absolute flex left-[20.5rem]  items-center justify-center gap-10 p-20 border-b border-gray-400 border-dashed z-100">
        <input
          type="text"
          className="h-12 border border-black w-80"
          placeholder="  concept"
          onChange={handleConceptChange}
        ></input>
        <button
          onClick={handleSubmit}
          className="w-20 h-12 text-white bg-gray-700 rounded-md hover:bg-black"
        >
          START
        </button>
      </div>
    </div>
  )
}
