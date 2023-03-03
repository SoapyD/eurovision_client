
// import SocketTest from "./components/SocketTest";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Room = () => {
    return <>
    
    {/* <SocketTest/> */}
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