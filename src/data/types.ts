export type ActivePage =
  | "Home"
  | "Withdraw"
  | "Transfer"
  | "Deposit"
  | "History";
export const pageLabels: Record<ActivePage, string> = {
  Home: "Home",
  Withdraw: "Withdraw",
  Transfer: "Transfer",
  Deposit: "Deposit",
  History: "History"
}