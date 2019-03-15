import { FlexibleXYPlot, HorizontalBarSeries } from 'react-vis';
import React, { Component } from 'react';
// Import styling
import '../src/Widget.css';



class Widget extends Component {
    render() {
        

        const series1 = [{ y: 1, x: 20 }];
        const series2 = [{ y: 1, x: 10 }];
        const series3 = [{ y: 1, x: 70 }];
       
        return (
            <div className="Widget">
<h1>Quatrieme Widget</h1>


     <FlexibleXYPlot stackBy="x" height={200} >
     <HorizontalBarSeries data={series1} color="#f2d200" />
     <HorizontalBarSeries data={series2} color="#404040" />
     <HorizontalBarSeries data={series3} color="#000000" />
 </FlexibleXYPlot>


            </div>
            
        )
    }
}



export default Widget;