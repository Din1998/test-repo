import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '../StylesFile/slider.css'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
     
        <div className='slider__foHeroUI slider__bg1'>
          <div className='hero__content_wraper'>
            <div className='hero__text__box'>
              <h1>GROW YOUR BUSINESS WITH INNOVATION SOLUTION</h1>
              <p>AV experstise in providing IT Solutions for any business challanges</p>
            </div>
            <div className='play__btn'>
              <button className='circle_btn'><FontAwesomeIcon icon={faPlay} className="play__icon" /></button>
            </div>
          </div>
        </div>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='slider__foHeroUI slider__bg2'>
        <div className='hero__content_wraper'>
            <div className='hero__text__box'>
              <h1>GROW YOUR BUSINESS WITH INNOVATION SOLUTION</h1>
              <p>AV experstise in providing IT Solutions for any business challanges</p>
            </div>
            <div className='play__btn'>
              <button className='circle_btn'><FontAwesomeIcon icon={faPlay} className="play__icon" /></button>
            </div>
          </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className='slider__foHeroUI slider__bg3'>
        <div className='hero__content_wraper'>
            <div className='hero__text__box'>
              <h1>GROW YOUR BUSINESS WITH INNOVATION SOLUTION</h1>
              <p>AV experstise in providing IT Solutions for any business challanges</p>
            </div>
            <div className='play__btn'>
              <button className='circle_btn'><FontAwesomeIcon icon={faPlay} className="play__icon" /></button>
            </div>
          </div>
        </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;