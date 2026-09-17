import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Persons } from "../../data/users";

const Transfer = () => {
  const [balance, setBalance] =
    useOutletContext<[number, React.Dispatch<React.SetStateAction<number>>]>();
  const [recent, setHistory] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem("history") || "[]"),
  );
  const [checkPass, setCheckPass] = useState(false);
  const [transferScreen, setTransferScreen] = useState(true);
  const [message, setMessage] = useState("");
  const [bankName, setBankName] = useState<string>("FCMB");
  const [accountNumber, setAccountNumber] = useState<number>(0);
  const handleAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.border = "2px solid red";
    } else {
      e.target.style.transform = "scale(1)";
      e.target.style.border = "2px solid blue";
      setAccountNumber(Number(e.target.value));
    }
  };
  const handleBankName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBankName(e.target.value);
  };
  const checkDetails = () => {
    for (const details of Object.values(Persons)) {
      if (
        accountNumber === details.accountNumber &&
        bankName === details.bank
      ) {
        setMessage(details.fullname);
        setCheckPass(true);
        return;
      } else {
        setMessage("Account doesn't exist");
      }
    }
  };
  const next = () => {
    setTransferScreen(false);
    setAccountNumber(0);
    setMessage("");
  };
  const handleTransfer = () => {
    if (accountNumber < 100) {
      setMessage(`Amount below N100`);
      setAccountNumber(0);
      return;
    } else if (balance < accountNumber) {
      setMessage(`Number above balance`);
      setAccountNumber(0);
    } else if (accountNumber <= balance && balance >= 100) {
      const newBalance = balance - accountNumber;
      setBalance(newBalance);
      localStorage.setItem("balance", JSON.stringify(newBalance));
      setMessage(`Your transfer of N${accountNumber} has been succesfull`);
      let activity: string[] = [
        ...recent,
        `Your transferred N${accountNumber}`,
      ];
      localStorage.setItem("history", JSON.stringify(activity));
      setHistory(activity);
      setTransferScreen(true);
      setAccountNumber(0);
      setMessage("");
      setCheckPass(false);
    }
  };
  return (
    <section id="transfer" className="">
      <h1 className="font-black text-3xl sm:text-6xl text-[#5B35D5] text-center">
        Transfer
      </h1>
      <div className="grid md:grid-cols-2">
        <div className={`sm:p-0 p-0  ${transferScreen ? `` : `hidden`}`}>
          <label
            className="block py-3 font-semibold text-[#17213D] text-2xl"
            htmlFor="act-num"
          >
            Enter account number:
          </label>
          <input
            className="sm:w-50 w-full rounded-lg block p-1 sm:p-2 focus:outline-none border-2 border-[#5B35D5]"
            name="act-num"
            id="act-num"
            type="text"
            value={accountNumber}
            onChange={handleAccountNumber}
          />
          <label
            className="block py-3 font-semibold text-[#17213D] text-2xl"
            htmlFor=""
          >
            Select Bank:
          </label>
          <select
            className="sm:w-50 w-full text-lg rounded-lg block p-2 focus:outline-none border-2 border-[#5B35D5]"
            id="bank"
            onChange={handleBankName}
          >
            <option value="FCMB">FCMB</option>
            <option value="WEMA">WEMA</option>
            <option value="Fidelity">Fidelity</option>
            <option value="Access">Access</option>
          </select>
          <button
            className={`font-bold text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer`}
            id="check-act"
            onClick={checkDetails}
          >
            Check
          </button>
          <button
            id="start-transfer"
            onClick={next}
            className={`font-bold ml-3 text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer ${checkPass ? `` : `hidden`}`}
          >
            Next
          </button>
        </div>
        <div
          id="tr-screen"
          className={`${!transferScreen ? `` : `hidden`} sm:p-5 p-0`}
        >
          <label
            className="block py-3 font-semibold text-[#17213D] text-2xl"
            htmlFor="tr-amount"
          >
            Enter amount:
          </label>
          <input
            className="w-40 rounded-lg block p-2 focus:outline-none border-2 border-[#5B35D5]"
            type="text"
            id="tr-amount"
            value={accountNumber}
            onChange={handleAccountNumber}
          />
          <button
            className="font-bold text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer"
            id="tr-btn"
            onClick={handleTransfer}
          >
            Transfer
          </button>
        </div>
        <p className="font-semibold text-lg">{message}</p>
      </div>
    </section>
  );
};

export default Transfer;
