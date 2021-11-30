import React from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button';

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="sign-in">
        <Button title="Enter" />
      </Link>
    </div>
  );
};

export default Landing;
