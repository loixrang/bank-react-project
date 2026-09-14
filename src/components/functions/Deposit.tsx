import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Deposit = () => {
  const [balance, setBalance] = useOutletContext<[number, React.Dispatch<React.SetStateAction<number>>]>();
  const [history, setHistory] = useState<string[]>(() => JSON.parse(localStorage.getItem("history") || "[]"))
  const [amount, setAmount] = useState<number>(0);
  const [message, setMessage] = useState("Enter amount you wish to deposit:");
  const activity: string[] = []
  const verify = () => {
    if (amount > 3000) {
      setMessage("Amount above 3,000")
      return
    } else if(amount < 100) {
      setMessage("Amount is below 100")
      return
    }
    const newBalance = balance + amount;
    setBalance(newBalance);
    localStorage.setItem("balance", JSON.stringify(newBalance));
    setAmount(0);
    setMessage(`Deposit of ${amount} successfull`)
    activity.push(`You deposited N${amount}`)
    setHistory(activity)
    localStorage.setItem("history", JSON.stringify(activity))
    console.log(activity)
    
  }

  const deposit = () => {
    verify()
    
  };
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setMessage("Enter a valid number");
    } else {
      setAmount(Number(e.target.value));
    }
  };
  return (
    <section id="deposit">
      <h1 className="font-black text-3xl sm:text-6xl text-[#2f8f34] text-center">
        Deposit
      </h1>
      <label
        className="block py-3 font-semibold text-[#17213D] text-2xl"
        htmlFor="tr-amount-add"
      >
        {message}
      </label>
      <input
        type="text"
        className="w-50 rounded-lg block p-2 focus:border-none border-2 border-[#2f8f34]"
        id="deposit"
        placeholder="Minimum of $100"
        value={amount}
        onChange={handleAmount}
      />
      <button
        className="font-bold text-lg bg-[#2f8f34] my-3 px-4 py-2 rounded-2xl text-white cursor-pointer"
        id="add-btn"
        onClick={deposit}
      >
        Deposit Amount
      </button>
    </section>
  );
};

export default Deposit;
