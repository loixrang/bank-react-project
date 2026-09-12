import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Withdraw from "./components/functions/Withdraw";
import Transfer from "./components/functions/Transfer";
import Deposit from "./components/functions/Deposit";
import Recents from "./components/functions/History";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<Dashboard/>}>
          <Route path="withdraw" element={<Withdraw/>}/>
          <Route path="transfer" element={<Transfer/>}/>
          <Route path="deposit" element={<Deposit/>}/>
          <Route path="history" element={<Recents/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
