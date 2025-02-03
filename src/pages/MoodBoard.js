import React from 'react';
import Layout from '../components/Layout/Layout';
const MoodBoard = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">My Mood Boards</h1>
        <p className="text-gray-500 text-lg mb-6">No mood boards yet. Create one to get started!</p>
        <button className="flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg shadow hover:bg-gray-800 transition">
          <span className="text-lg mr-2">+</span>
          Create New Board
        </button>
      </div>
    </div>
    </Layout>
  );

};

export default MoodBoard;
