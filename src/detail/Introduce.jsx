import styled from "./Introduce.module.css";
import IntroduceBox from "./IntroduceBox";

const DATA = [
  {
    imageUrl: "image1",
    text: "양질의 일자리와 경제 성장",
    category: "SDGs 8",
    color: "#A21942",
  },
  {
    imageUrl: "image2",
    text: "산업, 혁신과 사회기반시설",
    category: "SDGs 9",
    color: "#F26B3C",
  },
  {
    imageUrl: "image3",
    text: "책임감있는 소비와 생산",
    category: "SDGs 12",
    color: "#CF8D2A",
  },
  {
    imageUrl: "image4",
    text: "양질의 일자리와 경제 성장",
    category: "SDGs 16",
    color: "#00689D",
  },
];

export default function Introduce() {
  return (
    <>
      <p className={styled.text}>
        <span className={styled.blue}>산업정보시스템공학개론</span>과 연관된
        SDGs 지표예요!
      </p>
      <p className={styled.text}>
        각 지표의 토글을 통해 더 자세한 정보를 볼 수 있어요 :)
      </p>

      {DATA.map((item) => (
        <IntroduceBox key={item.imageUrl} data={item} />
      ))}
    </>
  );
}
