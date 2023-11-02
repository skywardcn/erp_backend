import React from "react";
import { Col, Container, Row } from "react-bootstrap";




const getSize = () => {
  return window.innerWidth < 1000 ? "small" : "large"
}

const useWindowSize = () => {
  const [size, setSize] = React.useState(getSize())
  React.useEffect(() => {
    const handler = () => {
      setSize(getSize())
    }
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])
  return size
}


const HomeView = () => {
  const size = useWindowSize()

  if (size == "small") console.log("small"); else console.log("large");

  return (
    <Container>
      <Row>
        <Col lg>111111</Col>
      </Row>
    </Container>
  )


}

export default HomeView