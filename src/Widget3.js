import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
// Import styling
import '../src/Widget.css';

class Widget extends Component {
    render() {


        return (


            <div className="Widget">
                <h1>Troisieme Widget</h1>
                <ReactMinimalPieChart
                    data={[{
                        value: 82,
                        color: '#E38627'
                    }]}
                    totalValue={100}
                    lineWidth={20}
                    label
                    labelStyle={{
                        fontSize: '25px',
                        fontFamily: 'sans-serif'
                    }}
                    labelPosition={0}
                    style={{ height: '6cm' }}
                />



            </div>

        )
    }
}



export default Widget;