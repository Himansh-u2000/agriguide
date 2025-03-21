import React from 'react'

export default function TrendCardMobile({
  img = "https://img.freepik.com/free-vector/corn-plant-growing-with-soil-cartoon_1308-100337.jpg",
  name = "WHEAT",
  lastPrice = 45,
  currentPrice = 50,
}) {
  return (
    <div className='rounded-xl shadow-xs hover:shadow-2xl flex justify-evenly bg-white p-4 mx-auto max-w-xs w-full'>
      <div className="flex flex-col gap-4">
        <img src={img} alt="img" className='w-20 h-20' />
        <h1 className='font-semibold text-lg text-center'>
          {name.toUpperCase()}
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-center">
        <div className='text-sm'>Last Week:{' '}
          <span className={lastPrice > currentPrice ? 'text-red-500 text-base' : 'text-green-500 text-base'}>
            ₹
            {lastPrice}
            /Kg
          </span>
        </div>
        <div className='text-sm'>Last Week: ₹
          <span>
            {currentPrice}
          </span> /Kg
        </div>
      </div>
    </div>
  )
}
