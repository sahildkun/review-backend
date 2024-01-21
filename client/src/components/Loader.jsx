import React from 'react'
import PostLoading from './PostLoading'

const Loader = () => {
  return (
    <div className='flex flex-col gap-5'>
        <PostLoading />
        <PostLoading />
        <PostLoading />
    </div>
  )
}

export default Loader