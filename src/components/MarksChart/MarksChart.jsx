import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResponse = use(marksPromise)
    const marksData = marksDataResponse.data;
    // console.log(marksData);

    // data processing for the chart
    
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3
        student.avg = avg
        return student
    })

    console.log(marksChartData)

    return (
        <div>
            <BarChart width={800} height={400} data={marksChartData}>
                  <XAxis dataKey="name" ></XAxis>
                  <YAxis></YAxis>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
                  <Bar dataKey="math" fill='yellow'/>
                  <Bar dataKey="chemistry" fill='orange'></Bar>
                  <Bar dataKey="avg" fill='green'></Bar>
                  <Bar dataKey="physics" fill='pink'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;