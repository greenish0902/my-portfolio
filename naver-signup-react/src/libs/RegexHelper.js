/**
 * @filename : RegexHelper.js
 * @author : greenish0902@gmail.com
 * @description : 정규표현식 검사 수행
 */

import BadRequestException from "../exceptions/BadRequestException";

class RegexHelper {
  /**
   *
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT> 요소의 DOM 객체
   * @param {string} msg    값이 없을 경우 표시할 메시지 내용
   * @returns
   */
  value(field, msg) {
    const content = field.value;
    if (
      content === undefined ||
      content === null ||
      (typeof content === "string" && content.trim().length === 0)
    ) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  /**
   *
   * @param {HTMLElement} field 검사할 대상에 대한 <INPUT> 요소의 DOM 객체
   * @param {int} len   최대 글자수
   * @param {string} msg    값이 없을 경우 표시될 메시지
   * @returns
   */
  maxLength(field, len, msg) {
    this.value(field, msg);
    const content = field.value;
    if (content.trim().length > len) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  minLength(field, len, msg) {
    this.value(field, msg);
    const content = field.value;
    if (content.trim().legth < len) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);
    let src = origin.value.trim();
    let dsc = compare.value.trim();
    if (src !== dsc) {
      throw new BadRequestException(msg, origin);
    }
    return true;
  }

  check(field, msg) {
    const checkedItem = Array.from(field).filter((v) => v.checked);
    if (checkedItem.length === 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  checkMin(field, len, msg) {
    const checkedItem = Array.from(field).filter((v) => v.checked);
    if (checkedItem.length < len) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  checkMax(field, len, msg) {
    const checkedItem = Array.from(field).filter((v) => v.checked);
    if (checkedItem.length > len) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  field(field, msg, regexExpr) {
    this.value(field, msg);
    if (!regexExpr.test(field.value.trim())) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  num(field, msg) {
    return this.field(field, msg, /^[0-9]*$/);
  }

  eng(field, msg) {
    return this.field(field, msg, /^[a-zA-Z]*$/);
  }

  kor(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  engNum(field, msg) {
    return this.field(field, msg, /^[a-zA-Z0-9]*$/);
  }

  korNum(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  korEng(field, msg) {
    return this.field(field, msg, /^[a-zA-Z가-힣]*$/);
  }

  email(field, msg) {
    return this.field(
      field,
      msg,
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-={0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    );
  }

  engNumSpecial(field, msg) {
    return this.field(field, msg, /^[a-zA-Z0-9-_]*$/g);
  }

  engNumAllSpecial(field, msg) {
    return this.field(
      field,
      msg,
      /^[a-zA-Z0-9!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]*$/g
    );
  }

  range(field, minVal, maxVal, msg) {
    this.value(field, msg);
    let content = Number(field.value);
    if (content < minVal || content > maxVal) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  verify(field, code = "0000", msg) {
    const value = field.value;
    if (value != code) throw new BadRequestException(msg, field);
    return true;
  }

  cellphone(field, msg) {
    return this.field(field, msg, /^01(?:0[1][6-9])(?:\d{3}|\d{4})\d{4}$/);
  }

  telephone(field, msg) {
    return this.field(field, msg, /^$\d{2,3}\d{3,4}\d{4}$/);
  }

  phone(field, msg) {
    this.value(field, msg);
    const content = field.value.trim();
    let check1 = /^01(?:0[1][6-9])(?:\d{3}|\d{4})\d{4}$/;
    let check2 = /^\d{2,3}\d{3,4}\d{4}$/;
    if (!check1.test(content) && !check2.test(content)) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }
}

export default RegexHelper;
