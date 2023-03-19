
// import React from "react";
import { useEffect, useState, React, useContext } from "react";
import {SocketContext} from '../../context/Socket';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";


// const setScores = () => {
//   let temp_data = [];
//   for(let i=0; i<10; i++){
//     temp_data.push({
//       name: i+1,
//       staging: 0,
//       song: 0            
//     })
//   }
//   return temp_data;
// }


const Item__Chart = (props) => {

  const socket = useContext(SocketContext);  
  const [data, setData] = useState("");
  

  useEffect(() => {
    // let country = 'croatia'
    socket.on("receive_chart", (data) => {
      // console.log(data)
      // console.log(props)
      if(props.country == data.country){
        setData(data.scores);
      }
    });
}, [socket], props);

  return(
      <ResponsiveContainer height={200}>
          <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
              top: 25,
              right: 20,
              left: 20,
              bottom: 5
          }}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Legend />
          <Bar dataKey="song" fill={props.song_colour} />
          <Bar dataKey="staging" fill={props.staging_colour} />
          </BarChart>
      </ResponsiveContainer>
  )
}

export default Item__Chart