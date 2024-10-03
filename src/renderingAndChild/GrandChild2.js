import React from 'react'

export default function GrandChild2({count}) {
    console.log('grand child called')
  return (
    <>
        <div>GrandChild2 count: {count}</div>
    </>
  )
}
