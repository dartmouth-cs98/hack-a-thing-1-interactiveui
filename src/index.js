import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// resources used:
// https://stackoverflow.com/questions/42761378/react-create-a-new-html-element-on-click

class Layout extends React.Component {

	constructor(){
		super();
		this.state = {
			val: 0,
			buttons: []
			};
	}

	incVal(){
		this.setState({val: this.state.val + 1});
	}

	decVal(){
		this.setState({val: this.state.val - 1});
	}

	resetVal(){
		this.setState({val: 0});
	}

	getVal(){
		return this.state.val;
	}

	creatElem(){
		const button = this.state.buttons;
		const index = Math.max(button) + 1;
		button.push({index})
		this.setState({buttons: button})
	}

	deleteElem(index){
		const button = this.state.buttons;
		button.splice(index, 1);
		this.setState({buttons: button})

	}

	render(){
		return(
			<div>
				<h1>{this.getVal()}</h1>
				<button onClick={this.incVal.bind(this)}>Increment</button>
				<button onClick={this.decVal.bind(this)}>Decrement</button>
				<button onClick={this.resetVal.bind(this)}>Reset</button>
				<button onClick={this.creatElem.bind(this)}>Create</button>
				<div>
					{this.state.buttons.map((index) => {
						return(
								<div>
									<button onClick={this.deleteElem.bind(this)}>Delete</button>
								</div>
						)
					})}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Layout/>,document.getElementById('root'))