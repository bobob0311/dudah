import styled from "./ResultBox.module.css";

export default function ResultBox(props) {
  const { item, onDetail } = props;

  const handleClick = () => {
    onDetail();
    console("ResultBox");
  };

  return (
    <div className={styled.container}>
      <div className={styled.box}>
        <div>
          <span className={styled.title}>과목명</span>
          <span className={styled.text}>{item.subject}</span>
        </div>
        <div>
          <span className={styled.title}>교수명</span>
          <span className={styled.text}>{item.professor}</span>
        </div>
        <div>
          <span className={styled.category}>{item.category}</span>
          <span className={styled.grade}>{item.grade}</span>
        </div>
      </div>
      <div className={styled.buttonContainer}>
        <button onClick={handleClick} className={styled.detail}>
          세부정보>
        </button>
      </div>
    </div>
  );
}
