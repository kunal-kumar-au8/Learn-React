import React from 'react';
import Greet from './GreetFunc';

function PropsFunc() {
  return (
    <div>
      Welcome to rendaring props in Functional Component.
      <Greet name="Kunal" job="Full-stack Devloper">
        <p>This my children props</p>  
      </Greet>
      <Greet name="Kartik" job="Frontend Devloper">
        <button>Click me</button>
      </Greet>
    </div>
  ); 
}

export default PropsFunc;
