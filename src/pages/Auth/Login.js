import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import {useNavigate,useLocation} from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useAuth } from '../../context/auth'
const Login = () => {

        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const { auth, setAuth } = useAuth(); 
        const navigate=useNavigate()
        const location=useLocation()
        const handleSubmit=async (e)=>{
            e.preventDefault()
            try{
                const res = await axios.post('http://localhost:8080/api/v1/auth/login', { email, password });
                if(res.data.success){
                    toast.success(res.data.message)
                    setAuth({
                        ...auth,
                        user:res.data.user,
                        token:res.data.token
                    });
                    localStorage.setItem('auth',JSON.stringify(res.data));
                    navigate(location.state||'/')
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
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            style={{ width: "40px", height: "40px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-4.5-3h11.25m0 0l-3-3m3 3l-3 3"
            />
          </svg>
          <h2 className="fw-bold mt-3">Welcome back</h2>
          <p className="text-muted">
            Don't have an account? <a href="/Register" className="text-dark fw-bold">Sign up</a>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Sign in
          </button>
        </form>
      </div>
    </div>
    </Layout>
  )
}

export default Login