import React from 'react'

export default function Loading() {
  return (
    <div className='absolute fixed w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <span className='text-4xl font-bold text-gray-400/50'>Loading...</span>
    </div>
  )
}
