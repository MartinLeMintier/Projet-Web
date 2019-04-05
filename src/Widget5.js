import React, { Component } from 'react';
import BarChart from 'react-bar-chart';
import axios from 'axios';


// Import styling
import '../src/Widget.css';

class Widget extends Component {

    constructor(props) {
		super(props)

		this.state = {
			nbAlbum: null
		}
	}

	componentDidMount() {
		this.sync()
	}
	sync() {
		axios.get("http://localhost:3000/Album")
			.then(({data}) => {console.log(data.length)
				 this.setState({ nbAlbum: data.length })  
			
		})
	}

    render() {

        const Donnee = [
            { text: ' ', value: this.state.nbAlbum, color: '#f00' },
            
        ];

       
        return (
            <div className="Widget">
                <h1> Nombre album aujourdhui: {this.state.nbAlbum}</h1>

                <BarChart
                    
                    height={250}
                    width={350}
                    data={Donnee}
                    margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
                />

            </div>

        )
    }
}



export default Widget;