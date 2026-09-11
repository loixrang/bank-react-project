const Transfer = () => {
  return (
    <section id="transfer" className="hidden">
      <h1 className="font-black text-3xl sm:text-6xl text-[#5B35D5] text-center">
        Transfer
      </h1>
      <div className="grid md:grid-cols-2">
        <div className="sm:p-0 p-0">
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
          >
            <option value="FCMB">FCMB</option>
            <option value="WEMA">WEMA</option>
            <option value="Fidelity">Fidelity</option>
            <option value="Access">Access</option>
          </select>
          <button
            className="font-bold text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer"
            id="check-act"
          >
            Check
          </button>
          <button
            id="start-transfer"
            className="font-bold text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer hidden"
          >
            Next
          </button>
        </div>
        <div id="tr-screen" className="hidden sm:p-5 p-0">
          <label
            className="block py-3 font-semibold text-[#17213D] text-2xl"
            htmlFor="tr-amount"
          >
            Enter amount you wish to transfer:
          </label>
          <input
            className="w-50 rounded-lg block p-2 focus:border-none border-2 border-[#5B35D5]"
            type="text"
            id="tr-amount"
          />
          <button
            className="font-bold text-lg bg-[#5B35D5] my-3 px-4 py-2 rounded-lg text-white cursor-pointer"
            id="tr-btn"
          >
            Transfer
          </button>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
