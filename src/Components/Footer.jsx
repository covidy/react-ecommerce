import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>copyright &copy; Techinfo YT</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer