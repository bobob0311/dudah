import "./App.css";
import FirstPage from "./FirstPage.jsx";
import { useState, useEffect } from "react";
import LoginPage from "./login/LoginPage.jsx";
import SearchPage from "./search/SearchPage.jsx";
import DetailPage from "./detail/DetailPage.jsx";
import BackGround from "./component/backGround.jsx";
function App() {
  const [state, setState] = useState("start");
  const [isLogin, setIsLogin] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleDetail = () => {
    setIsDetail(true);
  };

  const handleTouch = () => {
    setState("Login");
  };

  let now;
  if (state == "start") {
    now = <FirstPage onTouch={handleTouch} />;
  } else {
    if (isLogin) {
      if (isDetail) {
        now = <DetailPage />;
      } else {
        now = <SearchPage onDetail={handleDetail} />;
      }
    } else {
      now = <LoginPage onLogin={handleLogin} />;
    }
  }

  return (
    <>
      <main>{now}</main>
    </>
  );
}

export default App;
