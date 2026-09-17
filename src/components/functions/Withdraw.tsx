import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const Withdraw = () => {
  const [balance, setBalance] =
    useOutletContext<[number, React.Dispatch<React.SetStateAction<number>>]>();
  const [recent, setHistory] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("history") || "[]"),
  );
  const [amount, setAmount] = useState(0);
  const [pin, setPin] = useState(0);
  const [message, setMessage] = useState("");
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.transform = "scale(1)";
      e.target.style.border = "2px solid blue";
      setAmount(Number(e.target.value));
    }
  };
  const handlePin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.transform = "scale(1)";
      e.target.style.border = "2px solid blue";
      setPin(Number(e.target.value));
    }
  };
  const withdraw = () => {
    if (amount < 100) {
      setMessage("Enter a number above 100");
    } else if (pin < 1000) {
      setMessage("Enter a 4 digit pin");
    } else if (amount > balance) {
      setMessage(`Insufficient funds`);
    } else if (amount >= 100 && amount <= balance && pin >= 1000 && pin <= 9999) {
      setMessage(`Withdrawal of N${amount} is succesful`);
      const newBalance = balance - amount;
      const activity: string[] = [...recent, `You withdrawed N${amount}`];
      setAmount(0);
      setPin(0);
      setBalance(newBalance)
      localStorage.setItem("history", JSON.stringify(activity));
      localStorage.setItem("balance", JSON.stringify(newBalance));
      setHistory(activity);
    }
  };
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
          className="rounded-lg block w-full p-1 focus:outline-none border-2 border-[#1250d6]"
          type="text"
          id="wd-amount"
          placeholder="Enter amount"
          onChange={handleAmount}
          value={amount}
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
          className="rounded-lg p-1 w-full focus:outline-none border-2 border-[#1250d6]"
          type="text"
          id="wd-pin"
          placeholder="Enter 4-digit PIN"
          value={pin}
          onChange={handlePin}
        />
      </div>
      <button
        className="font-bold text-lg w-full bg-[#1250d6] my-3 px-4 py-2 rounded-lg text-white cursor-pointer sm:w-1/5"
        id="wd-btn"
        onClick={withdraw}
      >
        Withdraw
      </button>
      <p className="font-semibold text-lg">{message}</p>
    </section>
  );
};

export default Withdraw;
