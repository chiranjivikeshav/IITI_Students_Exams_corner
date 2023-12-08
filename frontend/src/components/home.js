import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/auth">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default HomePage;
