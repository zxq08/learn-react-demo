import React from 'react';
import ReactDOM from 'react-dom'
import './login.css';
import Clock from '../clock/clock'

function Login (props) {
	return (
		<div className="login-wrap">
	    <div className="login-body">
	      <p>{props.systemName}</p>
	      <div className="login-content">
	        <input ref='username' type="text" placeholder="用户名" />
	        <input ref='password' type="password" placeholder="密码" />
	        <div className="login-btn" onClick={() => this.handleLogin()}>
	        登录
	        </div>
	      </div>
	      <div id="clockWrap">
	      	<Clock />
	      </div>
	    </div>
	  </div>
	)
}

function handleLogin () {
	let username = this.refs.username.value
	let password = this.refs.password.value
	this.setState({
		username: username,
		password: password
	})
	console.log('user:' + this.state.username)
	console.log('pass:' + this.state.password)
}


export default Login