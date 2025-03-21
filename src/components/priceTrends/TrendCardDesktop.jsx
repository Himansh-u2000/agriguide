import React from 'react'

export default function TrendCardDesktop({
  img = "https://img.freepik.com/free-vector/corn-plant-growing-with-soil-cartoon_1308-100337.jpg",
  name = "WHEAT",
  lastPrice = 45,
  currentPrice = 50,
}) {
  return (
    <div className='shadow-lg w-full rounded-lg p-4 flex justify-evenly items-center bg-white duration-150 ease-in-out hover:shadow-xl'>
      <img src={img} alt="" className='h-14 w-14 ' />
      <span className='font-semibold '>
        {name.toUpperCase()}
      </span>
      <span className='font-semibold '>
        ₹{lastPrice} /Kg
      </span>
      <span className={`font-semibold ${lastPrice > currentPrice ? 'text-red-500' : 'text-green-500'}`}>
        ₹{currentPrice} /Kg
      </span>
    </div>
  )
}
