import styled from "./Detail.module.css";

export default function Detail() {
  return (
    <>
      <div className={styled.first}>
        <span className={styled.category}>전선-산업·정보</span>
        <span className={styled.grade}>3학점</span>
      </div>
      <div className={styled.content}>
        <div className={styled.line}>
          <span className={styled.title}>교과목명</span>
          <span className={styled.text}>산업정보시스템공학개론</span>
        </div>
        <div className={styled.line}>
          <span className={styled.title}>교수명</span>
          <span className={styled.text}>강창묵</span>
        </div>
        <div className={styled.line}>
          <span className={styled.title}>개설 학과</span>
          <span className={styled.text}>산업정보시스템공학과</span>
        </div>
        <div className={styled.line}>
          <span className={styled.title}>과목번호</span>
          <span className={styled.text}>2150652201</span>
        </div>
        <div className={styled.line}>
          <span className={styled.title}>개설학기</span>
          <span className={styled.text}>1학기</span>
        </div>
        <div className={styled.subject}>
          <div className={styled.title}>교과목 개요</div>
          <div className={styled.box}>
            산업공학에서 다루는 전반적인 내용에 대한 소개와 기초적인 이론을
            다룬다. 산업공학의 발달과정, 의의, 적용분야, 향후전망 등을 소개 하고
            기본적인 기법 및 관련 교과 등을 다루어 신입생들의 궁금증을 해소하고
            향후 학습진로에 도움을 준다.
          </div>
        </div>
        <div className={styled.line}>
          <span className={styled.title}>연관 SDGs</span>
          <span>
            <img width="40px" height="40px" src="image1.png"></img>
            <img width="40px" height="40px" src="image2.png"></img>
            <img width="40px" height="40px" src="image3.png"></img>
            <img width="40px" height="40px" src="image4.png"></img>
          </span>
        </div>
      </div>
    </>
  );
}
