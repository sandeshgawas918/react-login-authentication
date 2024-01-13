import React, { useState } from 'react'
import { Link, Navigate, json, useNavigate } from 'react-router-dom'

const Register = () => {
    let user = {
        fname: '',
        lname: "",
        email: "",
        country: "",
        password: "",
        cpassword: ""
    }

    const [myuser, setmyuser] = useState(user)

    const navigate=useNavigate()

    let submitData=(e)=>{
        e.preventDefault()
        console.log(myuser);
        localStorage.setItem('user',JSON.stringify(myuser));
        navigate('/')
    }

    return (
        <div>
            {/* <pre>{JSON.stringify(myuser)}</pre> */}
            <div className="row mt-5">
                <div className="col-md-6 m-auto">

                    <form action="">
                        <div className="card">
                            <div className="card-header text-primary text-center">
                                <h4>Registration</h4>
                            </div>
                            <div className="card-body">
                                <div class="row g-3">
                                    <div class="col">
                                        <input type="text" value={myuser.fname} onChange={(e) => { setmyuser({ ...myuser, fname: e.target.value }) }} class="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" value={myuser.lname} onChange={(e) => { setmyuser({ ...myuser, lname: e.target.value }) }} class="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                </div>
                                <div class="row g-3 mt-3">
                                    <div class="col">
                                        <input type="text" value={myuser.email} onChange={(e) => { setmyuser({ ...myuser, email: e.target.value }) }} class="form-control" placeholder="Email" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="text" value={myuser.country} onChange={(e) => { setmyuser({ ...myuser, country: e.target.value }) }} class="form-control" placeholder="Country" aria-label="Last name" />
                                    </div>
                                </div>
                                <div class="row g-3 mt-3">
                                    <div class="col">
                                        <input type="password" value={myuser.password} onChange={(e) => { setmyuser({ ...myuser, password: e.target.value }) }} class="form-control" placeholder="Password" aria-label="First name" />
                                    </div>
                                    <div class="col">
                                        <input type="password" value={myuser.cpassword} onChange={(e) => { setmyuser({ ...myuser, cpassword: e.target.value }) }} class="form-control" placeholder="Confirm Password" aria-label="Last name" />
                                    </div>
                                </div>

                                <div className="row mt-5">
                                    <div className="col-md-5 m-auto">
                                        <div className="row">
                                            <div className="col-md-3  m-auto">
                                                <div class="dropdown">
                                                    <button class="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Month
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 m-auto">
                                                <div class="dropdown">
                                                    <button class="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Day
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-3 m-auto">
                                                <div class="dropdown">
                                                    <button class="btn btn-outline-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Year
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                                    <button class="btn btn-warning" onClick={submitData} >Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register