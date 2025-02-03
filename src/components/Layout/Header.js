import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import "bootstrap-icons/font/bootstrap-icons.css";
import toast from 'react-hot-toast';

const Header = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from local storage
    setAuth({ user: null, token: '' }); // Reset auth state
    toast.success("Logout successfully");
    navigate('/Login'); // Redirect to the Login page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo Section */}
        <span className="fs-4 fw-bold">
          <NavLink to="/" className="text-decoration-none text-dark">
            <i className="bi bi-bag-heart-fill me-2"></i> ShopMood
          </NavLink>
        </span>

        {/* Navigation Links */}
        <div className="d-flex align-items-center">
          {/* My Mood Boards Button */}
          <NavLink
            to="/MoodBoard"
            className="btn btn-light me-3 d-flex align-items-center"
            style={{ textDecoration: "none" }}
          >
            <i className="bi bi-folder2 me-2"></i> My Mood Boards
          </NavLink>

          {/* User Profile Section */}
          {auth.user ? (
            <>
              {/* Profile Button */}
              <NavLink
                to="/Profile"
                className="btn btn-light me-3 d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-person-circle me-1"></i> Profile
              </NavLink>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="btn btn-light d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-box-arrow-right me-1"></i> Logout
              </button>
            </>
          ) : (
            <>
              {/* Register Button */}
              <NavLink
                to="/Register"
                className="btn btn-light me-3 d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-person-plus me-1"></i> Register
              </NavLink>

              {/* Login Button */}
              <NavLink
                to="/Login"
                className="btn btn-light d-flex align-items-center"
                style={{ textDecoration: "none" }}
              >
                <i className="bi bi-box-arrow-in-right me-1"></i> Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
