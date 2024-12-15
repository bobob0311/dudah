import { useState, useRef } from "react";
import ResultBox from "./ResultBox";
import styled from "./SearchPage.module.css";

const DATA = [
  {
    subject: "4차산업혁명과 ICT 융합섬유",
    professor: "김주용",
    category: "전공-스마트웨어러블학과",
    grade: "3학점",
  },
  {
    subject: "4차산업혁명과 창업",
    professor: "전삼현",
    category: "교선",
    grade: "3학점",
  },
  {
    subject: "메타버스 기술과 산업",
    professor: "김동호",
    category: "전공-IT경영",
    grade: "3학점",
  },
  {
    subject: "산업정보시스템공학개론",
    professor: "강창묵",
    category: "전선-산업·정보",
    grade: "3학점",
  },
  {
    subject: "산업기술정책",
    professor: "권남호",
    category: "전선-행정학부",
    grade: "3학점",
  },
];

export default function SearchPage(props) {
  const { onDetail } = props;

  const [data, setData] = useState([]);
  const searchData = useRef("");

  const handleChange = (e) => {
    searchData.current = e.target.value;
  };

  const handleClick = () => {
    if (searchData.current === "") {
      setData([]);
      return;
    }
    const filteredData = DATA.filter((item) =>
      item.subject.includes(searchData.current)
    );
    setData(filteredData);
  };

  const handleDetailClick = () => {
    onDetail();
  };
  return (
    <div className={styled.page}>
      <div className={styled.textContainer}>
        <p className={styled.para}>
          <span className={styled.blue}>경영학부</span>
        </p>
        <p className={styled.para}>
          <span className={styled.blue}>박숭실</span>님,
        </p>
        <p className={styled.welcome}>환영해요!</p>
      </div>
      <div className={styled.container}>
        <div className={styled.search}>
          <img
            className={styled.image}
            src="Search.png"
            width="25px"
            height="25px"
          />
          <input
            ref={searchData}
            onChange={handleChange}
            className={styled.input}
            type="text"
          ></input>
          <button onClick={handleClick} className={styled.btn}>
            찾아보기
          </button>
        </div>
        {data.length == 0 ? (
          <div className={styled.noSearch}>
            <div className={styled.main}>SsuDG</div>
            <div className={styled.gray}>과목 또는 교수명으로</div>
            <div className={styled.gray}>검색해보세요!</div>
          </div>
        ) : (
          data.map((item) => (
            <ResultBox
              onDetail={handleDetailClick}
              key={item.subject}
              item={item}
            />
          ))
        )}
      </div>
    </div>
  );
}
