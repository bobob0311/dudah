import { useState } from "react";
import styled from "./DetailPage.module.css";
import Detail from "./Detail";
import Introduce from "./Introduce";

export default function DetailPage() {
  const [check, setCheck] = useState(true);

  const handleDetailClick = () => {
    setCheck((prev) => true);
  };

  const handleIntroduceClick = () => {
    setCheck((prev) => false);
  };
  return (
    <>
      <div className={styled.page}>
        <div className={styled.textContainer}>
          <p className={styled.para}>
            <span className={styled.blue}>산업정보시스템공학개론</span>의
          </p>
          <p className={styled.para2}>
            연관
            <span className={styled.blue}>SDGs</span>는?
          </p>
        </div>

        <div className={styled.container}>
          <div className={styled.top}>
            <button
              onClick={handleDetailClick}
              className={check ? styled.activeBtn : styled.btn}
            >
              교과목 개요
            </button>
            <button
              onClick={handleIntroduceClick}
              className={check ? styled.btn : styled.activeBtn}
            >
              SDGs 소개
            </button>
          </div>
          <div className={styled.box}>{check ? <Detail /> : <Introduce />}</div>
        </div>
      </div>
    </>
  );
}
