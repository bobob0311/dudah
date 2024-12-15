import { useState, useRef, useEffect } from "react";
import styled from "./InputBox.module.css";

export default function InputBox(props) {
  const { title, text, validFn, changeFn, inputName } = props;
  const timeoutIdRef = useRef(null);

  const [enteredData, setEnteredData] = useState("");

  function changeHandler(event) {
    const { value } = event.target;

    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      setEnteredData(value);
    }, 200);
  }

  useEffect(() => {
    const validResult = validFn(enteredData);
    console.log(validResult);

    const data = {
      value: enteredData,
      valid: validResult,
    };
    changeFn(data, inputName);
  }, [enteredData]);

  return (
    <div className={styled.container}>
      <div className={styled.title}>{title}</div>
      <input
        type={inputName === "password" ? "password" : "text"}
        onChange={(e) => changeHandler(e)}
        className={styled.input}
        placeholder={text}
      />
    </div>
  );
}
