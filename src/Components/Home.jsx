import React from 'react'
import dices from '../assets/dices.png'
const Home = ({toggle}) => {
  return (
    <div className='w-[1000px] h-[500px] mt-[130px] ml-[260px] flex'>
     <div className='w-1/2 object-cover pt-[60px]'><img src={dices} alt='Dices'/></div> 
     <div className='w-1/2'>
        <div className='font-bold text-7xl mt-[200px] ml-[109px]'><h1>DICE GAME</h1></div>
        <button onClick={toggle} className='bg-black text-white p-2 pl-12 pr-12 rounded-md ml-[336px] hover:bg-sky-700'>Play Now</button>
     </div>
    </div>
  )
}

export default Home
