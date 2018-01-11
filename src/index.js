import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Layout extends React.Component {

	constructor(){
		super();
		this.state = {val: 0};
	}

	incVal(){
		this.setState({val: this.state.val + 1});
	}

	getVal(){
		return this.state.val;
	}

	render(){
		return(
			<div>
				<h1>{this.getVal()}</h1>
				<button onClick={this.incVal.bind(this)}>Increment Value</button>
			</div>
		);
	}
}

ReactDOM.render(<Layout/>,document.getElementById('root'))