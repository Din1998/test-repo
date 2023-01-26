import '../StylesFile/industrySec.css'
import { Row,Col } from 'react-bootstrap'


import img from '../Assist/Rectangle 26.png'
import LeftTabs from './TabsComponent'

export default function IndustrysSection(){

  return(

    <div className='industry__section'>
       
      <div className='title__Box'>
        <h1>INDUSTRIES</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </div>
           
      {/* Add Tabs component */}
      <LeftTabs />
    </div>

  )
}