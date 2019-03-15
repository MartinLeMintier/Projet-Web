import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';

// Import styling
import '../src/Widget.css';

class Widget extends Component {
    render() {
        return (
            <div className="Widget">
                <h1>Premier Widget</h1>

                <PieChart
                    data={[
                        {
                            title: 'One',
                            value: 10,
                            color: '#E38627'
                        },
                        {
                            title: 'Two',
                            value: 15,
                            color: '#C13C37'
                        },
                        {
                            title: 'Three',
                            value: 20,
                            color: '#6A2135'
                        }
                    ]}

                    label
                    labelStyle={{
                        fontSize: '5px',
                        fontFamily: 'sans-serif'
                    }}


                    style={{ height: '6cm' }}
                    labelPosition={112}
                />
            </div>

        )
    }
}



export default Widget;