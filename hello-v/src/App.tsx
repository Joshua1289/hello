import React, { FC } from 'react';

// Define the interface for component props
interface GreetingProps {
  name: string;
}

// Use the FC type with the defined props interface
const Greeting: FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;

import React, { Component, ReactNode } from 'react';

// Define the interface for component state
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> { 
  // Initialize state with type annotation
  state: CounterState = {
    count: 0
  };

  // Method with type annotation
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); 
  }; 

  // Render method with return type annotation
  render(): ReactNode { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
}

export default Counter;

