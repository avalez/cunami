import React from 'react'

export default function HelloWorld() {
  function authFunc() {
    WavesKeeper.auth({data: "Auth to the beatch"}).then(auth => alert(JSON.stringify(auth))).catch(console.log)
  }
  return (
    <div className="container">
      <p>
        Welcome to the beatch!
      </p>
      <input className="btn btn-primary" type="submit" value="Auth" onClick={authFunc}></input>
    </div>
  )
}
