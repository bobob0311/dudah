import styled from "./MainImg.module.css";

export default function MainImg() {
  return (
    <div className={styled.imgContainer}>
      <img className={styled.mainImg} src="realMain.png" />
    </div>
  );
}
