import React from 'react'
import Hero from './Hero'
import PriceTrends from '../priceTrends/PriceTrends'
import OurServices from './OurServices'

export default function Home() {
  return (
    <div className='bg-secondary '>
      <Hero />
      <PriceTrends />
      <OurServices/>
    </div>
  )
}
