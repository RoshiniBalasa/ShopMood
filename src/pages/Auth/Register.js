import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
const Register = () => {
    const [username,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:8080/api/v1/auth/register', { username, email, password });
            if(res.data.success){
                toast.success(res.data.message)
                navigate('/Login')
            }
            else{
                toast.error(res.data.message)
            }

        }catch(error){
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout>
    <div className="container d-flex justify-content-center align-items-center vh-100 ">
      <div className="card p-4 shadow" style={{ width: "400px", borderRadius: "10px" }}>
        <div className="text-center mb-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-person-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 9a5 5 0 0 0-4.546 2.916.5.5 0 0 0 .832.554A4 4 0 0 1 8 10a4 4 0 0 1 3.714 2.47.5.5 0 0 0 .832-.554A5 5 0 0 0 8 9z" />
            <path
              fillRule="evenodd"
              d="M13.5 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          <h2 className="fw-bold mt-2">Create an account</h2>
          <p className="text-muted">
            Already have an account? <a href="/Login" className="text-dark fw-bold">Sign in</a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label fw-semibold">
              Full name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Create account
          </button>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export default Register