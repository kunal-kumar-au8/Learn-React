import React from 'react';

const GreetFunc = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}.</h1>
            <h3>I am a {props.job}.</h3>
            {props.children}
        </div>
    )
}

export default GreetFunc;