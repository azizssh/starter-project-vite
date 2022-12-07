import React from 'react'
import lightOn from './assets/light-on.svg'
import lightOff from './assets/light-off.svg'

class LightSwitchClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            on: false,
        }
    }

    toggle = () => {
        // this.setState({on: !this.state.on}) //might have bugs
        this.setState(prevState => ({on: !prevState.on}))
    }

    render() {
        return (
            <div>
                {this.props.children}

                <img onClick={this.toggle} src={this.state.on ? lightOn : lightOff} style={{height: "300px"}}/>
                <br/>
                <button onClick={this.toggle}>{this.state.on ? "Light is ON" : "Light is OFF"} {this.props.text}</button>
            </div>
        )
    }
}

export default LightSwitchClass