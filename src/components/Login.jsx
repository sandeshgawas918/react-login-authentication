import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    let login_user = {
        email: "",
        password: ""
    }

    const [loginUser, setloginUser] = useState(login_user)

    let navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()

        let storedUser = localStorage.getItem('user')

        if (storedUser) {
            let loggedUser = JSON.parse(storedUser)
            if (loginUser.email === loggedUser.email && loginUser.password === loggedUser.password) {
                navigate('/home')
            }
            else {
                toast.error("Invalid Credentials !", {
                    position: "top-center"
                  });
            }
        }
        else {
            toast.warn("Please REGISTER yourself first!", {
                position: "top-center"
              });
        }
    }

    return (
        <div>
        <ToastContainer/>
            {/* <pre>{JSON.stringify(loginUser)}</pre> */}
            <div className="row ">
                <div className="col-md-5 m-auto">
                    <div className="card">
                        <div className="card-body bg-info">
                            <div className='text-center text-white'>
                                <h3>Lets get started now!</h3>
                                <h5>Or <Link to={"register"}>create Account</Link> if not registered</h5>
                            </div>
                            <div className="col-md-9  m-auto mt-5 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input value={loginUser.email} onChange={(e) => { setloginUser({ ...loginUser, email: e.target.value }) }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input value={loginUser.password} onChange={(e) => { setloginUser({ ...loginUser, password: e.target.value }) }} type="password" class="form-control" id="exampleInputPassword1" />
                                            </div>
                                            {/* <button onClick={checkUser} class="btn btn-primary">Sign In</button> */}
                                            {/* {
                                                logincheck ?
                                                    <div className="text-center">
                                                        <Link to={'home'} type="submit" class="btn btn-primary">Sign In</Link>
                                                    </div> :
                                                    alert("Please create a new account")
                                            } */}
                                            <div className="text-center">
                                                <button to={'home'} type="submit" class="btn btn-primary" onClick={handleLogin}>Sign In</button>
                                            </div> 
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login