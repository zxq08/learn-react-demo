import React from 'react'
import axios from 'axios'
import './login.css'
import Clock from '../clock/clock'

class Login extends React.Component {

	constructor (props) {
		super(props)
		this.state = {username: '', password: '', _username: '', _password: ''}
		this.handleLogin = this.handleLogin.bind(this)
		this.handleUserChange = this.handleUserChange.bind(this)
		this.handlePassChange = this.handlePassChange.bind(this)
	}
	
	componentDidMount () {
		axios.get('/static/mock/user.json', {})
			.then((res) => {
				// console.log(this) 此时this指向当前组件
				res = res.data
				if (res.errno === '0') {
					this.setState({
						_username: res.data.username,
						_password: res.data.password
					})
				} else {
					console.log('json err:' + res.errno)
				}
			})
			.catch(function (err) {
				console.log("axios err:" + err)
			})
	}

	handleLogin (event) {
		// onSubmit中不能使用箭头函数，会导致this指向改变，取不到event
		event.preventDefault()
		let username = this.state.username
		let password = this.state.password
		if (username && password) {
			if (username === this.state._username && password === this.state._password) {
				// window.location = "https://www.baidu.com"
				setTimeout(() => {
					window.open("http://localhost:3000/home/home_login")
				}, 100)
			}
		} else {
			alert('用户名或密码不能为空')
		}
	}

	handleUserChange (event) {
		this.setState({username: event.target.value})
	}

	handlePassChange (event) {
		this.setState({password: event.target.value})
	}

	render () {
		return (
			<div className="login-wrap">
		    <div className="login-body">
		      <p>{this.props.systemName}</p>
		      <form className="login-content" onSubmit={this.handleLogin}>
		        <input value={this.state.username} type="text" placeholder="用户名" onChange={this.handleUserChange} />
		        <input value={this.state.password} type="password" placeholder="密码" onChange={this.handlePassChange} />
		        <input className="login-btn" type="submit" value="登录" />
		      </form>
		      <div id="clockWrap">
		      	<Clock />
		      </div>
		    </div>
		  </div>
		)
	}
}

export default Login