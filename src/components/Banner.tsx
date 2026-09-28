import { useState } from "react";
import bankIllustration from "../../src/assets/images/hero-bank-illustration.svg"

interface Info {
  name: string;
  balance: number;
}

const Banner = ({ name, balance }: Info) => {
  const [balanceHidden, setBalanceHidden] = useState(true);

  const viewBalance = () => {
    const getElement = (q: string) => document.getElementById(q) as HTMLElement;
    
    if (!balanceHidden) {
      getElement("balance").textContent = `${balance}`;
      getElement("view-balance").textContent = `Hide Balance`;
      setBalanceHidden(true);
    } else {
      getElement("balance").textContent = `XXX`;
      getElement("view-balance").textContent = `View Balance`;
      setBalanceHidden(false);
    }
  };

  return (
    <div className="banner">
      <div className="w-[75%]">
        <h1>
          <span className="text-gray-300">Welcome Back, </span>
          <span id="user-name-value" className="block text-3xl font-bold">
            {name}
          </span>
        </h1>
        <p className="py-4">
          <span className="text-gray-300">Your Balance: </span>
          <span id="balance" className="block text-3xl font-bold">
            {balance}
          </span>
        </p>
        <button onClick={viewBalance}
          id="view-balance"
          className="bg-[#5B35D5] hover:opacity-90 active:opacity-80 px-3 py-2 rounded-md cursor-pointer"
        >
          Hide Balance
        </button>
      </div>
      <div className="w-1/4 flex items-center justify-center">
        <img
          className="w-full h-full"
          src={bankIllustration}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
