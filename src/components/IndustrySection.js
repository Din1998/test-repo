import '../StylesFile/industrySec.css'
import { Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAutomobile,faUser,faBook,faMicrophoneAlt,faUniversity,faGifts,faHeart,faTasks,faSpaceShuttle } from '@fortawesome/free-solid-svg-icons'

import img from '../Assist/Rectangle 26.png'

export default function IndustrysSection(){

  return(

    <div className='industry__section'>
       
      <div className='title__Box'>
        <h1>INDUSTRIES</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
           
      <div className='section__wraper'>


        <div className='nav'>
          <ul>
            <li><FontAwesomeIcon icon={faAutomobile} className="nav__icon" />Automotive</li>
            <li><FontAwesomeIcon icon={faUser} className="nav__icon" />Diagonistic</li>
            <li><FontAwesomeIcon icon={faBook} className="nav__icon" />E - Learning</li>
            <li><FontAwesomeIcon icon={faMicrophoneAlt} className="nav__icon" />Entertainment</li>
            <li><FontAwesomeIcon icon={faUniversity} className="nav__icon" />Education</li>
            <li><FontAwesomeIcon icon={faGifts} className="nav__icon" />Fashion & Lifestyle</li>
            <li><FontAwesomeIcon icon={faHeart} className="nav__icon" />Healthcare</li>
            <li><FontAwesomeIcon icon={faTasks} className="nav__icon" />Retail</li>
            <li><FontAwesomeIcon icon={faSpaceShuttle} className="nav__icon" />Tourism</li>
          </ul>
        </div>


      <div className='text__frame'>
         
            <Row>
              <Col md={12}>
                <div className='title__text sub_text'>
                <h1>E-Lerning</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className='title__text'>
                <h1>Online</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. </p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <img alt='img' src={img} className='img'/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='title__text'>

                <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. </p>
                </div>
              </Col>
            </Row>
         
      </div>

    </div>   
    </div>

  )
}