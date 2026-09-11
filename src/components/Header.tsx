const Header = () => {
  return (
    <div className="sm:h-30 h-25">
      <header className="heading grid grid-cols-1">
        <h1 className="font-bold text-2xl">
          <mark className="text-purple-700 bg-transparent">Loixrang</mark> Bank
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
  );
};

export default Header;
