import React from 'react';

class Avatar extends React.Component{
	constructor() {
		super();
		this.state = {
			imageUrl: 'https://avatars1.githubusercontent.com/u/3988842?v=3&s=460',
			username: 'SeriyBg',
			name: 'Serge Bishyr'
		}
	}
	
	render() {
		return (
			<div>
				<ProiflePic imageUrl={this.state.imageUrl} />
				<ProfileLink username={this.state.username} />
				<ProfileName name={this.state.name} />
			</div>
		)
	}
}

class ProiflePic extends React.Component{
	render() {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
}

class ProfileLink extends React.Component{
	render() {
		return(
			<div>
				<a href={'https://github.com/' + this.props.username}>{this.props.username}</a>
			</div>
		)
	}
}

class ProfileName extends React.Component{
	render() {
		return <div>{this.props.name}</div>
	}
}

export default Avatar;