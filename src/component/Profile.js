import React, { useEffect } from 'react'

function Profile() {
    useEffect(()=>{
        let timer = setInterval(() => {
            console.log("setInterval");
        }, 1000);

        return ()=>{
            clearInterval(timer)
        }
    })
  return (
    <div>
      <h1>Profile </h1>
    </div>
  )
}

export default Profile
