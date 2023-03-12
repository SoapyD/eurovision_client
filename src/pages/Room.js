
import { useContext } from "react";
import {SocketContext} from '../context/Socket';
import { UserContext } from "../context/UserContext"

import Loader from "../components/Loader"
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Room = () => {

    const socket = useContext(SocketContext);
    const [userContext] = useContext(UserContext)

    if(userContext.details){
      // console.log(userContext.details)
      //JOIN ROOM
      socket.emit("join_room", userContext.details.room);      
    }

    return userContext.details ? (
    <>
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
    </>
    ): (
      <Loader />
    );
  };
  
  export default Room;