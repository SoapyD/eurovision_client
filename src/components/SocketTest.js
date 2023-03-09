
import { useEffect, useState } from "react";
import { socket } from "./Socket"

// import io from "socket.io-client";
// const socket = io.connect(`${process.env.REACT_APP_SERVER_URL}`);


function SocketTest() {

    //Room State
    const [room, setRoom] = useState("");

    // Messages States
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const joinRoom = () => {
        if (room !== "") {
        socket.emit("join_room", room);
        }
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
            console.log(data)
        });
        // eslint-disable-next-line
    }, [socket]);    


    return <div>
        <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}    
    </div>

}

export default SocketTest;

/*
import { useEffect, useState } from "react";
import { socket } from "./Socket"

import io from "socket.io-client";


function SocketTest() {
    
    //Room State
    const [room, setRoom] = useState("");

    // Messages States
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const joinRoom = () => {
        if (room !== "") {
          // socket.emit("join_room", room);


          let action = 'create'
          let password = ''
          let user = ''
          let use_waiting_room = 0;

          let options = {
            functionGroup: "core",  
            function: "checkRoom",
            message: action+" room",
            data: {
                action: action
                ,room_name: room
                ,password: password
                ,users: [user]
                ,admins: [user]
                ,use_waiting_room: use_waiting_room
              }     
          }        

          // clientSocketHandler.messageServer(options)   
          socket.emit('message_server', options)           
        }
    };

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
            console.log(data)
        });
        // eslint-disable-next-line
    }, [socket]);    
    

    return <div>
        <input
        placeholder="Room Name..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}    
    </div>

}

export default SocketTest;

*/