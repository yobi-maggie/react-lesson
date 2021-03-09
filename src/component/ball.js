import React, { Component } from 'react'
import './ball.css'
export default class Ball extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width || 100,
            height: props.height || 100,
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX || 1,
            speedY: props.speedY || 1,
        }
    }


    render() {
        setInterval (() => {
            let speedX = ( this.state.left < 0 || this.state.left > window.innerWidth - this.state.width ) ?  - this.state.speedX : this.state.speedX;
            let speedY = (this.state.top < 0 || this.state.top > window.innerHeight - this.state.height) ?  - this.state.speedY : this.state.speedY;
            this.setState({
                left: this.state.left + speedX,
                top: this.state.top + speedY,
                speedX,
                speedY
            })
        }, 50)


        return <div className="ball" style={({
                width: this.state.width,
                height: this.state.height,
                left: this.state.left,
                top: this.state.top,
                backgroundColor: this.props.backgroundColor
            })}></div>
    }
}