
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { useEffect, useState, useContext } from "react";
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
    const [value, setValue] = useState(5)    

    // if(score){
    //     default_score = score
    //     console.log("score",score)
    // }

    const sendScore = (e, v) => {
        if(userContext.details){

            // setScore(v)

            socket.emit("send_score", 
            { 
                room_name: userContext.details.room_name
                ,message: {
                    username: userContext.details.user.username,
                    country: country,
                    sliderType: sliderType,
                    value: v
                } 
            });
        }
    }

    useEffect(() => {
        socket.on("receive_score", (data) => {
          if(props.country === data.country
            && props.type === data.sliderType){
            setScore(data.score);
            setValue(data.score);
            // console.log(data)
          }
        });
    }, [socket], props);


    return (
        <Row className='score__row'>      
            <Col xs={8}>
                <Box sx={{ width: '100%', padding: '15px 0 0 0' }}>
                <Typography id="non-linear-slider" gutterBottom>
                    {sliderType}
                </Typography>
                    <Slider
                        aria-label="non-linear-slider"
                        defaultValue={default_score}
                        getAriaValueText={valuetext}
                        // disabled={true}
                        value={value}
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