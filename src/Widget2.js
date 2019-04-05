import React, { Component } from 'react';
import axios from 'axios';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

// Import styling
import '../src/Widget.css';

class Widget extends Component {

    constructor(props) {
		super(props)

		this.state = {
			nbArtist: null
		}
    }
    
    componentDidMount() {
		this.sync()
	}
	sync() {
		axios.get("http://localhost:3000/Artist")
			.then(({data}) => {console.log(data.length)
				 this.setState({ nbArtist: data.length})  
			
		})
	}

    render() {
        return (
          <div className="Widget">
          <h1>Nombre d'artistes sur le site</h1>
          <ReactMinimalPieChart
              data={[{
                  value: this.state.nbArtist,
                  color: '#E38627'
              }]}
              totalValue={100}
              lineWidth={0}
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