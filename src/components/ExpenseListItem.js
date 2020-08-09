// Render description, amount, createdAt value

import React from 'react';
import { Link } from "react-router-dom";

export default ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: {amount}</p>
    <p>Created @: {createdAt}</p>
  </div>
);

