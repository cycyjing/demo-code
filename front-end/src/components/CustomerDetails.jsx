import React from "react";

const CustomerDetails = ({ customer }) => {
  return (
    <div>
      <h1>{customer.name}</h1>
      <h4>Email:</h4>
      {customer.email}
      <h4>Phone:</h4>
      {customer.phone}
      <h4>Status</h4>
      {customer.status}
    </div>
  );
};

export default CustomerDetails;
