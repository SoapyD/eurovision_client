import { useEffect, useState, useContext } from "react";
import {SocketContext} from '../../context/Socket';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Item__GroupScores = (props) => {

    const socket = useContext(SocketContext);  
    const [data, setData] = useState("");
    

    useEffect(() => {
      socket.on("receive_groupScore", (data) => {
        if(props.country == data.country){
          setData(data);
        }
      });
  }, [socket], props);

    return(
        <div className="Item__GroupScores">
            <h2>Group Scores</h2>

            <Container className='score__container'>
                <Row className='score__row'>
                    <Col xs={4}>
                        <h3>Song</h3>
                        <div className='score'>{data.song}</div>
                    </Col>
                    <Col xs={4}>
                        <h3>Staging</h3>
                        <div className='score'>{data.staging}</div>
                    </Col>
                    <Col xs={4}>
                        <h3>Total</h3>
                        <div className='score'>{data.total}</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item__GroupScores