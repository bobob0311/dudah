import styled from "./LoginPage.module.css";
import { useEffect, useState } from "react";
import MainImg from "../component/MainImg";
import InputBox from "./InputBox";
import BackGround from "../component/backGround";

export default function LoginPage(props) {
  const { onLogin } = props;

  const [isValid, setIsValid] = useState(false);
  const [enteredData, setEnteredData] = useState({
    id: { value: "", valid: false },
    password: { value: "", valid: false },
  });

  const up = (data, name) => {
    setEnteredData((prev) => ({
      ...prev,
      [name]: data,
    }));
  };

  const isEmpty = (value) => value.trim() !== "";

  useEffect(() => {
    if (enteredData.id.valid && enteredData.password.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [enteredData]);

  const handleClick = (e) => {
    if (e.target.className.includes("active")) {
      onLogin();
    }
  };

  return (
    <>
      <BackGround />
      <div className={styled.page}>
        <MainImg />
        <div className={styled.temp}></div>
        <InputBox
          changeFn={(data, name) => up(data, name)}
          validFn={isEmpty}
          title="학번"
          text="ex)20211111"
          inputName="id"
        />
        <InputBox
          changeFn={(data, name) => up(data, name)}
          validFn={isEmpty}
          title="비밀번호"
          text="ex)abcdef1234"
          inputName="password"
        />
        <button
          className={isValid ? styled.active : styled.loginButton}
          onClick={(e) => handleClick(e)}
        >
          로그인
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="290"
          height="2"
          viewBox="0 0 290 2"
          fill="none"
        >
          <path d="M1 1H289" stroke="#DDDDDD" stroke-linecap="round" />
        </svg>
        <div className={styled.linkContainer}>
          <a className={styled.left}>계정이 없으신가요?</a>
          <a className={styled.right}>가입하기</a>
        </div>
      </div>
    </>
  );
}
