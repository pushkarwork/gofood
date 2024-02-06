import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

const Home = () => {

    const LoadData = async () => {
        const response = await fetch('http://localhost:3000/api/foodData', {
            method: "POST",
            Headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await response.json();
        console.log(res[0], res[1])
    }

    useEffect(() => { LoadData() }, [])
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
