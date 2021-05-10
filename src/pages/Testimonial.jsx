import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Spinner } from 'react-bootstrap';
import "../styles/testimonial.css"
import arrowButton from '../assets/oval-icon.svg'
import { API } from '../config/api';

const Testimonial = () => {
  const [loading, setLoading] = useState(true)
  const [testimonial, setTestimonial] = useState();

  const getTestimonial = async () => {
    try {
      setLoading(true)
      const result = await API.get("/testimonial");
      setTestimonial(result.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const [scroll, setScroll] = useState({
    left: "Active",
    right: "Active",
  })

  const scrollEvent = (e) => {
    if (e.target.scrollLeft == 0) {
        setScroll({
          left: "Deactive",
          right: "Active",
        });
    } else if (e.target.scrollLeft >= 650 ) {
        setScroll({
          left: "Active",
          right: "Deactive",
        });
    } else {
        setScroll({
          left: "Active",
          right: "Active",
        });
    }
  }

  const scrollLeft = () => {
    document.getElementById("Container").scrollLeft -= 125;
  }

  const scrollRight = () => {
    document.getElementById("Container").scrollLeft += 125;
  }

  useEffect(() => {
    getTestimonial();
  }, [])
  
  return (
    <div className="Testimonial text-center">
      {/* <img className="Oval" src={oval} /> */}
      <div className="Title">
        <div className="text" onClick={() => console.log(setLoading(false))}>
          Testimonial
        </div>
      </div>
      <div className="Content text-white">
        <Container fluid className="d-flex p-0">
          <Col className="Button ButtonLeft">
            <img
              className={scroll.left}
              src={arrowButton}
              onClick={scrollLeft}
            />
          </Col>
          <Col
            md={6}
            id="Container"
            onScroll={scrollEvent}
            className="d-flex Container"
          >
            {loading ? (
              <Card className="bg-white border-0 pb-5">
                <div className="Loading">
                  <Spinner
                    animation="border"
                    role="status"
                    variant="dark"
                  >
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              </Card>
            ) : (
              testimonial.map((listTestimonial) => (
                <Card className="bg-white border-0 pb-5">
                  <Card.Body className="text-left pt-2">
                    <Card.Title className="ContentTitle">
                      {listTestimonial.by}
                    </Card.Title>
                    <Card.Text className="ContentContent">
                      {listTestimonial.testimony}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
          <Col className="Button ButtonRight">
            <img
              className={scroll.right}
              src={arrowButton}
              onClick={scrollRight}
            />
          </Col>
        </Container>
      </div>
    </div>
  );
}

export default Testimonial
