import React, { Component } from 'react'

class GreetClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}.</h1>
                <h3>I am a {this.props.job}.</h3>
                {this.props.children}
            </div>
        )
    }
}

export default GreetClass;
