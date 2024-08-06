import React, { useState } from 'react';
import dice_1 from '../assets/dice_1.png';
import dice_2 from '../assets/dice_2.png';
import dice_3 from '../assets/dice_3.png';
import dice_4 from '../assets/dice_4.png';
import dice_6 from '../assets/dice_6.png';

const Rolldice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Generated random number:', randomNumber);
    return randomNumber;
  };

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1, 6); // Corrected the range
    console.log('Current dice:', randomNumber);
    setCurrentDice(randomNumber);
  };

  return (
    <div>
      <div className='flex justify-center mt-8'>
        <div className='flex flex-col'>
          <img
            onClick={rollDice}
            className='cursor-pointer'
            src={
              currentDice === 1
                ? dice_1
                : currentDice === 2
                ? dice_2
                : currentDice === 3
                ? dice_3
                : currentDice === 4
                ? dice_4
                : dice_6
            }
            alt={`Dice ${currentDice}`}
          />
          <h3 className='font-semibold text-xl ml-8'>Click on Dice to roll</h3>
          <button className='w-[220px] h-[44px] mt-12 ml-4 border border-black pl-[18px] pt-[10px] pr-[18px] pb-[10px] rounded-md text-black font-xs'>
            Reset Score
          </button>
          <button className='w-[220px] h-[44px] mt-8 border border-black rounded-md pl-[18px] pt-[10px] pr-[18px] pb-[10px] ml-4 text-white bg-black font-xs'>
            Show Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rolldice;
