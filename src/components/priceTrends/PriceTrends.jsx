import React from 'react'
import SubHeader from '../common/SubHeader'
import TrendCardDesktop from './TrendCardDesktop'
import TrendCardMobile from './TrendCardMobile'

export default function PriceTrends() {
  const crops = [
    {
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRb-XBVbvw2JOG73CAERD1qKVVeRQlTQrHO55WN2O4putZ-sW9m",
      name: "Wheat",
      lastPrice: 1800,
      currentPrice: 2000
    },
    {
      img: "https://img.freepik.com/premium-vector/oryza-sative-plant-white-background-2d-vector-illustration_983286-4583.jpg?w=740",
      name: "RICE",
      lastPrice: 2500,
      currentPrice: 2700
    },
    {
      img: "https://img.freepik.com/free-vector/corn-plant-growing-with-soil-cartoon_1308-100337.jpg",
      name: "maize",
      lastPrice: 1500,
      currentPrice: 1600
    },
    {
      img: "https://png.pngtree.com/png-vector/20240106/ourmid/pngtree-pongal-festival-celebration-sugarcane-png-image_11412136.png",
      name: "Sugarcane",
      lastPrice: 3000,
      currentPrice: 3200
    }
  ];

  return (
    <div>
      <SubHeader label="Price Trends" />
      <div className=" hidden md:block">
        <div className="mx-auto max-w-7xl justify-evenly gap-4 flex text-center font-semibold p-4">
          <span>IMAGE</span>
          <span>NAME</span>
          <span>LAST WEEK</span>
          <span>TODAY</span>
        </div>
        <div className="mx-auto max-w-7xl flex-col gap-4 flex">
          {
            crops.map((crop) => (

              <TrendCardDesktop {...crop} />
            ))
          }
        </div>
      </div>
      <div className="flex flex-col gap-4 md:hidden p-4">
        {
          crops.map((crop) => (
            <TrendCardMobile {...crop} />
          ))
        }

      </div>
    </div>
  )
}
