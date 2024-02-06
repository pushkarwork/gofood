import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [formvalue, setFormValue] = useState({ email: "", password: "" })
    const handleOnChange = (e) => {
        setFormValue({ ...formvalue, [e.target.name]: e.target.value })


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formvalue)
        // setFormValue({ name: "", email: "", password: "", location: "" })

        const response = await fetch('http://localhost:3000/api/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: formvalue.email, password: formvalue.password })
        });
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            console.log("cant be submitted")
        }
        if (json.success) {
            navigate("/")
        }


    }
    return (
        <div>
            <Navbar></Navbar>
            <form className='container mt-5' onSubmit={handleSubmit}>


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
                <Link className="btn btn-danger m-3" to="/signup">Not a User? SignUp :)</Link>
            </form>
            <Footer></Footer>

        </div>
    )
}

export default Login
