import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from "./Item/Item";

const entries = [
  {country: 'england', act: 'we are the winners'},
  {country: 'germany', act: 'we gonna party'},  
]
let item_list = []
entries.forEach((entry, index) => {
  var id = ("0" + (index + 1).toString()).slice(-2);
  item_list.push(<Item id={id} country={entry.country} act={entry.act}/>)
})

const Grid = () => {
    return (
        <Container>
          <Row>
            <Col md={6} lg={4}>
                {item_list}
            </Col>                      
          </Row>
        </Container>
      );    
}

export default Grid