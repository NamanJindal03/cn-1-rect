import React, {useEffect} from 'react'

export default function Child2() {
    useEffect(()=>{
        console.log('mounting of child2');

        //unmounting of child2 
        return ()=>{
            console.log('unmounting of child 2')
        }
    })
  return (

    <div>Child2</div>
  )
}
