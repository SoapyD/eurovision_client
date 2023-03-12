
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState, useContext } from "react";
import {SocketContext} from '../../context/Socket';
import { UserContext } from "../../context/UserContext"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function valuetext(value) {
    return `${value}°C`;
}

const Item__Slider = (props) => {

    let default_score = 5;
    const socket = useContext(SocketContext);
    const [userContext] = useContext(UserContext)
    // console.log(props) 
    const [sliderType, setsliderType] = useState(props.type)
    const [country, setcountry] = useState(props.country)
    const [score, setScore] = useState()

    // if(score){
    //     default_score = score
    //     console.log("score",score)
    // }

    const sendScore = (e, v) => {
        // console.log("TEST", v)
        if(userContext.details){
            console.log({
                room: userContext.details.room,
                country: country,
                sliderType: sliderType,
                value: v
            })
            setScore(v)
            // let message = '{v}'
            // socket.emit("send_message", { message, userContext.details.room });
        }
    }


    return (
        <Row className='score__row'>        
            <Col xs={8}>
                <Box sx={{ width: '100%', padding: '15px 0 0 0' }}>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={default_score}
                        getAriaValueText={valuetext}
                        // disabled={true}
                        step={1}
                        marks
                        min={1}
                        max={10}
                        valueLabelDisplay="auto"
                        sx={{
                            height: 20,
                            color: props.colour,
                            '& .MuiSlider-thumb': {
                                height: '40px',
                                width: '40px',
                                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                                    boxShadow: "0px 0px 0px 8px rgba("+props.colour+", 0.16)"
                                },                        
                            },
                        }}    
                        onChange={sendScore}            
                    />     
                </Box>
            </Col>
            <Col xs={4}>
                <div className='score'>
                    <p>{score}</p>
                </div>
            </Col>            
        </Row>
    )

}

export default Item__Slider