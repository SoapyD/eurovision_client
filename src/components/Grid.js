import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "./Item/Item";

import { useContext } from "react";
import { UserContext } from "../context/UserContext"

const Grid = () => {

  const [userContext] = useContext(UserContext)
  // console.log("TEST")
  // console.log(userContext)

  let event = userContext.details.events[userContext.details.event_id]

  let item_list = []
  event.acts.forEach((entry, index) => {
    var id = ("0" + (index + 1).toString()).slice(-2);
    item_list.push(
    <Col md={6} lg={4} key={index}>
      <Item id={id} country={entry.act.country.name} artist={entry.act.artist} song={entry.act.song}/>
    </Col>
    )
  })


    return (
        <Container>
          <Row>
            {item_list}                   
          </Row>
        </Container>
      );    
}

export default Grid