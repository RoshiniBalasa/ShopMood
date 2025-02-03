import React from 'react'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout>
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">

      <h1 className="display-3 text-danger mb-3">404</h1>
      <h2 className="text-dark mb-3">Page Not Found</h2>
      <p className="text-muted text-center">
        Oops! The page you're looking for doesn't exist. 
      </p>
      <a href="/" className="btn btn-dark mt-3">
        Go Back Home
      </a>
    </div>
    </Layout>
  )
}

export default Pagenotfound