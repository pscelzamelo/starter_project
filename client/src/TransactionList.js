import React from "react";

import "./TransactionList.css";

function TransactionList({ amount }) {
  return (
    <div className="transaction-list-card">
      <div className="welcome-note">Hi, good luck with the assignment!</div>
      <div className="transaction-list-wrapper">Render the list here!</div>
    </div>
  );
}

export default TransactionList;
