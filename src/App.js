import Header from './components/Header'
import Content from './components/Content';
import { useState } from 'react';

function App() {
  console.log('application rendered')
  //counter -> my counter would be starting from the value 0

  /* File =>


    function useState(initialValue){
      if(if local variable does not contain the value){
        localVaraible = initialValue;
      }

      function changeState(newValue){
        localVaraible = newValue;
        
        rerender the UI
      }


      return [localVariable, changeState]
    }

  */


  const [state, setState] = useState(0);
  const [decrementCountValue, setDecrementCountValue] = useState(1)
  // let state = 0;
  /* 
    state contains the value
    setState contains the function which is used to update the value of the state
  */
  // console.log(value);

  function decrement(decrementBy){
    console.log('decrement called');
    let decrementCount = decrementBy
    if(!decrementBy || typeof decrementBy === 'object'){
      decrementCount = 1;
    }
    // let decrementCount = decrementBy ? decrementBy : 1
    console.log(decrementCount)
    setState(state - decrementCount);
    // console.log(state)
    // state = state -1;
  }

  function increment(){
    console.log('increment called')
    setState(state + 1);
    // state = state + 1;
  }

  function increaseTheDecrementValue(){
    setDecrementCountValue(decrementCountValue + 1)
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

      {/* <h1>Decrease By value</h1>
      <div>

      </div> */}

      <button onClick={increaseTheDecrementValue}>Increase the decrement value</button>


      <h1>My counter</h1>
      <button onClick={decrement}>Minus</button>
      <button onClick={()=> decrement(decrementCountValue)}>Minus by {decrementCountValue}</button>
      <div>{state}</div>
      <button onClick={increment}>Plus</button>
    </div>
  );
}

export default App;


