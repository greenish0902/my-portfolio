import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  width: 100%;
  .option {
    font-size: 12px;
    color: rgb(147, 147, 147);
  }
  input::placeholder {
    color: rgb(162, 162, 162);
    text-align: ${(props) => props?.align};
  }
`;

const InputBox = ({
  label,
  name,
  type = "text",
  placeholder,
  option,
  align,
}) => {
  return (
    <BoxContainer align={align}>
      <label htmlFor={label}>{label}</label>
      {option && <span className="option">(선택)</span>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
      />
    </BoxContainer>
  );
};

export default InputBox;
