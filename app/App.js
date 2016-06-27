import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			data: 0
		}
		this.setNewNumber = this.setNewNumber.bind(this);
	}
	
	setNewNumber() {
		this.setState({data: this.state.data + 1})
	}
	
	render() {
      return (
         <div>
            <Header/>
			<button onClick = {this.setNewNumber}>Increment</button>
			<Content myNumber = {this.state.data} ></Content>
         </div>
      );
   }
}

class Header extends React.Component{
	render(){
		return(
			<div>
				<h1>Header</h1>
			</div>
		);
	}
}

class Content extends React.Component{
	componentWillMount(){
		console.log('Will mount!');
	}
	
	componentDidMount(){
		console.log('Did mount!');
	}
	
	componentWillReceiveProps(newProps){
		console.log('New props!');
		console.log(newProps);
	}
	
	shouldComponentUpdate(newProps, newState){
		return true;
	}
	
	componentWillUpdate(nextProps, newxState){
		console.log('Will update');
	}
	
	componentDidUpdate(prevProps, prevState){
		console.log('Did update');
	}
	
	componendWillUnmount(){
		console.log('Will unmount!');
	}
	
	render(){
		return (
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		);
	}
}

export default App;