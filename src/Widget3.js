import React, { Component } from 'react';
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import axios from 'axios';
// Import styling
import '../src/Widget.css';

class Widget extends Component {

    constructor(props) {
		super(props)

		this.state = {
			Liste: []
		}
	}

	componentDidMount() {
		this.sync()
	}
	sync() {
		axios.get("http://localhost:3000/artist")
			.then(({data}) => {console.log(data.length)
				 this.setState({ Liste: data })  
			
		})
	}
    render() {
        let childs = [];
        for(let i = 0; i < this.state.Liste.length; i++) {
            childs.push(<h2>{this.state.Liste[i].Nom}</h2>);
        }
        return (
            <div className="Widget">
                <h1>Liste Artiste</h1>
                {childs}
            </div>

        )
    }
}



export default Widget;