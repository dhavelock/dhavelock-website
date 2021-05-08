import Title from './Title'
import ProfilePic from './ProfilePic'
import Option from './Option'
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar" >
        <ProfilePic />
        <Title />
        <div className="options">
          <Option name="Blog" />
          <Option name="About" />
        </div>
      </div>
    </div>
  )
}