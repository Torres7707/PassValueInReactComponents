import React from 'react';

// ////////////////////////////////////////////////////////////Parent组件向Child_1组件传值////////////////////////////////////////////////////////////////
//子组件1
// class Child_1 extends React.Component {
// 	render() {
// 		return <h1>child_1: {this.props.child_1}</h1>;
// 	}
// }

// //父组件
// class Parent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			child_1: 'Hello,I am component-child_1!',
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Child_1 child_1={this.state.child_1} />
// 			</div>
// 		);
// 	}
// }

// //////////////////////////////////////////////////////////////Parent组件向Grandson组件传值///////////////////////////////////////////////////////
//////////////////////////
/////通过...运算符////////
/////////////////////////
// class Parent extends React.Component {
// 	state = { name: 'Torres' };
// 	render() {
// 		return (
// 			<div>
// 				<Son name={this.state.name} />
// 			</div>
// 		);
// 	}
// }
// const Son = (props) => {
// 	return (
// 		<div>
// 			<Grandson {...props} />
// 		</div>
// 	);
// };
// const Grandson = (props) => {
// 	return (
// 		<h1>
// 			The Name of my Grandpa is:{' '}
// 			<span style={{ color: 'salmon' }}>{props.name}</span>
// 		</h1>
// 	);
// };
////////////////////////
/////使用context////////
////////////////////////
// 为当前的 name 创建一个 context（“Torres”为默认值）。
// const NameContext = React.createContext('Torres');

// class Parent extends React.Component {
// 	render() {
// 		// 使用一个 Provider 来将当前的 name 传递给以下的组件树。
// 		// 无论多深，任何组件都能读取这个值。
// 		return (
// 			<NameContext.Provider value="Dong-Wang">
// 				<Son />
// 			</NameContext.Provider>
// 		);
// 	}
// }
// // 中间的组件再也不必指明往下传递 name 了。
// class Son extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Grandson />
// 			</div>
// 		);
// 	}
// }
// class Grandson extends React.Component {
// 	//指定 contextType 读取当前的NameContext
// 	// React 会往上找到最近的 name Provider，然后使用它的值。
// 	static contextType = NameContext;
// 	render() {
// 		return (
// 			<h1>
// 				The Name of my Grandpa is:{' '}
// 				<span style={{ color: 'salmon' }}>{this.context}</span>
// 			</h1>
// 		);
// 	}
// }

////////////////////////////////////////////////////////////////////////////////子组件向父组件组件传值//////////////////////////////////////////////////////
// //子组件1
// class Child_1 extends React.Component {
// 	//child_1=>parent
// 	transferMsg = (e) => {
// 		const id = e.target.id;
//         //通过props调用父组件的函数并传参
// 		this.props.recieveMsg('child_1 has changed', id);
// 	};
// 	render() {
// 		return (
// 			<h1 id="child_1" onClick={(e) => this.transferMsg(e)}>
// 				child_1: {this.props.child_1}
// 			</h1>
// 		);
// 	}
// }

// //子组件2
// class Child_2 extends React.Component {
// 	//child_2=>parent
// 	transferMsg = (e) => {
// 		const id = e.target.id;
//         //通过props调用父组件的函数并传参
// 		this.props.recieveMsg('child_2 has changed', id);
// 	};
// 	render() {
// 		return (
// 			<h1 id="child_2" onClick={(e) => this.transferMsg(e)}>
// 				child_2: {this.props.child_2}
// 			</h1>
// 		);
// 	}
// }

// //父组件
// class Parent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			child_1: 'Hello,I am component-child_1!',
// 			child_2: 'Hello,I am component-child_2!',
// 		};
// 	}

// 	//父组件接收子组件的传值
// 	recieveMsg = (msg, id) => {
// 		id === 'child_1'
// 			? this.setState({ child_1: msg })
// 			: this.setState({ child_2: msg });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<Child_1 child_1={this.state.child_1} recieveMsg={this.recieveMsg} />
// 				<Child_2 child_2={this.state.child_2} recieveMsg={this.recieveMsg} />
// 			</div>
// 		);
// 	}
// }

