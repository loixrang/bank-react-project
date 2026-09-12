import type { ActivePage } from "../types";
import { pageLabels } from "../types";
import { type HeaderProps } from "./Header";

const NavigateLinks = ({ activePage, setActivePage }: HeaderProps) => {
  const navItems = (page: ActivePage, label: string) => {
    return (
      <li
        className={activePage === page ? "active-link" : ""}
        onClick={() => {
          setActivePage(page);
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
