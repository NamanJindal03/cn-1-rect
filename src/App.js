import Header from './components/Header'
import Content from './components/Content';
import { useState } from 'react';

function App() {
  console.log('application rendered')
  //counter -> my counter would be starting from the value 0

  let [state, setState] = useState(0);
  // let state = 0;
  /* 
    state contains the value
    setState contains the function which is used to update the value of the state
  */
  // console.log(value);

  function decrement(){
    // setState(state - 1);
    console.log(state)
    state = state -1;
  }

  function increment(){
    // setState(state + 1);
    state = state + 1;
  }

  return (
    <div className="App">
      {/* <Header title="head1"/>
      <Header title="head2"/>
      <Header title="head3"/>
      <Header title="head4"/>
      <Header title="head5"/>
      <Content studyingHeirarchy='yes yes yes'/>
      <h1>This is my local setup of react yes it is</h1> */}
      <button onClick={decrement}>Minus</button>
      <div>{state}</div>
      <button onClick={increment}>Plus</button>
    </div>
  );
}

export default App;
