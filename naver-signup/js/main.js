// * @filename    : main.js
// * @author      : 서소희 (greenish0902@gmail.com)
// * @description : 회원가입 폼 구현

let contactCheck = false;
let messageSent = false;
let result = new Array(9).fill(0);

const $ = (item) => document.querySelector(item);
const getItem = (str) => {
  const p = document.createElement("p");
  p.innerHTML = str;
  p.classList.add("inputMsg");
  return p;
};
const setMessage = (currentSelector, message = null, add = true) => {
  const parent = $(currentSelector).parentNode;
  const lastChild = parent.lastChild;
  if (lastChild.classList && lastChild.classList.contains("inputMsg")) {
    lastChild.innerText = message;
  } else {
    $(currentSelector).parentNode.appendChild(getItem(message));
  }
  if (add) parent.lastChild.classList.add("success");
  else parent.lastChild.classList.remove("success");
};

$("form").addEventListener("submit", (event) => {
  event.preventDefault();
});

$("#contact .code-btn").addEventListener("click", () => {
  if (!contactCheck) return;
  $("#contact .code-input").disabled = false;
  currentSelector = "#contact .contact";
  successMsg = `인증번호를 발송했습니다.(유효시간 30분)\n인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요. \n이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.`;
  setMessage(currentSelector, successMsg);
  messageSent = true;
});

$("form").addEventListener("change", (event) => {
  event.preventDefault();
  const regexHelper = new RegexHelper();
  let submit = false;
  try {
    // 01. #id
    if (event.target == $("#id input")) {
      let currentSelector = "#id input";
      let defaultMsg = "필수 정보입니다.";
      let errorMsg =
        "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
      let successMsg = "멋진 아이디네요!";
      let minLen = 5;
      let maxLen = 20;
      regexHelper.value(currentSelector, defaultMsg);
      regexHelper.minLength(currentSelector, minLen, errorMsg);
      regexHelper.maxLength(currentSelector, maxLen, errorMsg);
      regexHelper.engNumSpecial(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");
      result[1] = 1;
    }

    // 02. #pw
    if (event.target == $("#pw input")) {
      let currentSelector = "#pw input";
      let defaultMsg = "필수 정보입니다.";
      let errorMsg = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
      let minLen = 8;
      let maxLen = 16;
      let successMsg = "";
      regexHelper.value(currentSelector, defaultMsg);
      regexHelper.minLength(currentSelector, minLen, errorMsg);
      regexHelper.maxLength(currentSelector, maxLen, errorMsg);
      regexHelper.engNumAllSpecial(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(".pw-icon").classList.add("success");
      $(".pw-icon").classList.remove("err");
      $(currentSelector).classList.add("entered");
      result[2] = 1;
    }

    // 03. #pw_re
    if (event.target == $("#pw_re input")) {
      let currentSelector = "#pw_re input";
      let prevSelector = "#pw input";
      let defaultMsg = "필수 정보입니다.";
      let errorMsg = "비밀번호가 일치하지 않습니다.";
      let successMsg = "";
      regexHelper.value(currentSelector, defaultMsg);
      regexHelper.compareTo(currentSelector, prevSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(".pw_re-icon").classList.add("success");
      $(".pw_re-icon").classList.remove("err");
      $(currentSelector).classList.add("entered");
      result[3] = 1;
    }

    // 04. #name
    if (event.target == $("#name input")) {
      let currentSelector = "#name input";
      let errorMsg =
        "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
      let successMsg = "";
      regexHelper.korEng(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");
      result[4] = 1;
    }

    // 05. #birth
    if (
      event.target == $("#birth .year") ||
      event.target == $("#birth .month") ||
      event.target == $("#birth .day")
    ) {
      let currentSelector = "#birth .year";
      let errorMsg = "태어난 년도 4자리를 정확하게 입력하세요.";
      let rangeErrorMsg = "정말이세요?";
      let successMsg = "";
      let minLen = 4;
      let maxLen = 4;
      let maxVal = new Date().getFullYear();
      let minVal = maxVal - 500;
      regexHelper.value(currentSelector, errorMsg);
      regexHelper.num(currentSelector, errorMsg);
      regexHelper.minLength(currentSelector, minLen, errorMsg);
      regexHelper.maxLength(currentSelector, maxLen, errorMsg);
      regexHelper.range(currentSelector, minVal, maxVal, rangeErrorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");

      currentSelector = "#birth .month";
      errorMsg = "태어난 월을 선택하세요.";
      regexHelper.value(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");

      currentSelector = "#birth .day";
      errorMsg = "태어난 일(날짜) 2자리를 정확하게 입력하세요.";
      maxLen = 2;
      regexHelper.value(currentSelector, errorMsg);
      regexHelper.maxLength(currentSelector, maxLen, errorMsg);

      errorMsg = "생년월일을 다시 확인해주세요.";
      regexHelper.range(currentSelector, 1, 31, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");
      result[5] = 1;
    }

    // 06. #gender
    if (event.target == $("#gender select")) {
      let currentSelector = "#gender select";
      let errorMsg = "필수 정보입니다.";
      let successMsg = "";
      regexHelper.value(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");
      result[6] = 1;
    }

    // 07. #email
    if (event.target == $("#email input")) {
      let currentSelector = "#email input";
      let errorMsg = "이메일 주소를 다시 확인해주세요.";
      let successMsg = "";
      regexHelper.email(currentSelector, errorMsg);
      setMessage(currentSelector, successMsg);
      $(currentSelector).classList.add("entered");
      result[7] = 1;
    }

    // 08. #contact
    if (
      event.target == $("#contact .country-number") ||
      event.target == $("#contact .contact") ||
      event.target == $("#contact .code-input")
    ) {
      let currentSelector = "#contact .country-number";
      if ($(currentSelector).value != "korea") throw new Error();

      currentSelector = "#contact .contact";
      let defaultMsg = "형식에 맞지 않는 번호입니다.";
      let successMsg = "";
      regexHelper.cellphone(currentSelector, defaultMsg);
      setMessage(currentSelector, successMsg);
      contactCheck = true;

      if (messageSent) {
        currentSelector = "#contact .code-input";
        errorMsg = "인증번호를 다시 확인해주세요.";
        successMsg = "인증이 성공했습니다.";
        regexHelper.verify(currentSelector, errorMsg);
        setMessage(currentSelector, successMsg);
        $(".code-icon").classList.remove("hidden");
        $(".code-icon").classList.remove("err");
        $(".code-icon").classList.add("success");
      }
      $(currentSelector).classList.add("entered");
      result[8] = 1;
    }
    submit = result.reduce((mul, elem, idx) => {
      if (idx == 0) return mul;
      if (idx == 7) return mul;
      return mul * elem;
    }, 1);
  } catch (error) {
    if (!error.selector) return;
    if (error.selector.includes("pw")) {
      $(error.selector).nextSibling.nextSibling.classList.add("err");
      $(error.selector).nextSibling.nextSibling.classList.remove("success");
    }
    $(error.selector).classList.remove("entered");
    if (error.selector.includes(".code-input")) {
      $(".code-icon").classList.add("err");
      $(".code-icon").classList.remove("success");
      $(".code-icon").classList.remove("hidden");
    }
    setMessage(error.selector, error.message, false);
    $(error.selector).focus();
    return;
  }
  if (submit) {
    $(".signup_btn").addEventListener("click", (e) => {
      alert("Submitted");
    });
  }
});
