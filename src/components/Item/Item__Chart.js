// import "./styles.css";
import React from "react";
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

const data = [];

const setScores = () => {
  for(let i=0; i<10; i++){
    data.push({
      name: i+1,
      staging: Math.floor(Math.random() * 20)+1,
      song: Math.floor(Math.random() * 20)+1,      
    })
  }
}
setScores()

const Item__Chart = (props) => {

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