import React, { Component } from 'react';
import BarChart from 'react-bar-chart';


// Import styling
import '../src/Widget.css';

class Widget extends Component {
    render() {

        const data = [
            { text: ' ', value: 5, color: '#f00' },
            
        ];

       
        return (
            <div className="Widget">
                <h1> Nombre album aujourdhui</h1>

                <BarChart
                    
                    height={250}
                    width={350}
                    data={data}
                    margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
                />

            </div>

        )
    }
}



export default Widget;