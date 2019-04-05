import { FlexibleXYPlot, HorizontalBarSeries } from 'react-vis';
import React, { Component } from 'react';
import axios from 'axios';
// Import styling
import '../src/Widget.css';



class Widget extends Component {

    constructor(props) {
		super(props)

		this.state = {
			Artist: null
		}
	}

	componentDidMount() {
		this.sync()
	}
	sync() {
		axios.get("http://localhost:3000/artist")
			.then(({data}) => {console.log(data.length)
				 this.setState({ Artist: data[1].Nom })  
			
		})
	}

    render() {
        return (
            <div className="Widget">
<h1>Artist du jour</h1>

<h2>{ this.state.Artist }</h2>


    

            </div>
            
        )
    }
}



export default Widget;