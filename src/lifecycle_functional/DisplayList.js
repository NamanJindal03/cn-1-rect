import React from 'react'

export default function DisplayList({todoList}) {
  return (
    <>
        {
            todoList.map((todo)=>{
                return (
                    <div>
                        <h5>{todo.title}</h5>
                        <ul>
                            <li>{todo.userId}</li>
                            <li>{todo.id}</li>
                        </ul>
                    </div>
                )
            })
        }
    </>
  )
}
