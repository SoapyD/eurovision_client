import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item__GroupScores = () => {
    return(
        <div className="Item__GroupScores">
            <h2>Group Scores</h2>

            <Container className='score__container'>
                <Row className='score__row'>
                    <Col xs={4}>
                        <h3>Song</h3>
                        <div className='score'></div>
                    </Col>
                    <Col xs={4}>
                        <h3>Staging</h3>
                        <div className='score'></div>
                    </Col>
                    <Col xs={4}>
                        <h3>Total</h3>
                        <div className='score'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item__GroupScores