import { useState } from "react";

const Withdraw = () => {
  const [balance, setBalance] = useState(() => {
    const getBalance = localStorage.getItem("balance");
    return getBalance ? JSON.parse(getBalance) : 0
  })
  return (
    <section id="withdraw" className="">
      <h1 className="font-black mb-2 text-3xl sm:text-6xl text-[#1250d6] text-center">
        Withdraw
      </h1>
      <div className="grid gap-3 mb-2 w-full items-center sm:w-1/3">
        <label
          className="font-semibold text-[#17213D] text-2xl"
          htmlFor="wd-amount"
        >
          Amount:
        </label>
        <input
          className="rounded-lg block w-full p-1 focus:border-none border-2 border-[#1250d6]"
          type="text"
          id="wd-amount"
          placeholder="Enter amount"
        />
      </div>
      <div className="grid gap-3 w-full items-center sm:w-1/3">
        <label
          className="font-semibold text-[#17213D] text-2xl"
          htmlFor="wd-pin"
        >
          Pin:
        </label>
        <input
          className="rounded-lg p-1 w-full focus:border-none border-2 border-[#1250d6]"
          type="text"
          id="wd-pin"
          placeholder="Enter 4-digit PIN"
        />
      </div>
      <button
        className="font-bold text-lg w-full bg-[#1250d6] my-3 px-4 py-2 rounded-lg text-white cursor-pointer sm:w-1/5"
        id="wd-btn"
      >
        Withdraw
      </button>
    </section>
  );
};

export default Withdraw;
