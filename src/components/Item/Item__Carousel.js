import {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { run as runHolder } from 'holderjs/holder';


const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function Item__Carousel(props) {
  // 1133x656
  useEffect(() => {
    runHolder('image-class-name')
  })
  let country_image = "img/flags/"+capitalize(props.country)+".svg"
  let artist_image = "img/artists/"+capitalize(props.country)+".png"   

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          // src="holder.js/345x200?text=Country&bg=373940"
          src={country_image}         
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          // src="holder.js/345x200?text=Act&bg=282c34"
          src={artist_image} 
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          className="d-block w-100"
          src="holder.js/345x200?text=Sweepstaker&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Item__Carousel;