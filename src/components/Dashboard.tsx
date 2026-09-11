const Dashboard = () => {
  return (
    <section id="home" className="">
      <div className="sm:h-30 h-25">
        <header className="heading grid grid-cols-1">
          <h1 className="font-bold text-2xl">
            <mark className="text-purple-700 bg-transparent">Loixrang</mark>{" "}
            Bank
          </h1>
          <nav className="sm:hidden grid grid-rows-1 relative items-center justify-center gap-2">
            <button
              id="hamMenu"
              className="cursor-pointer py-1 flex gap-1 items-center justify-center"
            >
              <span id="chosen-activity" className=""></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <ul
              id="mobile-menu"
              className="hidden flex flex-col gap-2 absolute bg-white/90 w-30 drop-shadow-2xl p-3 right-0 rounded-xl top-15"
            >
              <li className="active-link homePage">Home</li>
              <li className="withdraw-op">Withdraw</li>
              <li className="transfer-op">Transfer</li>
              <li className="deposit-op">Deposit</li>
              <li className="my-1 transHistory">History</li>
              <li className="logout">Logout</li>
            </ul>
          </nav>
          <ul className="hidden sm:flex gap-5">
            <li className="active-link homePage">Home</li>
            <li className="withdraw-op">Withdraw</li>
            <li className="transfer-op">Transfer</li>
            <li className="deposit-op">Deposit</li>
            <li className="transHistory">History</li>
            <li className="logout">Logout</li>
          </ul>
        </header>
      </div>
      <main>
        <div className="banner">
          <div className="w-[75%]">
            <h1>
              <span className="text-gray-300">Welcome Back, </span>
              <span
                id="user-name-value"
                className="block text-3xl font-bold"
              ></span>
            </h1>
            <p className="py-4">
              <span className="text-gray-300">Your Balance: </span>
              <span id="balance" className="block text-3xl font-bold"></span>
            </p>
            <button
              id="view-balance"
              className="bg-[#5B35D5] hover:opacity-90 active:opacity-80 px-3 py-2 rounded-md cursor-pointer"
            >
              Hide balance
            </button>
          </div>
          <div className="w-1/4 flex items-center justify-center">
            <img
              className="w-full h-full"
              src="src/assets/images/hero-bank-illustration.svg"
              alt=""
            />
          </div>
        </div>
        <div className="hidden interact text-[#17213D]">
          <h1 className="text-center font-bold text-2xl">
            What would you like to do?
          </h1>
          <p className="text-center font-medium">
            Choose a service to get started
          </p>
        </div>
        <div className="activity">
          <h1 id="holder-text" className="font-bold text-2xl text-center">
            Select an activity from the menu
          </h1>
          <section id="deposit" className="hidden">
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
          <section id="withdraw" className="hidden">
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
          <section id="history" className="hidden p-5">
            <h1 className="font-black text-2xl sm:text-6xl w-full text-[#17213D] text-center">
              Transactions
            </h1>
            <ul id="list"></ul>
          </section>
          <p className="font-semibold text-lg hidden pl-3" id="message"></p>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
