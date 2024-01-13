import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
    let [user, setuser] = useState(null)

    useEffect(() => {
        let storedUser = localStorage.getItem('user')
        if (storedUser) {
            let loggedUser = JSON.parse(storedUser)
            setuser(loggedUser)
            console.log(loggedUser);
        }
    }, [])

    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-end mt-3 '>
                <Link to={"/"} className=' btn btn-danger justify-content-end me-1'>Log Out</Link>
            </div>
            <div className="container mt-5">
                <h3>Welcome <span className=' display-5 fw-bold text-success'>{user && user.fname}</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis earum quod iure neque doloribus vitae iste. Aliquam, similique aperiam. Inventore aspernatur molestias alias perferendis explicabo corporis accusantium! Illo quisquam veniam accusantium nobis aliquid! A deleniti excepturi doloremque commodi sapiente esse, quam, recusandae omnis voluptatibus, qui eum at minus quod.</p>
            </div>
        </div>
    )
}

export default Home