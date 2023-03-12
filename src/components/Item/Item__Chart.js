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

const data = [
  {
    name: "1",
    staging: 40,
    song: 24
  },
  {
    name: "2",
    staging: 30,
    song: 13
  },
  {
    name: "3",
    staging: 20,
    song: 98
  },
  {
    name: "4",
    staging: 27,
    song: 39
  },
  {
    name: "5",
    staging: 18,
    song: 48
  },
  {
    name: "6",
    staging: 23,
    song: 38
  },
  {
    name: "7",
    staging: 34,
    song: 43
  },
  {
    name: "8",
    staging: 34,
    song: 43
  },
  {
    name: "9",
    staging: 34,
    song: 43
  },
  {
    name: "10",
    staging: 34,
    song: 43
  }
];


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