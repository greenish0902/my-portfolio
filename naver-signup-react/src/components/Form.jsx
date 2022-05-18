import React, { useState, useRef } from "react";
import styled from "styled-components";

import InputBox from "../components/InputBox";

import RegexHelper from "../libs/RegexHelper";

const InputBoxWrapper = styled.div`
  margin: 16px 0;
  .birthInfos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > * {
      width: 32%;
    }
  }
  .contactBox {
    display: flex;
    justify-content: space-around;
    .contactBtn {
      margin-left: 8px;
      width: 30%;
    }
  }
`;
const getRandomCode = () => {
  let rand = Math.floor(Math.random() * 10000).toString();
  while (rand.length < 4) rand = Math.floor(Math.random() * 10) + rand;
  return rand;
};
const Form = () => {
  const formRef = useRef({});
  const [visible, setVisible] = useState({
    id: false,
    password: false,
    passwordRe: false,
    name: false,
    birthYear: false,
    birthMonth: false,
    birthDay: false,
    gender: false,
    email: false,
    countryNum: false,
    contact: false,
    code: false,
  });
  const [info, setInfo] = useState({
    id: "",
    password: "",
    passwordRe: "",
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    gender: "",
    email: "",
    countryNum: "",
    contact: "",
    code: "init",
  });
  const [code, setCode] = useState("");
  const attach = (field, message) => {
    formRef.current[`${field.name}`].innerHTML = message;
  };
  const handleBlur = (event) => {
    const field = event.target;
    setVisible((visible) => ({ ...visible, [event.target.name]: true }));
    const regexHelper = new RegexHelper();
    try {
      // 필드명에 따른 정규표현식 프로세스 수행
      let errorMsg;
      switch (field.name) {
        case "id":
          regexHelper.value(field, "필수 정보입니다.");
          errorMsg =
            "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
          regexHelper.engNum(field, errorMsg);
          regexHelper.minLength(field, 5, errorMsg);
          regexHelper.maxLength(field, 20, errorMsg);
          regexHelper.engNumSpecial(field, errorMsg);
          break;
        case "password":
          regexHelper.value(field, "필수 정보입니다.");
          errorMsg = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
          regexHelper.minLength(field, 8, errorMsg);
          regexHelper.maxLength(field, 16, errorMsg);
          regexHelper.engNumAllSpecial(field, errorMsg);
          break;
        case "passwordRe":
          regexHelper.value(field, "필수 정보입니다.");
          regexHelper.compareTo(
            formRef.current.form[1],
            field,
            "비밀번호가 일치하지 않습니다."
          );
          break;
        case "name":
          regexHelper.value(field, "필수 정보입니다.");
          errorMsg =
            "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
          regexHelper.korEng(field, errorMsg);
          break;
        case "birthYear":
          regexHelper.value(field, "필수 정보입니다.");
          errorMsg = "태어난 년도 4자리를 정확하게 입력하세요.";
          let rangeErrorMsg = "정말이세요?";
          let currentYear = new Date().getFullYear();
          regexHelper.value(field, errorMsg);
          regexHelper.num(field, errorMsg);
          regexHelper.minLength(field, 4, errorMsg);
          regexHelper.maxLength(field, 4, errorMsg);
          regexHelper.range(
            field,
            currentYear - 500,
            currentYear,
            rangeErrorMsg
          );
          break;
        case "birthMonth":
          regexHelper.value(field, "태어난 월을 선택하세요.");
          break;
        case "birthDay":
          errorMsg = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
          regexHelper.value(field, errorMsg);
          regexHelper.maxLength(field, 2, errorMsg);
          regexHelper.range(field, 1, 31, "생년월일을 다시 확인해주세요.");
          break;
        case "gender":
          regexHelper.value(field, "필수 정보입니다.");
          break;
        case "email":
          regexHelper.email(field, "이메일 주소를 다시 확인해주세요.");
          break;
        case "contact":
          regexHelper.phone(field, "형식에 맞지 않는 번호입니다.");
          break;
        case "code":
          regexHelper.value(field, "인증이 필요합니다.");
          regexHelper.verify(field, code, "인증번호를 다시 확인해주세요.");
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      error.field.focus();
      setInfo((info) => ({
        ...info,
        [field.name]: "", // 잘못된 값을 입력했으므로 기존 값이 있어도 비우기 (색상 처리를 위한 상태값 변경)
      }));
      console.log("info.code", info.code);
      return attach(field, error.message);
    }
    // 정규표현식 검사결과 이상이 없으면 상태값으로 저장
    setInfo((info) => ({
      ...info,
      [field.name]: field.value,
    }));
    // 필드명에 따른 성공 멘트 출력
    switch (field.name) {
      case "id":
        return attach(field, "멋진 아이디네요!");
      case "code":
        return attach(field, "인증이 성공했습니다.");
      default:
        return attach(field, "");
    }
  };
  const handleCodeClick = () => {
    if (!info.contact) return;
    const newCode = getRandomCode();
    console.log("newCode", newCode);
    setCode(newCode);
    formRef.current.code.innerHTML =
      "인증번호를 발송했습니다.(유효시간 30분)<br/>인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. <br/>이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.";
    formRef.current.codeInput.disabled = false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} ref={(ref) => (formRef.current.form = ref)}>
      <InputBoxWrapper onBlur={handleBlur}>
        <InputBox label="아이디" name="id"></InputBox>
        <p
          ref={(ref) => (formRef.current.id = ref)}
          className={`regexMsg ${visible.id && "show"} ${
            info.id ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper onBlur={handleBlur}>
        <InputBox label="비밀번호" name="password" type="password"></InputBox>
        <p
          ref={(ref) => (formRef.current.password = ref)}
          className={`regexMsg ${visible.password && "show"} ${
            info.password ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper onBlur={handleBlur}>
        <InputBox
          label="비밀번호 재확인"
          name="passwordRe"
          type="password"
        ></InputBox>
        <p
          ref={(ref) => (formRef.current.passwordRe = ref)}
          className={`regexMsg ${visible.passwordRe && "show"} ${
            info.passwordRe ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper onBlur={handleBlur}>
        <InputBox label="이름" name="name"></InputBox>
        <p
          ref={(ref) => (formRef.current.name = ref)}
          className={`regexMsg ${visible.name && "show"} ${
            info.name ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper onBlur={handleBlur}>
        <label style={{ display: "block" }}>생년월일</label>
        <div className="birthInfos">
          <input name="birthYear" placeholder="년(4자)" />
          <select name="birthMonth" onFocus={handleBlur} onChange={handleBlur}>
            <option value="">월</option>
            {[...new Array(12)].map((_, index) => (
              <option value={index + 1} key={index}>
                {index + 1}
              </option>
            ))}
          </select>
          <input name="birthDay" placeholder="일" onFocus={handleBlur} />
        </div>
        <p
          ref={(ref) => {
            formRef.current.birthYear = ref;
            formRef.current.birthMonth = ref;
            formRef.current.birthDay = ref;
            return;
          }}
          className={`regexMsg ${
            (visible.birthYear || visible.birthMonth || visible.birthDay) &&
            "show"
          } ${
            info.birthYear && info.birthMonth && info.birthDay ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper>
        <label style={{ display: "block" }}>성별</label>
        <select name="gender" onChange={handleBlur}>
          <option value="">성별</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
          <option value="-">선택 안함</option>
        </select>
        <p
          ref={(ref) => (formRef.current.gender = ref)}
          className={`regexMsg ${visible.gender && "show"} ${
            info.gender ? "green" : "red"
          }`}
        >
          hello
        </p>
      </InputBoxWrapper>
      <InputBoxWrapper onBlur={handleBlur}>
        <InputBox
          label="본인 확인 이메일"
          name="email"
          placeholder="선택입력"
          option
        ></InputBox>
        <p
          ref={(ref) => (formRef.current.email = ref)}
          className={`regexMsg ${visible.email && "show"} ${
            info.email ? "green" : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <InputBoxWrapper>
        <label style={{ display: "block" }}>휴대전화</label>
        <select name="countryNum" onSelect={handleBlur}>
          <option value="korea">대한민국 +82</option>
          <option value="japan">일본 +81</option>
          <option value="china">중국 +86</option>
        </select>
        <div className="contactBox">
          <input
            name="contact"
            type="text"
            placeholder="전화번호 입력"
            onBlur={handleBlur}
          />
          <button onClick={handleCodeClick} className="contactBtn">
            인증번호 받기
          </button>
        </div>
        <input
          name="code"
          type="text"
          placeholder="인증번호를 입력하세요"
          disabled
          ref={(ref) => (formRef.current.codeInput = ref)}
          onBlur={handleBlur}
        />
        <p
          ref={(ref) => {
            formRef.current.contact = ref;
            formRef.current.code = ref;
            return;
          }}
          className={`regexMsg ${(visible.contact || visible.code) && "show"} ${
            info.contact ? (info.code !== "" ? "green" : "red") : "red"
          }`}
        ></p>
      </InputBoxWrapper>
      <button style={{ fontWeight: "bolder", fontSize: "16px" }}>
        가입하기
      </button>
    </form>
  );
};

export default Form;
