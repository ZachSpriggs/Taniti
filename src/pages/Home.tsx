import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src="/island-hero.jpg" alt="Island Hero" className="img-fluid" />
        <div className="hero-text">
          <h1>Welcome to Our Island Paradise</h1>
          <p>Discover the beauty and excitement of our tropical getaway</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src="/image1.jpg" alt="Feature 1" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>Discover Paradise</h2>
            <p>Experience the beauty of our pristine beaches and lush forests.</p>
          </div>
        </div>
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2">
            <img src="/image2.jpg" alt="Feature 2" className="img-fluid" />
          </div>
          <div className="col-md-6 order-md-1">
            <h2>Luxurious Accommodations</h2>
            <p>Relax in comfort with our world-class resorts and villas.</p>
          </div>
        </div>
        {/* Add more rows as needed */}
      </div>
    </div>
  );
};

export default Home;