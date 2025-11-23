import React from 'react'

function Button({name,color}) {
  return (
    <>
        <button className={`btn ${color}`}><i className="bi bi-person-circle"></i> {name}</button>
    </>
  )
}

export default Button;