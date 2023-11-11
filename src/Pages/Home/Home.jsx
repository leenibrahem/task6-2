import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Modules/Hero/Hero'
import MiniCards from '../../Modules/MiniCards/MiniCards'
import ContainerCard from '../../Modules/Container/ContainerCard/ContainerCard'
import Possibilities from '../../Modules/Possibiltities/Possibilities'
import Footer from '../../Components/Footer/Footer'
import Costumers from '../../Modules/Costumers/Costumers'
import Features from '../../Modules/Features/Features'
import Arrivals from '../../Modules/Arrivals/Arrivals'

const Home = () => {
  return (
    

    <>
    <Navbar />
    <Hero />
    <MiniCards/>
    <ContainerCard/>
    <Possibilities/>
    
   <Arrivals/>
    <Costumers/>
    <Features/>
    <Footer/>
    </>






  )
}

export default Home