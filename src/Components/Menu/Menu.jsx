import React from 'react'

///Icons
const user="https://cdn-icons-png.flaticon.com/128/747/747376.png";
const managet="https://cdn-icons-png.flaticon.com/128/1024/1024914.png";
const shopping="https://cdn-icons-png.flaticon.com/128/2838/2838895.png";
const react="https://cdn-icons-png.flaticon.com/128/8083/8083662.png";

function Menu() {
  return (
    <div className='max-w-[200px]'>
        <div className='flex flex-col items-center py-5 gap-3'>
            <h1 className='border-b-[3px] w-full text-white text-center'>پنل مدیریت</h1>
            <div className='flex items-center flex-col gap-2 mt-8'>
                <span className='text-white'>خانه</span>
                <img className='w-[30px] rounded-[50%] object-cover' src="https://t3.ftcdn.net/jpg/03/66/63/52/240_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg" alt="/" />
            </div>
            <div className='flex items-center gap-2 flex-col mt-8'>
                <span className='text-white'>حساب کاربری</span>
                <img className='w-[30px] rounded-[50%] object-cover' src={user} alt="/" />
            </div>
            <div className='flex items-center flex-col gap-2 mt-8'>
                <span className='text-white'>پرداختی</span>
                <img className='w-[30px] rounded-[50%] object-cover' src={managet}alt="/" />
            </div>
            <div className='flex items-center gap-2 flex-col mt-8'>
                <span className='text-white'>سبدخرید</span>
                <img className='w-[30px] rounded-[50%] object-cover' src={shopping} alt="/" />
            </div>
            <div className='flex items-center gap-10 py-[80px] relative'>
                <button className='bg-white p-[5px] w-[70px] rounded-xl text-[#333] font-bold'>ورود</button>
                <button className='bg-white p-[5px] w-[70px] rounded-xl text-[#333] font-bold'>خروج</button>
            </div>
            <div className='absolute bottom-10'>
            <img className='w-[50px]' src={react} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Menu