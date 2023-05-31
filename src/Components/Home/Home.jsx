import React, { useEffect, useState } from 'react'
//Components
import Header from '../Header/Header'
import Menu from '../Menu/Menu';
import Hero from '../Hero/Dashboard';
import Charts from "../Charts/Charts";

//Icon
const menu="https://cdn-icons-png.flaticon.com/128/168/168214.png";
const closed="https://cdn-icons-png.flaticon.com/128/2734/2734822.png";

function Home() {
  const [isMobile,setIsMobile]=useState(false);
  const [open,setOpen]=useState(true);


  ///hidden menu To SizeMobile
  useEffect(()=>{
    const handelers=()=>{
      if(window.innerWidth<768){
        setIsMobile(true)
      } else{
        setIsMobile(false)
      }
    }
    window.addEventListener("resize",handelers)
    return ()=>{
      window.removeEventListener("resize",handelers)
    }
  },[])
/////////////////

  return (
    <div className='flex '>
      <img className='w-[30px] h-[30px] relative z-40' src={menu} alt="/" onClick={()=>setOpen(!open)}/>
      {!open&&<div className='basis-[11%] h-[100vh] z-30 border absolute bg-blue-800'>
          <div className='flex justify-end px-3'>
          </div>
            <Menu/>
        </div>}
        <div className='basis-[87%] max-w-[1240px] mx-auto max-h-[130px]'>
            <Header/>
            <Hero/>
            <Charts/>
        </div>
    </div>
  )
}

export default Home