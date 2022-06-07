import React from 'react'

const Card = () => {
  return (
    <div className=' w-96 shadow-lg border border-gray-50 rounded-lg p-10'   >
       <div className='flex justify-center item-center mb-4'>
          <img className=' rounded-full w-40 h-40 object-cover' src='/1.png' alt='pikachu'/> 
       </div>
        
        <p className='text-center text-lg font-medium mb-4'>“Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”</p>
        <p  className='text-center text-blue-400'>Pikachu</p>
        <p className='text-center text-gray-400'>PSU Phuket</p>
    </div>
  )
}

export default Card