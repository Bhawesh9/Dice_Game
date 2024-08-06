import React, { useState } from 'react'

function Selectnum({selectedNumber, 
  setSelectedNumber}) {

  return (
    <div className='mr-[60px]'>
     <div className='flex gap-4'>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 1 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(1)}>1</div>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 2 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(2)}>2</div>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 3 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(3)}>3</div>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 4 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(4)}>4</div>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 5 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(5)}>5</div>
        <div className={`h-[62px] w-[62px] border border-black font-bold text-xl p-4 pl-6 ${selectedNumber === 6 ? 'bg-black text-white' : ''}`} onClick={() => setSelectedNumber(6)}>6</div>
     </div>
     <h4 className='font-bold text-xl ml-[316px] mt-8 hover:font-extrabold'>Select Number</h4> 
    </div>
  )
}

export default Selectnum