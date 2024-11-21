'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <footer className="bg-white text-dark py-4 mt-auto" style={{ height: 'auto' }}>
    <div className="container text-center">
      {/* Key Features Section */}
      <div className="row">
        <div className="col-md-3 mb-3">
          <i className="fas fa-home fa-2x text-success" />
          <h6 className="mt-2">Personalized Home</h6>
          <p className="small">Tailored matches for your preferences. Find your ideal home.</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="fas fa-list-alt fa-2x text-success" />
          <h6 className="mt-2">Home Listings</h6>
          <p className="small">Browse verified property listings. Sign up to get started.</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="fas fa-user-shield fa-2x text-success" />
          <h6 className="mt-2">Verified Listings</h6>
          <p className="small">Safe and accurate property data.</p>
        </div>
        <div className="col-md-3 mb-3">
          <i className="fas fa-handshake fa-2x text-success" />
          <h6 className="mt-2">Expert Guidance</h6>
          <p className="small">Support from real estate professionals. Connect and close deals.</p>
        </div>
      </div>
      <div className="mt-3">
        <p className="small">&copy; 2024 HouseFinders.inc All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
