const Deposit = () => {
  return (
    <section id="deposit">
      <h1 className="font-black text-3xl sm:text-6xl text-[#2f8f34] text-center">
        Deposit
      </h1>
      <label
        className="block py-3 font-semibold text-[#17213D] text-2xl"
        htmlFor="tr-amount-add"
      >
        Enter amount you wish to deposit:
      </label>
      <input
        type="text"
        className="w-50 rounded-lg block p-2 focus:border-none border-2 border-[#2f8f34]"
        id="tr-amount-add"
        placeholder="Minimum of $100"
      />
      <button
        className="font-bold text-lg bg-[#2f8f34] my-3 px-4 py-2 rounded-2xl text-white cursor-pointer"
        id="add-btn"
      >
        Deposit Amount
      </button>
    </section>
  );
};

export default Deposit;
