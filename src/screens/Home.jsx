import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div><Carousel /></div>
            <div className='m-3'>
                <Card />
                <Card />
                <Card />
            </div>

            <Footer></Footer>

        </div>
    )
}

export default Home
