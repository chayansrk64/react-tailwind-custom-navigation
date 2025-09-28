import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const students = [
  {
    "name": "Ayesha",
    "math": 35,
    "physics": 57,
    "chemistry": 75
  },
  {
    "name": "Rahim",
    "math": 75,
    "physics": 65,
    "chemistry": 42
  },
  {
    "name": "Sadia",
    "math": 62,
    "physics": 41,
    "chemistry": 89
  },
  {
    "name": "Tanvir",
    "math": 69,
    "physics": 34,
    "chemistry": 70
  },
  {
    "name": "Mim",
    "math": 68,
    "physics": 84,
    "chemistry": 90
  },
  {
    "name": "Hasib",
    "math": 76,
    "physics": 36,
    "chemistry": 78
  }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={400} data={students}>
                <Line dataKey={"math"} stroke='yellow'></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
                <Line dataKey={"physics"} stroke='orange'></Line>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <CartesianGrid stroke='grey' strokeDasharray={"5 5"}></CartesianGrid>
            </LineChart>
        </div>
    );
};

export default ResultsChart;