import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "./Item/Item";

const Grid = () => {
    return (
        <Container>
          <Row>
            <Col md={6} lg={4}>
                <Item />
            </Col>
            <Col md={6} lg={4}>
                <Item />
            </Col>
            <Col md={6} lg={4}>
                <Item />
            </Col>
            <Col md={6} lg={4}>
                <Item />
            </Col>                        
          </Row>
        </Container>
      );    
}

export default Grid