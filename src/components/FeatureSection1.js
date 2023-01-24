import '../StylesFile/feature1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup,faGears,faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';

export default function FeatuteSection(){
  return(
    <Container>
      <div className="feature__section1">
        <div className="feature__sec_wraper">
          <div className="feature__text">
            <h1>WHAT WE OFFER</h1>
            <p>From Consulting and Solutioning to Implementation and Support Services, we provide services for the whole project lifecycle, assisting you in maximizing your technology investment and unlocking the strategic potential of Big Data. We work with our clients to identify and create sustainable growth strategies through their big data.</p>
          </div>
          <div className="feature__item">
            <ul>
              <li><FontAwesomeIcon icon={faUserGroup} className="feture__icon" />Consulting</li>
              <li><FontAwesomeIcon icon={faGears} className="feture__icon" />Services</li>
              <li><FontAwesomeIcon icon={faLightbulb} className="feture__icon" />Pre - Build Solution /  Product.</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}