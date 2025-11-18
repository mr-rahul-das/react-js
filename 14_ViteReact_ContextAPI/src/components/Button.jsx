import React from 'react'

function Button({name,color}) {
  return (
    <>
        <button className={`btn ${color}`}>{name}</button>
    </>
  )
}

export default Button;