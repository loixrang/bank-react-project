import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import { useEffect, useState } from "react";
import { type ActivePage, pageLabels } from "../types";
import Activity from "./Activity";

const Dashboard = () => {
  const location = useLocation();
  const segment = location.pathname.replace(/^\/\/?/, "")
  const activePage = (segment || "Home") as ActivePage;
  const [loginStatus, setLoginStatus] = useState(() =>
    JSON.parse(localStorage.getItem("loggedIn") || "false"),
  );
  const [username, setUserName] = useState(
    () => localStorage.getItem("name") || "Empty",
  );
  const [balance, setBalance] = useState(() =>
    JSON.parse(localStorage.getItem("balance") || "No Balance"),
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus == false) {
      navigate("/");
      return;
    }
    document.title = `Loixrang Bank - ${pageLabels[activePage]}`;
  }, [activePage, loginStatus]);
  return (
    <section id="home" className="">
      <Header activePage={activePage}/>
      <main>
        <Banner name={username} balance={balance} />
        <div className="activity">
          {activePage === "Home" ? <Activity/> : <Outlet />}
          <p className="font-semibold text-lg hidden pl-3" id="message"></p>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
