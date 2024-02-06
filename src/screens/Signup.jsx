import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [formvalue, setFormValue] = useState({ name: "", email: "", password: "", location: "" })
    const handleOnChange = (e) => {
        setFormValue({ ...formvalue, [e.target.name]: e.target.value })
        // console.log(formvalue)

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formvalue)
        // setFormValue({ name: "", email: "", password: "", location: "" })
        const response = await fetch('http://localhost:3000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: formvalue.name, email: formvalue.email, password: formvalue.password, location: formvalue.location })
        });
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            console.log("cant be submitted")
        }


    }
    return (
        <div>
            <Navbar />
            <form className='container mt-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name='name' value={formvalue.name} onChange={handleOnChange} type="text" className="form-control" id="name" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input name='location' value={formvalue.location} onChange={handleOnChange} type="text" className="form-control" id="location" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name='email' value={formvalue.email} onChange={handleOnChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input name='password' value={formvalue.password} onChange={handleOnChange} type="text" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger m-3" to="/login">Already a User?</Link>
            </form>
            <Footer />
        </div>
    )
}

export default Signup
