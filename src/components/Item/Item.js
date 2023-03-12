
import Item__Header from "./Item__Header";
import Item__Carousel from "./Item__Carousel";
import Item__Slider from "./Item__Slider";
import Item__Chart from "./Item__Chart";
import Item__GroupScores from "./Item__GroupScores";

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Item = (props) => {

    // let song_colour = '119,221,119';
    let song_colour = "#77DD77";
    // let staging_colour = '255,105,97'; 
    let staging_colour = "#FF6961";    

    return(
        <Container>
            <Item__Header {...props}/>
            <Container>
                <Item__Carousel/>
                <Item__Slider colour={song_colour} type='song' country={props.country}/>
                <Item__Slider colour={staging_colour} type='staging' country={props.country}/>
                <Item__Chart song_colour={song_colour} staging_colour={staging_colour} />
            </Container>

            <Item__GroupScores/>

        </Container>
    )
}

export default Item