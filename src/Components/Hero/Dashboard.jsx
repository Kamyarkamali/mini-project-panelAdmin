import React from 'react'

const up="https://cdn-icons-png.flaticon.com/128/5610/5610930.png";

const down="https://cdn-icons-png.flaticon.com/128/5974/5974734.png";

function Hero() {
  return (
   <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row justify-around py-[40px] max-w-[1300px] m-auto gap-5'>

    <div className=' max-w-[400px] h-fit bg-yellow-300 flex flex-col items-center rounded-lg p-[10px] gap-3 hover:scale-150 duration-300 shadow-lg'>
      <h1 className='text-xl text-gray-700'>بازدید صفحه در امروز</h1>
      <span className='text-gray-500 font-bold'>12.3 K</span>
      <div className='flex items-center p-[10px]'>
        <div className='flex items-center gap-3'>
      <span className='font-bold'>+11-4</span>
      <img className='w-[20px] rounded-[50%]' src={up} alt="/" />
        </div>
      </div>
    </div>

    <div>
    <div className=' max-w-[500px] bg-green-500 flex flex-col items-center rounded-lg p-[10px] gap-3 hover:scale-150 duration-300 shadow-lg'>
      <h1 className='text-xl text-gray-100'>بازدید صفحه در این هفته</h1>
      <span className='text-gray-200 font-bold'>12.3 K</span>
      <div className='flex items-center p-[10px]'>
      <div className='flex items-center gap-3'> 
      <span className='font-bold text-white'>+11-4</span>
      <img className='w-[20px] rounded-[50%]' src={up} alt="/" />
      </div>
      </div>
    </div>
    </div>

    <div>
    <div className=' max-w-[500px] h-fit bg-red-400 flex flex-col items-center rounded-lg p-[10px] gap-3 hover:scale-150 duration-300 shadow-lg'>
      <h1 className='text-xl text-white'>بازدید صفحه در این ماه</h1>
      <span className='text-gray-200 font-bold'>20.3 K</span>
      <div className='flex items-center p-[10px]'>
      <div className='flex items-center gap-3'> 
      <span className='font-bold text-white'>-31.1</span>
      <img className='w-[20px] rounded-[50%]' src={down} alt="/" />
      </div>
      </div>
    </div>
    </div>

   </div>
  )
}

export default Hero