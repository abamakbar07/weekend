import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Spinner } from 'react-bootstrap'
import "../styles/helptips.css"
import arrowButton from '../assets/oval-icon.svg'
import { API } from '../config/api'

const Helptips = () => {
  const [loading, setLoading] = useState(true)
  const [helptips, setHelptips] = useState()

  const getHelptips = async () => {
    try {
      const result = await API.get('/help-tips')
      setHelptips(result.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHelptips()
  }, [])

  return (
    <div className="Helptips text-center">
      <div className="Title">Help & Tips</div>
      <Container className="Container pt-4">
        {loading ? (
          <Col className="Loading">
            <Spinner animation="border" role="status" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        ) : (
          helptips.map((data) => (
            <Col>
              <Card className="bg-dark text-white">
                <Card.Img src={data.image} alt="Card image" />
                <Card.ImgOverlay>
                  <Container className="tittle">
                    <Card.Title>{data.title}</Card.Title>
                    <img className="ml-auto" src={arrowButton} />
                  </Container>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))
        )}
      </Container>
    </div>
  );
}

export default Helptips
