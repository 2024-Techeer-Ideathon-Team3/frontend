import Topic from '../components/Topic'
import topic from '../assets/topic.png'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom'

function SelectTopic() {

  const {state :{temp}} = useLocation()
  return (
    <div>
      <NavBar />
      <div className="fixed">
        <div className="absolute inset-0 flex items-center justify-center mt-[10rem]">

          {temp.map((test, index) => (
            <Topic key={index} test={test}/>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="border-dashed border-b border-gray-400 w-[20vw] h-[33.3vh]"></div>
          <div className=" flex items-center justify-center border-dashed border-b border-l border-r border-gray-400 w-[60vw] h-[33.3vh]">
            <img src={topic} alt="topic" className="w-[680px]" />
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
    </div>
  )
}

export default SelectTopic
