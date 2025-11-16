import React from 'react'

function Button({children,color}) {
  return (
    <>
        <button className={`btn ${color}`}>{children}</button>
    </>
  )
}

export default Button;