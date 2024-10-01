import React, { useState } from 'react'

export default function UserDetails({user}) {
    // const [sample, setSample] = useState(10)
  return (
    <div>User Details: <span>Name: {user.name}</span> <span>Age: {user.age}</span></div>
  )
}
