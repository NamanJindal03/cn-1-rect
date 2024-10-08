import React, {useState, useEffect} from 'react'

export default function TodoApi() {

    const [todoData, setTodoData] = useState({});
    const [todoId, setTodoId] = useState(1);

    async function getTodo(){
        const jsonData = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
        const data = await jsonData.json();
        setTodoData(data)
    }

    useEffect(()=>{
        getTodo();
            // .then((data)=>{
            //     return data.json()
            // })
            // .then((data)=>{
            //     console.log(data);
            //     setTodoData(data);
            // })
            // .catch((err)=>{
            //     console.error(err)
            // })
        return ()=>{//cleanup function
            }
    },[todoId])

  return (
    <>
        {console.log(todoData)}
        {console.log(todoData.userId)}
        {todoData.userId}
        {todoData.id}
        {todoData.title}
        {!todoData.completed && <button onClick={()=> setTodoId(todoId + 1)}>Next</button>}
    </>
  )
}
