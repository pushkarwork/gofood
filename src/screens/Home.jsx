import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
// import Carousel from '../components/Carousel'    
// import { search } from '../../backend/Routes/foodRoutes'

const Home = () => {

    const [search, setSearch] = useState("")
    const LoadData = async () => {
        const response = await fetch('http://localhost:3000/api/foodData', {
            method: "POST",
            Headers: {
                "Content-Type": "application/json"
            }
        })
        let res = await response.json();
        // console.log(res[0], res[1])
        setFoodCategory(res[1])
        setFoodItems(res[0])
    }
    useEffect(() => { LoadData() }, [])
    const [foodCategory, setFoodCategory] = useState([]);
    const [foodItems, setFoodItems] = useState([]);



    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>
                        <div className=" carousel-caption" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />

                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/random/900x400/?burger" className="d-block w-100" style={{ "filter": "brightness(30%)" }} alt="" /></div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x400/?sandwich" className="d-block w-100" style={{ "filter": "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/random/900x400/?pastry" className="d-block w-100" style={{ "filter": "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='m-3' >
                {foodCategory != [] ? foodCategory.map((data) => {
                    return (
                        <div key={data._id} className='row mb-3' >
                            <div className='fs-3 m-3'>{data.CategoryName}</div>
                            <hr />
                            {
                                foodItems.filter((item) => item.CategoryName === data.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase())).map((it) => {
                                    return (
                                        <div key={it._id} className='fs-6 m-3 col-12 col-md-6 col-lg-3'>
                                            <Card key={it._id} it={it}></Card>
                                        </div>
                                    )
                                })
                            }
                        </div>)
                }) : "bye"}


            </div>

            <Footer></Footer>

        </div >
    )
}

export default Home
