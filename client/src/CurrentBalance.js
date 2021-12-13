import React from "react";

import "./CurrentBalance.css";

function CurrentBalance({ amount }) {
  return (
    <div className="current-balance-card">
      <div className="current-balance-wrapper">Current Balance</div>
      <div className="balance-wrapper">${amount}</div>
    </div>
  );
}

export default CurrentBalance;
