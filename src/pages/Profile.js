import React from "react";
import Layout from "../components/Layout/Layout";
import '../styles/Profile.css';

const Profile = ({ user }) => {
  return (
    <Layout>
    <div className="profile-container">
      {/* Profile Information */}
      <div className="card profile-info">
        <h2>Profile Information</h2>
        <p>
          <strong>Name:</strong> 
        </p>
        <p>
          <strong>Email:</strong>
        </p>
      </div>

      {/* Add Friends */}
      <div className="card add-friends">
        <h2>Add Friends</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by name or email"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>
      </div>

      {/* Friends */}
      <div className="card friends">
        <h2>Friends</h2>
        <p>No friends yet. Start connecting!</p>
      </div>

      {/* Pending Requests */}
      <div className="card pending-requests">
        <h2>Pending Requests</h2>
        <p>No pending friend requests</p>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
