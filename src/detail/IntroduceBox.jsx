import { useState } from "react";
import styled from "./IntroduceBox.module.css";

export default function IntroduceBox(props) {
  const { data } = props;
  const { imageUrl, text, category, color } = data;
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <div className={styled.bigContainer}>
      <div className={styled.container}>
        <div>
          <img
            className={styled.image}
            width="60px"
            src={`${imageUrl}.png`}
          ></img>
        </div>
        <div className={styled.box}>
          <div
            className={styled.category}
            style={{
              backgroundColor: color,
            }}
          >
            {category}
          </div>
          <h2 className={styled.text}>{text}</h2>
        </div>
        <button
          className={styled.btn}
          onClick={handleClick}
          style={{
            transform: isClick ? "rotate(180deg)" : "rotate(0deg)", // 회전 각도 적용
            transition: "transform 0.3s ease", // 애니메이션 효과
          }}
        >
          <img width="20px" height="20px" src="down.png"></img>
        </button>
      </div>
      {isClick && (
        <div>
          <div className={styled.extendBox}>
            <div className={styled.bold}>
              #경제성장 #질좋은일자리 #노동권보호 #청년층고용 #노동생산성
            </div>
            <div className={styled.bold}>
              #임금인상정책 #청년실업률 #장애인고용확대
            </div>
            <div className={styled.bold}>#소득불평등 #지역경제회복력</div>
          </div>
          <div className={styled.textBox}>
            SDGs 8번은 <span className={styled.blue}>지속적인 경제성장</span>과
            <span className={styled.blue}>양질의 일자리 증진</span>을 목표로
            합니다. 이는 국가별 상황에 맞추어
            <span className={styled.blue}>경제성장을 지속화</span>하고 다양화,
            <span className={styled.blue}>기술 향상 및 혁신</span>을 통해 경제적
            생산성을 높이는 것을 목표로 합니다. 또한, 생산적 활동, 기업가 정신,
            창조와 혁신을 지원하는 정책을 장려하고, 2030년까지 소비와 생산에서
            자원 효율을 획기적으로 개선하기를 기대합니다. 이와 더불어 모든
            남녀에 동일 노동에 대한 동일 보수 달성, 모든 형태의 아동 노동 및
            강제노동 근절, 안전한 근로환경 조성 및 일자리 창출, 금융 서비스
            강화를 위해 노력해야 합니다.
          </div>
        </div>
      )}
    </div>
  );
}
