import React, { Component } from 'react';
import axios from 'axios';

import './Widget.css';

class Widget extends Component {
	constructor(props) {
		super(props)

		this.state = {
			track: null
		}
	}

	componentDidMount() {
		this.sync()
	}
	sync() {
		axios.get("http://localhost:3000/track")
			.then(({data}) => {console.log(data.length)
				 this.setState({ track: data[1].Title })  
			
		})
	}

    render() {
		
			return (
				<div className="Widget">
					<h1>La chanson du jour est : </h1>
					<h1> { this.state.track } </h1>
				</div>
				)

    }

	
}
export default Widget;