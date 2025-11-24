import React from 'react'
import { Hero } from '../Components/Hero/hero'
import { Popular } from '../Components/Popular/popular'
import { Offers } from '../Components/Offers/offers'
import { NewCollecetions } from '../Components/NewCollecetions/NewCollecetions'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'


export const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollecetions/>
        <NewsLetter/>
    </div>
  )
}
