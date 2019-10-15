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
	        <input type="text" placeholder="用户名" />
	        <input type="password" placeholder="密码" />
	        <div className="login-btn">
	        登录
	        </div>
	      </div>
	      <div id="clockWrap">
	      	<Clock date={new Date()}/>
	      </div>
	    </div>
	  </div>
	)
}

function setTime () {
	ReactDOM.render(
  	<Clock />, 
  	document.getElementById('clockWrap')
	)
}

setInterval(setTime, 1000)

export default Login