import '../StylesFile/navBar.css'
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger,faClose} from '@fortawesome/free-solid-svg-icons'
import logo from'../Assist/AVLogo1.jpg'

export default function NavBar () {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  return(
    <header>
      <div className='logo'>
        <img alt='logo' src={logo} />
      </div>
      <nav ref={navRef}>
        <a href='#'>HOME</a>
        <a href='#'>ABOUT US</a>
        <a href='#'>SOLUTION</a>
        <a href='#'>SERVICE</a>
        <a href='#'>CARRER</a>
        <a href='#'>CONTACT US</a>
        <button 
          className="nav-btn nav-close-btn"
					onClick={showNavbar}
        >
        <FontAwesomeIcon icon={faClose} className="feture__icon" />
        </button>
      </nav>
      <button
        className="nav-btn" onClick={showNavbar}
      >
      <FontAwesomeIcon icon={faHamburger} className="feture__icon" />
      </button>
    </header>
  )
}

