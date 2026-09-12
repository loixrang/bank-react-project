import { useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Deposit from "./functions/Deposit";
import History from "./functions/History";
import Transfer from "./functions/Transfer";
import Withdraw from "./functions/Withdraw";
import Header from "./Header";
import { useEffect, useState } from "react";
import type { ActivePage } from "../types";

const Dashboard = () => {
  const [activePage, setActivePage] = useState<ActivePage>("Home")
  const [loginStatus, setLoginStatus] = useState(() =>
    JSON.parse(localStorage.getItem("loggedIn") || "false"),
  );
  const [username, setUserName] = useState(() => localStorage.getItem("name") || "Empty")
  const [balance, setBalance] = useState(() => JSON.parse(localStorage.getItem("balance") || "No Balance"))
  const navigate = useNavigate();
  useEffect(()=> {
    if (loginStatus == false) {
      navigate("/")
      return
    }
    document.title = `Loixrang Bank - ${activePage}`
  }, [activePage])
  return (
    <section id="home" className="">
      <Header activePage={activePage} setActivePage={setActivePage}/>
      <main>
        <Banner name={username} balance={balance} />
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
          <Deposit/>
          <Transfer/>
          <Withdraw/>
          <History/>
          <p className="font-semibold text-lg hidden pl-3" id="message"></p>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
