import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';

const Banner = () => {
    return(
        <Container>
        <Image className="Banner"
            src="./img/banner.png"
            rounded
        />
        </Container>
    )
}

export default Banner