import React from 'react'
// import mouse from "../assets/images/mouse.png"
// import ox from "../assets/images/ox.png"
// import tiger from "../assets/images/tiger.png"
// import rabit from "../assets/images/rabit.png"
// import dragon from "../assets/images/dragon.png"
// import snake from "../assets/images/snake.png"
// import horse from "../assets/images/horse.png"
// import goat from "../assets/images/goat.png"
// import monkey from "../assets/images/monkey.png"
// import rooster from "../assets/images/rooster.png"
// import dog from "../assets/images/dog.png"
// import pig from "../assets/images/pig.png"

// const zodiacSignImgArr = [
//   { id: 1, imgSrc: mouse, name: 'ជូត' },
//   { id: 2, imgSrc: ox, name: 'ឆ្លូវ' },
//   { id: 3, imgSrc: tiger, name: 'ខាល' },
//   { id: 4, imgSrc: rabit, name: 'ថោះ' },
//   { id: 5, imgSrc: dragon, name: 'រោង' },
//   { id: 6, imgSrc: snake, name: 'ម្សាញ់' },
//   { id: 7, imgSrc: horse, name: 'មមី' },
//   { id: 8, imgSrc: goat, name: 'មមែ' },
//   { id: 9, imgSrc: monkey, name: 'វក' },
//   { id: 10, imgSrc: rooster, name: 'រកា' },
//   { id: 11, imgSrc: dog, name: 'ច' },
//   { id: 12, imgSrc: pig, name: 'កុរ' },
// ]
import {
  GiRat, GiTigerHead,
  GiRabbit, GiSpikedDragonHead,
  GiSnake, GiHorseHead, GiGoat,
  GiMonkey, GiRooster, GiSittingDog, GiPig
} from "react-icons/gi"
import {SiHappycow} from "react-icons/si"
import {FaPiggyBank} from "react-icons/fa"

const zodiacSignImgArr = [
  { id: 1, zodiac: <GiRat className='text-[63px] sm:text-[73px]' />, name: 'ជូត' },
  { id: 2, zodiac: <SiHappycow className='text-[65px] sm:text-[70px]' />, name: 'ឆ្លូវ' },
  { id: 3, zodiac: <GiTigerHead className='text-[60px] sm:text-[70px]' />, name: 'ខាល' },
  { id: 4, zodiac: <GiRabbit className='text-[60px] sm:text-[70px]' />, name: 'ថោះ' },
  { id: 5, zodiac: <GiSpikedDragonHead className='text-[60px] sm:text-[70px]' />, name: 'រោង' },
  { id: 6, zodiac: <GiSnake className='text-[60px] sm:text-[70px]' />, name: 'ម្សាញ់' },
  { id: 7, zodiac: <GiHorseHead className='text-[60px] sm:text-[70px]' />, name: 'មមី' },
  { id: 8, zodiac: <GiGoat className='text-[60px] sm:text-[70px]' />, name: 'មមែ' },
  { id: 9, zodiac: <GiMonkey className='text-[60px] sm:text-[73px]' />, name: 'វក' },
  { id: 10, zodiac: <GiRooster className='text-[63px] sm:text-[73px]' />, name: 'រកា' },
  { id: 11, zodiac: <GiSittingDog className='text-[60px] sm:text-[70px]' />, name: 'ច' },
  { id: 12, zodiac: <FaPiggyBank className='text-[63px] sm:text-[70px]' />, name: 'កុរ' },
]

// const ZodiacSigns = () => {
//   return (
//     <div>
//       <div className='flex flex-wrap justify-center'>
//         {zodiacSignImgArr.map(({ id, imgSrc, name }) => (
//           <div key={id} className='relative flex flex-col m-1 items-center justify-end p-3 rounded-2xl
//           duration-300 cursor-pointer active:scale-150'>
//             <img className='object-fill w-[70%] max-sm:w-[30%]' src={imgSrc} alt={name + '.jpg'} />
//             <h1 className='mt-2'>{name}</h1>
//           </div>
//         ))
//         }
//       </div>
//     </div>
//   )
// }
const ZodiacSigns = () => {
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {zodiacSignImgArr.map(({ id, zodiac, name }) => (
          <div key={id} className='flex flex-col m-1 items-center justify-end
          duration-100 cursor-pointer active:scale-150'>
            {zodiac}
            <h1 className='mt-1 text-[14px] sm:text-[15px]'>{name}</h1>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default ZodiacSigns