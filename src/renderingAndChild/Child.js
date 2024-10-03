import React from 'react'

export default function Child({count}) {
    console.log('child called')
  return (
    <>
        <div>Child Count: {count}</div>
    </>
  )
}
