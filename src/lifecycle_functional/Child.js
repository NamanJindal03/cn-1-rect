import React, {useState, useEffect} from 'react'

let count = 0;

export default function Child() {
    const [noticeChange, setNoticeChange] = useState(false);
    const [noticeChange2, setNoticeChange2] = useState(false);
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('mounted');
        // setCounter(counter+1)
        // console.log('mounted! please perform your mounting actions');

        // return ()=>{
        //     console.log('unmounted! please perform your component cleanup actions')
        // }


        // return ()=>{
        //     console.log('unmounted')
        // }
    },[]) //first parameter is a callback and second parameter is a dependency array

    useEffect(()=>{
        console.log('notice change triggered')
        // console.log(count++);
        // setNoticeChange(!noticeChange)
    }, [noticeChange, counter])

    // useEffect(()=>{
    //     if(counter >= 10){
    //         console.log('too many counts, I am tired, please wait')
    //     }
    // }, [counter])
    // useEffect(()=>{
    //     return ()=>{
    //         console.log('unmounted! please perform your component cleanup actions')
    //     }
    // }, [])
  return (
    <>
        {console.log('jsx loaded')}
        <>
            <div>Child</div>
            <button onClick={()=> setNoticeChange(!noticeChange)}>Toggle State</button>
            <button onClick={()=> setCounter(counter+1)}>Inc Counter</button>
        </>

    </>
  )
}
