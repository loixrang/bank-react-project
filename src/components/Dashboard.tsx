import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import { useEffect, useState } from "react";
import { type ActivePage, pageLabels } from "../data/types";
import Activity from "./Activity";

const Dashboard = () => {
  const location = useLocation();
  const segment = location.pathname.replace(/^\/\/?/, "");
  const activePage = (segment || "Home") as ActivePage;
  const [loginStatus] = useState(() =>
    JSON.parse(localStorage.getItem("loggedIn") || "false"),
  );
  const [username] = useState(
    () => localStorage.getItem("name") || "Empty",
  );
  const [balance, setBalance] = useState<number>(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? JSON.parse(savedBalance) : 0;
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus == false) {
      void navigate("/login");
      return;
    }
    document.title = `Loixrang Bank ${pageLabels[activePage] === "Home" ? "" : `${`- ${pageLabels[activePage]}`}`}`;
  }, [activePage, loginStatus, navigate]);
  return (
    <section id="home" className="">
      <Header activePage={activePage} />
      <main>
        <Banner name={username} balance={balance} />
        <div className="activity">
          {activePage === "Home" ? (
            <Activity />
          ) : (
            <Outlet context={[balance, setBalance]} />
          )}
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
