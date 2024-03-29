import React from 'react'
import '../layout/layout.css'
import Header from '../layout/Header'
import { VideoSection } from './VideoSection'
import { CountdownSection } from './CountdownSection'
import { CardsSection } from './CardsSection'
import { DetailsSection } from './detailsSection'
 



export const Home = () => {


    return (
        <>
         <Header />
         <VideoSection />
         <CountdownSection />
         <CardsSection />
         <DetailsSection />
           
        </>
    )
}

