import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import '../StylesFile/tabsComponent.css'
import img from '../Assist/Rectangle 26.png'


function LeftTabs() {
  return (
    <div className='left__tab_comp'>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row className='bg-white'>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column xyz__leftTabNav_comp">
            <Nav.Item>
              <Nav.Link eventKey="Automotive">Automotive</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Diagonistic">Diagonistic</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="E-Learning">E - Learning</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Entertainment">Entertainment</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Education">Education</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Fashion & Lifestyle">Fashion & Lifestyle</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Healthcare">Healthcare</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Retail">Retail</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Tourism">Tourism</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9} className='xyz__right_tableText'>
          <Tab.Content >
            <Tab.Pane eventKey="Automotive" >
              <Row>
                <Col>
                  <h1 className="xyz_tab__title">Automobile</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                      <h2>Automobile</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                    <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                    
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
              
            </Tab.Pane>
            <Tab.Pane eventKey="Diagonistic">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Diagonistic</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                      <h2>Diagonistic</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="E-Learning">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">E-Learning</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>E-Learning</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Entertainment">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Entertainment</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Entertainment</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Education">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Education</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Education</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Fashion & Lifestyle">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Fashion & Lifestyle</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Fashion & Lifestyle</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Healthcare">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Healthcare</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Healthcare</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Retail">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Retail</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Retail</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                  <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="Tourism">
            <Row>
                <Col >
                  <h1 className="xyz_tab__title">Tourism</h1>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                </Col>
                <Row>
                  <Col md={6}>
                    <h2>Tourism</h2>
                      <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                  <Col md={6}>
                    <div className='tab__img_box'>
                      <img className='tabs__img' src={img}/>
                    </div>
                  </Col>
                  <Col>
                  <p>Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed. Lorem ipsum dolor sit amet consectetur. Nulla pellentesque venenatis amet interdum pulvinar non. Viverra risus aliquet sollicitudin nibh aliquam augue. Felis odio in pharetra quis ultricies sed.</p>
                  </Col>
                </Row>
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

export default LeftTabs;