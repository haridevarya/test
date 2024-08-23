import React ,  {useCallback, useRef, useState } from 'react'
import Header from '../Header';
import Footer from '../Footer';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';
import Hatechry1 from './Hatchery1.jpeg'
import Hatechry2 from './Hatchery2.jpeg'
import Hatechry3 from './Hatchery3.jpeg'
import Hatechry4 from './Hatchery4.jpeg'
import Hatechry5 from './Hatchery5.jpeg'
import Hatechry6 from './Hatchery6.jpeg'
import Hatechry7 from './Hatchery7.jpeg'
import Hatechry8 from './Hatchery8.jpeg'
import Sust1 from './sust1.jpeg'
import Sust2 from './sust2.png'
import Sust3 from './sust3.png'
import Sust4 from './sust4.png'
import {Button, Card, Row, Col} from 'react-bootstrap';
import Director1 from './Director1.jpeg';
import Director2 from './Director2.jpeg';
import Director3 from './Director3.jpeg';
import Vision from './vision.png';
import Mission from './mission.png';
import Values from './values.png';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Link} from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';




export default function Homepage() {
  
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: 19.35746357821119,
    lng: 85.04338838168283
  };
    // const {isLoaded} = useLoadScript({
    //   googleMapsApiKey:"AIzaSyDd-dSQuFaTmynGSBz7okUh5x8w8vcYZPg"
    // })


    // if(!isLoaded){
    //   <div>Loading ...</div>
    // }
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselInner = useRef(null);
  
    const slideChanged = useCallback(() => {
      const activeItem = carouselInner.current.querySelector(".active");
      setCurrentSlide(
        Array.from(carouselInner.current.children).indexOf(activeItem)
      );
    }, []);

    const changeSlide = useCallback((position) => {
        Array.from(carouselInner.current.children).forEach((el, i) => {
          if (i !== position) {
            el.classList.remove("active");
          } else {
            el.classList.add("active");
            slideChanged();
          }
        });
      }, []);

  return (
    <div className="App">
        <Header/>
        
    <div className="container">
    <section id="carousal">
      
    <MDBCarousel showControls showIndicators interval={2500} showControls
        fade
        onSlide={slideChanged}>
      <MDBCarouselInner ref={carouselInner}>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={Hatechry1} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={Hatechry2} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={Hatechry3} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={Hatechry4} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={Hatechry5} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={Hatechry6} height="500px" alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
      <div className="carousel-indicators" style={{ marginBottom: "-20px" }}>
          <button
            className={`carousel-indicator ${currentSlide === 0 ? "active" : ""}`}
            onClick={() => changeSlide(0)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src={Hatechry1}
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 1 ? "active" : ""}`}
            onClick={() => changeSlide(1)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src={Hatechry2}
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => changeSlide(2)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src={Hatechry3}
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => changeSlide(2)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src={Hatechry4}
            />
          </button>
          <button
            className={`carousel-indicator ${currentSlide === 2 ? "active" : ""}`}
            onClick={() => changeSlide(2)}
            style={{ width: "100px" }}
          >
            <img
              className="d-block w-100 img-fluid"
              src={Hatechry5}
            />
          </button>
        </div>
    </MDBCarousel>
   
    </section>
     </div>
    
      {/* about us page   */}
      <div id="about">

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='main-heading centerAlign'>About Us</h3>
                            <div className='underline mx-auto'></div>
                            <p style={{textAlign: "justify !important"}}>Aquatic Farms Limited is registered under Companies Act 1956.
                                It is a Public Limited Company by share. It's Registration no. is
                                56-3(294)/2017.
                                Aquatic Farms Limited is actively involved in the developement of various
                                Sustainable Agriculture Technologies that are bio secure, eco-friendly,
                                tracable and with low Carbon outputs, for seed produnction and grow-out farming of
                                various aquatic species that have export potential in particular.
                                Aquatic farms limited is also preparing a state-of-the-art technology transfer
                                and training center for dissenimating the technologies developed at the various
                                projects established at various locations at the state of Orrisa.

                                Aquatic Farms Limited explores your Relations and share it nationwide
                                because we strongly believe that each human in this side of heaven is
                                gifted with huge hidden talent and it shoul be revealed across geographical
                                boundaries.




                            </p>
                            <div className='centerAlign'>
                            <Link to="/aboutUs" className='btn btn-warning shadow '>Read More</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Mission goals page */}
            <section className='section bg-c-light border-top' id="vmg">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Objective</h3>
                            <div className='underline mx-auto'></div>

                        </div>
                    </div>
                    <div className='row text-center'>

                        <div className='col-md-4'>
                            <Card style={{}}>
                                <img style={{ margin: "auto" }} variant="top" height="80px" width="80px" src={Mission} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text >
                                        <ReactReadMoreReadLess
                                            charLimit={350}
                                            readMoreText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                                            }
                                            readLessText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read Less</Link>}
                                        >
                                            Aquatic Farms Limited has set it's goal to become the largest
                                            shrimp producer in Odisha and aims to capture the national markets
                                            by exporting various parts of India and abroad.
                                            To develop and sustain the most advanced and eco-friendly
                                            and sustainable aqua culture system in Gujarat and many parts
                                            of India.
                                            We want to create more jobs and oppertunities for aqua farmers
                                            and rural population with state of the art technologies.
                                        </ReactReadMoreReadLess>


                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-md-4'>
                            <Card style={{}}>
                                <img style={{ margin: "auto" }} variant="top" height="80px" width="80px" src={Vision} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>

                                        <ReactReadMoreReadLess
                                            charLimit={360}
                                            readMoreText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                                            }
                                            readLessText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read Less</Link>}
                                        >
                                            Our mission is to create sustainable oppertunities in aqua culture industry
                                            with consistancy.Aqua culture is one of the best rural developement activities
                                            that makes a major contribution to the locals region and national economies.
                                            It provides huge business and employement oppertunities to people locally and
                                            nationally and creates excellent oppertunities to span in the domestic and
                                            international markets.
                                        </ReactReadMoreReadLess>




                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='col-md-4'>
                            <Card style={{}}>
                                <img style={{ margin: "auto" }} variant="top" height="80px" width="80px" src={Values} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        
                                        
                                        <ReactReadMoreReadLess
                                            charLimit={360}
                                            readMoreText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read More</Link>
                                            }
                                            readLessText={<Link to="/aboutUs" className='btn btn-warning shadow'>Read Less</Link>}
                                        >
                                            Our goal is to consistantly innovate and strengthen our
                                            leading position as pioneers of the aqua culture industry.
                                            We always endevour to surpass our own targets by adopting the
                                            best technologies and methods with full tracibility to increase
                                            production, productivity and maintaining the best quality year on
                                            year.
                                            
                                            Productivity and quality are the most important aspects of business
                                            and hence we continously strive to innovate and adopt latest technologies.
                                            However we are extremly concious of our responsibilities , careful to respect
                                            and protect our environment with our best business practices and thereby 
                                            simultanously ensuring no damage and or degradation of the environment.

                                        </ReactReadMoreReadLess>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            </section>
            <section className='section border-top' id="directors">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Inspiration</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                    </div>
                    <div>
                      <Row style={{border:"1px solid #6D6D6D", borderRadius:"20px", boxShadow:"20px"}}>
                        <Col md={4} style={{backgroundColor:""}}>
                        <img src={Director1} style={{height:"300px",width:"250px", marginTop:"100px",borderRadius:"20px"}}/>
                        </Col>
                        <Col md={8} style={{borderRadius:"20px" ,backgroundColor:"#F2F2F2",padding:"40px"}}>
                          <p>
                          Thank you all for browsing the broschure of Aquatic Farms 
                          Limited. This is a brochure which we intend to stay connected
                           and engaged to support the aqua culture sector of the state 
                           through various active nodal units and flagship projects 
                           operated by our Organization. Aquatic Farms Limited's mandate
                            focuses on applied research and dissemination of Aqua Culture
                             Technologies through its various projects being operated at 
                             various seed specificlocations of the country. Apart from 
                             the quality research the organization delivers seamless and 
                             continous services to the aqua culture in various forms like 
                             supplying quality seeds and brooders through its hatchery and 
                             brood stock fascilities and disease diagnosis services through 
                             its main Aqua culture Pathelogy Lab and Quarantine services 
                             through it's Aquatic Quarentine Unit. We provide a comprehensive overview of the various technology projects of the organization and its services to the aqua culture and its services to the aqua culture industries. Productivity and quality are the most important aspects of business and hence we continously strive to innovate and adopt latest technologies. However we are extremly concious of our responsibilities , careful to respect and protect our environment with our best business practices and thereby simultanously ensuring no damage and or degradation of the environment.
                          </p>
                        </Col>
                      </Row>
                    </div>
                    {/* <div className='row'>

                        <div className='col-md-2'>

                        </div>
                        <div className='col-md-3'>
                           
                            <img src={Director1} style={{height:"200px",width:"200px", border:"10px solid #FFC007",borderRadius:"50%"}}/>

                           
                        </div>
                        <div className='col-md-3'>
                            <img src={Director1} style={{height:"200px",width:"200px", border:"10px solid #FFC007",borderRadius:"50%"}}/>

                        </div>
                        <div className='col-md-3'>
                            <img src={Director1} style={{height:"200px",width:"200px", border:"10px solid #FFC007",borderRadius:"50%"}}/>

                        </div>
                        <div className='col-md-2'>

                        </div>
                    </div> */}

                    {/* <div className='row' style={{padding:"20px", backgroundColor:"#354F7D", marginTop:"40px", border:"5px solid #FEC008", borderRadius:"15%"}}>
                        <div className='col-md-12' >
                        <Card>
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        
                                        
                                       
                                            Thank you all for browsing the broschure of Aquatic Farms Limited.
                                            This is a brochure which we intend to stay connected and engaged to 
                                            support the aqua culture sector of the state through various active nodal units
                                            and flagship projects operated by our Organization. Aquatic Farms Limited's mandate
                                            focuses on applied research and dissemination of Aqua Culture Technologies through 
                                            its various projects being operated at various seed specificlocations of the 
                                            country. Apart from the quality research the organization delivers seamless and 
                                            continous services to the aqua culture in various forms like supplying quality 
                                            seeds and brooders through its hatchery and brood stock fascilities and disease
                                            diagnosis services through its main Aqua culture Pathelogy Lab and Quarantine services
                                            through it's Aquatic Quarentine Unit.

                                            We provide a comprehensive overview of the various technology projects of the 
                                            organization and its services to the aqua culture and its services to the aqua culture
                                            industries. 

                                            
                                            Productivity and quality are the most important aspects of business
                                            and hence we continously strive to innovate and adopt latest technologies.
                                            However we are extremly concious of our responsibilities , careful to respect
                                            and protect our environment with our best business practices and thereby 
                                            simultanously ensuring no damage and or degradation of the environment.

                                   
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                    </div> */}


                </div>
            </section>
            <section className='section bg-c-light border-top' id="cert">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Certifications</h3>
                            <div className='underline mx-auto'></div>

                        </div>
                    </div>
                    <div className='row text-center'>
                        <p>Aquatic Farms Limited is CAA approved and dealing with purely SPF Brooder</p>
                        
                        
                        
                        
                    </div>

                </div>
            </section>
          
        </div>       
        <Footer/>       
     </div>
  )
}
