import React from 'react'
import './clock.css'

class Clock extends React.Component {
	constructor (props) {
		super(props)
		this.state = { date: new Date() }
	}

	componentDidMount () {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentWillUnmount () {
		clearInterval(this.timerID)
	}

	tick () {
		this.setState({
			date: new Date()
		})
	}

	render () {
		return (
			<div className="clockWrap">
				<p>现在时间： {this.state.date.toLocaleTimeString()}</p>
			</div>
		)
	}
}

export default Clock