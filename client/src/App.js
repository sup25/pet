import React, { useState, useEffect } from 'react'

const App = () => {
  const [bEndData, SetbEndData] = useState([{}])
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        SetbEndData(data)
      }
    )
  }, [])

  return (
    <div className='text-2xl   flex-col justify-center'>
      {(typeof bEndData.users === "undefined") ? (
        <p>loding</p>
      ) : (
        bEndData.users.map((user, id) => (
          <p key={id}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App