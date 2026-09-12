import { useNavigate } from "react-router-dom";
import type { ActivePage } from "../types";
import { pageLabels } from "../types";
import { type HeaderProps } from "./Header";

const NavigateLinks = ({ activePage }: HeaderProps) => {
  const navigate = useNavigate();
  const navItems = (page: ActivePage, label: string) => {
    return (
      <li
        className={activePage === page ? "active-link" : ""}
        onClick={() => {
          navigate(page === "Home" ? "/" : `/${page}`)
        }}
      >
        {label}
      </li>
    );
  };
  return (
    <>
      {navItems("Home", pageLabels.Home)}
      {navItems("Withdraw", pageLabels.Withdraw)}
      {navItems("Transfer", pageLabels.Transfer)}
      {navItems("Deposit", pageLabels.Deposit)}
      {navItems("History", pageLabels.History)}
      <li className="logout">Logout</li>
    </>
  );
};

export default NavigateLinks;
