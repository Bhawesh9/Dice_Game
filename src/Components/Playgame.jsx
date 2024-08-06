import React from 'react'
import Score from './Score'
import Selectnum from './Selectnum'
import Rolldice from './Rolldice'
import { useState } from 'react'

function Playgame() {
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <>
    <div className='flex justify-between mt-16'>
    <Score />
     <Selectnum selectedNumber={selectedNumber}
     setSelectedNumber={setSelectedNumber}/>
    </div>
    <Rolldice />
    </>
  )
}

export default Playgame
