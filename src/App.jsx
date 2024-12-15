import "./App.css";
import FirstPage from "./FirstPage.jsx";
import { useState, useEffect } from "react";
import Login from "./login.jsx";
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

  let now;
  if (state == "start") {
    now = <FirstPage />;
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

  useEffect(() => {
    setTimeout(() => {
      setState("login");
    }, 1500);
  }, []);

  return (
    <>
      <main>{now}</main>
    </>
  );
}

export default App;
