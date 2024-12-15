import { useState } from "react";
import styled from "./FirstPage.module.css";
import MainImg from "./component/MainImg";
import BackGround from "./component/backGround";

export default function FisrtPage(props) {
  const { onTouch } = props;
  const handleClick = () => {
    onTouch();
  };
  return (
    <>
      <div onClick={handleClick} className={styled.touch}></div>
      <BackGround />
      <div className={styled.box}>
        <MainImg />
        <div>
          <h1 className={styled.mainTitle}>SsuDG</h1>
          <p className={styled.text}>SSU 강의로 SDGs 달성하기의 시작</p>
        </div>
      </div>
    </>
  );
}
