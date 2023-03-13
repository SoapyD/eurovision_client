import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "./Item/Item";

const entries = [
  {country: 'United Kingdom', artist: 'Test', song: 'we are the winners'},
  {country: 'Germany', artist: 'Test2', song: 'we gonna party'},  
]
let item_list = []
entries.forEach((entry, index) => {
  var id = ("0" + (index + 1).toString()).slice(-2);
  item_list.push(
  <Col md={6} lg={4} key={index}>
    <Item id={id} country={entry.country} artist={entry.artist} song={entry.song}/>
  </Col>
  )
})

const Grid = () => {
    return (
        <Container>
          <Row>
            {item_list}                   
          </Row>
        </Container>
      );    
}

export default Grid