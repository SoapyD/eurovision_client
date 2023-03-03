import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';

const Banner = () => {
    return(
        <Container>
        <Image className="Banner"
            src="./img/ESC2023_Ukraine_LIVERPOOL_RGB_White_600px.png"
            rounded
        />
        </Container>
    )
}

export default Banner