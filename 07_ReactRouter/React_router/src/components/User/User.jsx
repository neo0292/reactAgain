import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div className='bg-gray-600 h-20 text-center text-3xl text-red-500'>UserId: {userId}</div>
  )
}

export default User