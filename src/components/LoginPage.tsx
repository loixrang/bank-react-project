import { useEffect, useState } from "react";
import errorMessage from "./errorMessage";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const getInput = (q: string) =>
    document.getElementById(q) as HTMLInputElement;
  const [loginStatus, setLoginStatus] = useState(() =>
    JSON.parse(localStorage.getItem("loggedIn") || "false"),
  );
  const [username, setUsername] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus == true) {
      void navigate("/");
    }
  }, [loginStatus, navigate]);
  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d+$/.test(value)) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.outline = "2px solid red";
      e.target.style.border = "none";
    } else if (/^[A-Za-z]*$/.test(value)) {
      e.target.style.transform = "scale(1)";
      e.target.style.outline = "2px solid blue";
      e.target.style.border = "none";
      setUsername(value);
    }
  };
  const handleBalance = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      e.target.style.transform = "scale(1.05)";
      e.target.style.outline = "2px solid red";
      e.target.style.border = "none";
    } else {
      e.target.style.transform = "scale(1)";
      e.target.style.outline = "2px solid blue";
      e.target.style.border = "none";
      setBalance(Number(e.target.value));
    }
  };
  function login() {

    if (balance === 0 && username === "") {
      errorMessage(getInput("username"), getInput("balance"), "red", "red");
      getInput("username").focus();
      return;
    } else if (username === "") {
      errorMessage(getInput("username"), getInput("balance"), "red", "blue");
      getInput("username").focus();
      getInput("username").value = "";
      getInput("username").placeholder = "Enter a valid username";
    } else if (balance === 0 || balance >= 10000) {
      errorMessage(getInput("balance"), getInput("username"), "red", "blue");
      getInput("balance").focus();
      getInput("balance").value = "";
      getInput("balance").placeholder = "1 to 10,000";
    } else if (balance <= 10000) {
      let loggedIn = true;
      localStorage.setItem("loggedIn", JSON.stringify(loggedIn));
      localStorage.setItem("name", username);
      localStorage.setItem("balance", JSON.stringify(balance));
      setLoginStatus(loggedIn);
      void navigate("/");
    }
  }

  return (
    <section className="login-sec">
      <div className="login-div1">
        <div className="login-div2">
          <h1 className="login-div-h1">
            <img
              className="h-10 mr-2"
              src="src/assets/images/logo-mark-blue.svg"
              alt=""
            />
            <mark className="lg:mr-2 mr-1 text-[#5B35D5] bg-transparent">
              Loixrang
            </mark>
            Bank
          </h1>
          <h2 className="font-bold text-black text-xl lg:text-2xl lg:mt-2">
            Welcome Back!
          </h2>
          <p>Log in to access your account</p>
          <label className="font-bold text-black" htmlFor="username">
            Username
          </label>
          <input
            className="login-div-input"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsername}
          />
          <label className="font-bold text-black" htmlFor="balance-value">
            Balance
          </label>
          <input
            className="login-div-input"
            type="text"
            id="balance"
            placeholder="Between 0 - 10,000"
            value={balance}
            onChange={handleBalance}
          />
          <button id="login-btn" onClick={login} className="login-div-button">
            <img
              className="h-5"
              src="src/assets/images/icon-login-white.svg"
              alt=""
            />
            Log in
          </button>
        </div>
        <div className="login-div3">
          <img
            className="w-1/1.1"
            src="src/assets/images/hero-bank-illustration.svg"
            alt=""
          />
          <h2 className="font-bold text-white">Your money, secure with us</h2>
          <p className="font-light text-xs text-white">
            Experience fast, secure and reliable banking at your fingertips
          </p>
        </div>
      </div>
      <p className="hidden lg:block">
        &copy; 2026 Loixrang Bank. All rights reserved
      </p>
    </section>
  );
};

export default LoginPage;
