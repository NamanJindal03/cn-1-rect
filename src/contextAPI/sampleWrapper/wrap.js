import React from 'react'

export default function Wrap({children, sample}) {
    console.log(children)
  return (
    <>
        {children('this is my territory')}
    </>
  )
}
