
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState, useContext } from "react";
import {SocketContext} from '../../context/Socket';
import { UserContext } from "../../context/UserContext"

function valuetext(value) {
    return `${value}°C`;
}

const Item__Slider = (props) => {
    const socket = useContext(SocketContext);
    // console.log(props) 
    const [sliderType, setsliderType] = useState(props.type)
    const [country, setcountry] = useState(props.country)
    // console.log(sliderType)
    // console.log(country)

    const sendScore = (e, v) => {
        console.log("TEST", v)
        // let message = '{v}'
        // socket.emit("send_message", { message, room });
    }


    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                aria-label="Small steps"
                defaultValue={5}
                getAriaValueText={valuetext}
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
                sx={{
                    height: 20,                 
                    // width: 'Inherit',
                    color: 'rgb('+props.colour+')',
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
    )

}

export default Item__Slider