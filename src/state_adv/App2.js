import React, {useState} from 'react'

export default function App2() {
    const [arr, setArr] = useState([2, 2, 4, 8]);

    console.log('re rendered');

    function increaseCounter2Times(){
        // const tempArr = [...arr, Date.now()]
        setArr((localArr)=> {return [...localArr, Date.now()]});
        // const tempArr2 = [...arr, 1222]
        setArr((localArr)=> {return [...localArr, 122]});

        // setState -> 
        //set the array multiple number of times 2 times -> push the random values
        // console.log(counter);
        // setCounter((c)=>{ return c +1});
        // console.log(counter);
        // setCounter((c)=>{ return c +1});
        // console.log(counter);
    }

  return (
    <>
        <div>Count: {arr}</div>
        <button onClick={increaseCounter2Times}>+2</button>
    </>
  )
}