// ////////////////////////////////////////////////////////////////////////////兄弟组件传值///////////////////////////////////////////////////////////////////
// //子组件1
// //1=>2
// class Child_1 extends React.Component {
// 	transferMsg = (e) => {
// 		const id = e.target.id;
// 		//调用父组件的方法先把想要传递的信息作为参数传给父组件的方法
// 		this.props.recieveMsg('you clicked child_1 but changed me', id);
// 	};
// 	render() {
// 		return (
// 			<h1 id="child_1" onClick={(e) => this.transferMsg(e)}>
// 				child_1: {this.props.child_1}
// 			</h1>
// 		);
// 	}
// }

// //子组件2
// //2=>1
// class Child_2 extends React.Component {
// 	transferMsg = (e) => {
// 		const id = e.target.id;
// 		//调用父组件的方法先把想要传递的信息作为参数传给父组件的方法
// 		this.props.recieveMsg('you clicked child_2 but changed me', id);
// 	};
// 	render() {
// 		return (
// 			<h1 id="child_2" onClick={(e) => this.transferMsg(e)}>
// 				child_2: {this.props.child_2}
// 			</h1>
// 		);
// 	}
// }

// //父组件
// class Parent extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			child_1: 'Hello,I am component-child_1!',
// 			child_2: 'Hello,I am component-child_2!',
// 		};
// 	}

// 	//父组件接收到子组件的传参更改state，再通过props传给另一个子组件
// 	recieveMsg = (msg, id) => {
// 		id === 'child_1'
// 			? this.setState({ child_2: msg })
// 			: this.setState({ child_1: msg });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<Child_1 child_1={this.state.child_1} recieveMsg={this.recieveMsg} />
// 				<Child_2 child_2={this.state.child_2} recieveMsg={this.recieveMsg} />
// 			</div>
// 		);
// 	}
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//111111111111111111111
// const { Provider, Consumer } = React.createContext('defaultValue');

// class Parent extends React.Component {
// 	render() {
// 		const name = 'hello';
// 		return (
// 			<Provider value={name}>
// 				<Son />
// 			</Provider>
// 		);
// 	}
// }

// class Son extends React.Component {
// 	render() {
// 		return <Consumer>{(name) => <Grandson />}</Consumer>;
// 	}
// }

// class Grandson extends React.Component {
// 	render() {
// 		return (
// 			<Consumer>
// 				{(name) => <h1>从Parents传到Grandson的值是: {name}</h1>}
// 			</Consumer>
// 		);
// 	}
// }

//222222222222222222222222222
// // 为当前的 name 创建一个 context（“Torres”为默认值）。
// const NameContext = React.createContext('Torres');

// class Parent extends React.Component {
// 	render() {
// 		// 使用一个 Provider 来将当前的 name 传递给以下的组件树。
// 		// 无论多深，任何组件都能读取这个值。
// 		return (
// 			<NameContext.Provider value="Dong-Wang">
// 				<Son />
// 			</NameContext.Provider>
// 		);
// 	}
// }

// // 中间的组件再也不必指明往下传递 name 了。
// class Son extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Grandson />
// 			</div>
// 		);
// 	}
// }

// class Grandson extends React.Component {
// 	//指定 contextType 读取当前的NameContext
// 	// React 会往上找到最近的 name Provider，然后使用它的值。
// 	static contextType = NameContext;
// 	render() {
// 		return <h1>The Name of my Dad is: {this.context}</h1>;
// 	}
// }

/////////////////////////////////////////////////////////////////////////

//使用...运算符
// class Parent extends React.Component {
// 	state = { name: 'Torres' };
// 	render() {
// 		return (
// 			<div>
// 				<Son name={this.state.name} />
// 			</div>
// 		);
// 	}
// }

// const Son = (props) => {
// 	return (
// 		<div>
// 			<Grandson {...props} />
// 		</div>
// 	);
// };

// const Grandson = (props) => {
// 	return (
// 		<div>
// 			<Grandgrandson {...props} />
// 		</div>
// 	);
// };

// const Grandgrandson = (props) => {
// 	return <h1>{props.name}</h1>;
// };

export default Parent;
