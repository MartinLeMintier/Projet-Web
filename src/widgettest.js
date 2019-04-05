import React, { Component } from 'react';
import axios from 'axios';

import './Mot.css';

class Mot extends Component {
	constructor(props) {
		super(props)

		this.state = {
			track: null
		}
	}

	componentDidMount() {
		this.sync()
	}

    render() {
			
			
		const { track } = this.state;
		
		console.log(track)
		if (track == null) {
			return <p>La chanson du jour est :</p>
		}

		return (
			<p>La chanson du jour est : { track.Title }</p>
		);
    }

	sync() {
		axios.get("http://localhost:8000/track/alea")
			.then((res) => this.setState({ track: res.data[0] }))
	}
}
export default Mot;