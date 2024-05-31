import logoname from '../assets/logoname.png'
import logo from '../assets/logo.png'
import github from '../assets/github.png'

export default function page() {
  return (
    <div className="z-10 h-16 border-b border-gray-400 border-dashed">
      <div className="flex items-center justify-between">
        <div className="flex m-4 ml-10">
          <img src={logo} alt="logo" className="w-8 mr-8" />
          <img src={logoname} alt="logoname" className="w-32 h-8 " />
        </div>
        <img src={github} alt="github" className="w-10 pb-1 mr-8" />
      </div>
    </div>
  )
}
