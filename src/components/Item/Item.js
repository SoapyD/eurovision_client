
import Item__Header from "./Item__Header";
import Item__Slider from "./Item__Slider";
import Item__Carousel from "./Item__Carousel";
import Item__GroupScores from "./Item__GroupScores";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item = (props) => {
    return(
        <Container>
            <Item__Header/>
            <Item__Carousel/>
            <Container>
                <Row className='score__row'>
                    <Col xs={8}>
                        <Item__Slider colour='119,221,119' type='song' country='england'/>
                    </Col>
                    <Col xs={4}>
                        <div className='score'></div>
                    </Col>
                </Row>    
                <Row className='score__row'>
                    <Col xs={8}>
                        <Item__Slider colour='255,105,97' type='staging' country='england'/>
                    </Col>
                    <Col xs={4}>
                        <div className='score'></div>
                    </Col>
                </Row>                      
            </Container>

            <Item__GroupScores/>

        </Container>
    )
}

export default Item