
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/test.css";

import { UserProvider } from "./context/UserContext";
import { SocketProvider } from './context/Socket';
import Admin__Refresh from './components/Admin/Admin__Refresh'

function App() {

  return (
    <div className="App">
      <UserProvider>
      <SocketProvider>
        <Admin__Refresh/>
      </SocketProvider>
      </UserProvider>
    </div>       
  )

}

export default App;