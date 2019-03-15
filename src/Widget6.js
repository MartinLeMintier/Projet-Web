import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// Import styling
import '../src/Widget.css';

class Widget extends Component {
    render() {

        const data = [{ name: '2016', uv: 400},{ name: '2017', uv: 200},{ name: '2018', uv: 300}, { name: '2019', uv: 100}];


        return (
            <div className="Widget">
                <h1>Sixièeme Widget</h1>

                <LineChart width={360} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>

        )
    }
}



export default Widget;