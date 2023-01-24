import '../App.css'
import logo from'../Assist/AVLogo1.jpg'

export default function NavBar () {
  return(
    <div className="navSection">
      <div className="navbar__wraper">
        <div className="logo">
          <img alt='logo' src={logo} />
        </div>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT US</a></li>
          <li><a href='#'>SOLUTION</a></li>
          <li><a href='#'>SERVICE</a></li>
          <li><a href='#'>CAREER</a></li>
        </ul>
      </div>
    </div>
  )
}