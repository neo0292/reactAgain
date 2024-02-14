import React from 'react'
import { useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
// const [data, setData] = useState([]);
// useEffect(() =>{
//   fetch('https://api.github.com/users/hiteshchoudhary')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     setData(data)})
// }, [])

  return (
    <div className='bg-gray-600 h-{300} text-center text-3xl text-red-500'>
      GithubFollowers: {data.followers}
      <img src={data.avatar_url} className='width = {300}' alt="dp" />
      </div>
  )
}

export default Github

export const GitLoader = async()=> {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}