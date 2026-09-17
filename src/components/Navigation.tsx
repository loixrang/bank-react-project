import { useNavigate } from "react-router-dom";
import type { ActivePage } from "../data/types";
import { pageLabels } from "../data/types";
import { type HeaderProps } from "./Header";

const NavigateLinks = ({ activePage }: HeaderProps) => {
  const navigate = useNavigate();
  const navItems = (page: ActivePage, label: string) => {
    return (
      <li
        className={activePage === page ? "active-link" : ""}
        onClick={() => {
          void navigate(page === "Home" ? "/" : `/${page}`);
        }}
      >
        {label}
      </li>
    );
  };
  const logout = () => {
    localStorage.clear();
    void navigate("/login");
  };
  return (
    <>
      {navItems("Home", pageLabels.Home)}
      {navItems("Withdraw", pageLabels.Withdraw)}
      {navItems("Transfer", pageLabels.Transfer)}
      {navItems("Deposit", pageLabels.Deposit)}
      {navItems("History", pageLabels.History)}
      <li className="logout" onClick={logout}>Logout</li>
    </>
  );
};

export default NavigateLinks;
