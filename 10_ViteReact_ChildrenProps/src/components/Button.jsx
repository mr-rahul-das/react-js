import React from 'react'

function Button({children,color,event}) {
  return (
    <>
        <button className={`btn ${color}`} onClick={event}>{children}</button>
    </>
  )
}

export default Button;