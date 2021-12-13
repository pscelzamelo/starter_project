import React from "react";

import "./App.css";
import CurrentBalance from "./CurrentBalance";
import TransactionList from "./TransactionList";
import { transactionList } from "./constants";

/*
 * Given a list of transactions, this function calculates the sum total spent
 * (i.e. the current balance on the card).
 *
 * @param transactions: list of transactions for card
 * @returns total: float
 *
 * Note: we need to subtract the value as each transaction amount is represented as negative
 */
const getTotal = transactions => {
  return transactions.reduce((total, t) => total - parseFloat(t.amount), 0);
};

function App() {
  return (
    <div>
      <div className="color-splash" />
      <div className="app-container">
        <div className="petal-logo" />
        <CurrentBalance amount={getTotal(transactionList)} />
        <TransactionList />
      </div>
    </div>
  );
}

export default App;
