import { useEffect, useState } from "react";

const Recents = () => {
  const [transactions, setTransactions] = useState<string[]>([]);

  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem("history") || "[]",
    );

    if (Array.isArray(savedTransactions)) {
      setTransactions(savedTransactions);
    }
  }, []);

  return (
    <section id="history" className="p-5">
      <h1 className="font-black text-2xl sm:text-6xl w-full text-[#17213D] text-center">
        Transactions
      </h1>

      <ul id="list">
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>

      {transactions.length < 1 && (
        <p className="font-semibold text-center text-lg">
          You have no recent activity
        </p>
      )}
    </section>
  );
};

export default Recents;
