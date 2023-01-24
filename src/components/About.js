import '../StylesFile/about.css';
import { Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return(
    <div className='about__section'>
      <div className='wraper'>
        <Row>
            <Col md={3}><div className='box box-a'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />AWS</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-b'>
                <div className='box__text'>
                <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Advanced Analytics</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-c'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Basic Analytics</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-d'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Consulting</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
        </Row>
        <Row>
            <Col md={3}><div className='box box-b'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Data Science</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-a'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />loT/Robotics</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-d'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Mobile Application</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
            <Col md={3}><div className='box box-c'>
                <div className='box__text'>
                  <li><FontAwesomeIcon icon={faPlay} className="title__icon" />Web Application</li>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget cum sit commodo facilisis ac pellentesque morbi justo.</p>
                </div>
              </div></Col>
        </Row>
      </div>
    </div>
  )
}