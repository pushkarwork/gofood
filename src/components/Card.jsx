import React from 'react'

const Card = ({ it }) => {
    // console.log(it)
    const options = it.options[0]
    console.log(options)
    const priceOptions = Object.keys(options)
    return (

        <div>
            <div className="card mt-3" style={{ "width": "18rem", }}>
                <img src={it.img} style={{ objectFit: "contain", height: "230px" }} className="card-img-top" alt=".." />
                <div className="card-body">
                    <h5 className="card-title">{it.name}</h5>
                    <p className="card-text">{it.description}</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>)
                            })}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
