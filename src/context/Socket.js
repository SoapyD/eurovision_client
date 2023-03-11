import io from "socket.io-client";
import React from "react"

const socket = io.connect(`${process.env.REACT_APP_SERVER_URL}`);
const SocketContext = React.createContext();

const SocketProvider = (props) => {
    return (
        <SocketContext.Provider value={socket}>
            { props.children }
        </SocketContext.Provider>
    )
  }


export {socket, SocketContext, SocketProvider}