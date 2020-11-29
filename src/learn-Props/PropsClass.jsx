import React, { Component } from 'react'
import GreetClass from './GreetClass';

class PropsClass extends Component {
    render() {
        return (
            <div>
                Welcome to rendaring props in Class Component.
                <GreetClass name="Kunal" job="Full-stack Devloper">
                    <p>This my children props</p>  
                </GreetClass>
                <GreetClass name="Kartik" job="Frontend Devloper">
                    <button>Click me</button>
                </GreetClass>
            </div>
        )
    }
}

export default PropsClass;
