import React, { PureComponent, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

///Redux
import { addUsers } from '../../Fetchare/prouduts/products';
import { useSelector,useDispatch } from 'react-redux';

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];



function Charts() {
    const [isMobile,setIsMobile]=useState(false)
    const state=useSelector((state)=>state.users.products)
    const dispatch=useDispatch()

    
  useEffect(()=>{
    const handlers=()=>{
        if(window.innerWidth<768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
        dispatch(addUsers())
    }
    console.log()

    window.addEventListener("resize",handlers)
    return()=>{
        window.removeEventListener("resize",handlers)
    }
  },[])


  const transformData=state.length>0 ? state.map((item)=>({
    name:item.name,
    uv: item.uv,
    pv: item.pv,
  })) : []

    return (
        <div className='flex justify-center h-[300px] max-w-[1200px]'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={transformData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
              </div>
      );
    }

export default Charts