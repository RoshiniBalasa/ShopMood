//rafce = react arrow function with export
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-light border-top py-3">
  <div className="container text-center">
    <p className="mb-0">
      &copy; {new Date().getFullYear()} Roshini Balasa. All Rights Reserved.
    </p>
  </div>
</footer>

  )
}

export default Footer