
import { useContext } from "react";
import {SocketContext} from '../context/Socket';
import { UserContext } from "../context/UserContext"

import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Room = () => {

    const socket = useContext(SocketContext);
    const [userContext, setUserContext] = useContext(UserContext)
    // setUserContext(oldValues => {
    //   return { ...oldValues, room: 'test room' }
    // })  
    // console.log(userContext)
    //JOIN ROOM
    // socket.emit("join_room", userContext.room);
    console.log("TEST")

    return <>
    
    <Banner/>

    <Tabs
      defaultActiveKey="scores"
      id="uncontrolled-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="scores" title="Scores">
          <Stack gap={5}>
          <Grid />
        </Stack>        
      </Tab>
      <Tab eventKey="summary" title="Summary">
        <Banner/>
      </Tab>
    </Tabs> 

    </>;
  };
  
  export default Room;