import React from 'react'
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main>
      <div style={{ margin: "200px" }}>
        <h1>Habteab Fake Store API</h1>
        <Link to="/products" className="btn hero-btn" style={{backgroundColor:"blueViolet"}}>
          shop now
        </Link>
      </div>

    </main>
  );
}

export default HomePage
