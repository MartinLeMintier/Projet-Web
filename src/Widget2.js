import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

// Import styling
import '../src/Widget.css';

class Widget extends Component {
    render() {
        return (
            <div className="Widget">
<h1>Deuxieme Widget</h1>


<ReactMinimalPieChart
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
  style={{ height: '6cm' }}
  lineWidth={15}
  rounded
  
/>
            </div>
            
        )
    }
}



export default Widget;