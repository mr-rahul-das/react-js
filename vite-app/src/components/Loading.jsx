import React from 'react'
import {ShimmerPostList} from "react-shimmer-effects"

function Loading() {
  return (
    <>
    <ShimmerPostList className='mt-5' postStyle="STYLE_FOUR" col={4} row={2} gap={30} />
    </>
  )
}

export default Loading