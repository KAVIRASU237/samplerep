import React from 'react'


const Front = (props) => {
  return (
    <div className='all'>
      <h1 style={{ color:'red'}}>joke generating web 😁</h1>
          <button onClick={props.fetchjoke}>
              Generate
          </button>
          <h1>{props.joke}  </h1>
          <h1>{props.punchline}</h1>
          
    </div>
  )
}

export default Front
