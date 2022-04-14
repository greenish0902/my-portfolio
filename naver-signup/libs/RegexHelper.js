// for node.js
// const BadRequestException = require("./BadRequestException");

class RegexHelper {
  value(selector, msg) {
    const content = document.querySelector(selector).value;
    if (
      content == undefined ||
      content == null ||
      (typeof content == "string" && content.trim().length == 0)
    ) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  minLength(selector, len, msg) {
    this.value(selector, msg);
    let content = document.querySelector(selector).value;
    if (content.trim().length < len) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  maxLength(selector, len, msg) {
    this.value(selector, msg);
    const content = document.querySelector(selector).value;
    if (content.trim().length > len) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  range(selector, minVal, maxVal, msg) {
    this.value(selector, msg);
    let content = Number(document.querySelector(selector).value);
    if (content < minVal || content > maxVal) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);
    let src = document.querySelector(origin).value.trim();
    let dsc = document.querySelector(compare).value.trim();
    if (src != dsc) {
      throw new BadRequestException(msg, origin);
    }
    return true;
  }

  verify(selector, msg) {
    const code = document.querySelector(selector).value;
    const answer = "0000";
    if (code != answer) throw new BadRequestException(msg, selector);
    return true;
  }

  check(selector, msg) {
    const content = document.querySelectorAll(selector);
    const checkedItem = Array.from(content).filter((v) => v.checked);
    if (checkedItem.length == 0) {
      throw new BadRequestException(msg, selector);
    }
  }

  checkMin(selector, len, msg) {
    const content = document.querySelectorAll(selector);
    const checkedItem = Array.from(content).filter((v) => v.checked);
    if (checkedItem.length < len) {
      throw new BadRequestException(msg, selector);
    }
  }

  checkMax(selector, len, msg) {
    const content = document.querySelectorAll(selector);
    const checkedItem = Array.from(content).filter((v) => v.checked);
    if (checkedItem.length > len) {
      throw new BadRequestException(msg, selector);
    }
  }

  field(selector, msg, regexExpr) {
    this.value(selector, msg);
    const content = document.querySelector(selector).value;
    const src = content.trim();
    if (!regexExpr.test(src)) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  num(selector, msg) {
    return this.field(selector, msg, /^[0-9]*$/);
  }

  eng(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z]*$/);
  }

  kor(selector, msg) {
    return this.field(selector, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  korEng(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z가-힣]*$/);
  }

  korNum(selector, msg) {
    return this.field(selector, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  korWord(selector, msg) {
    return this.field(selector, msg, /^[가-힣]*$/);
  }

  engNum(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z0-9]*$/);
  }

  engNumSpecial(selector, msg) {
    return this.field(selector, msg, /^[a-zA-Z0-9-_]*$/g);
  }

  engNumAllSpecial(selector, msg) {
    return this.field(
      selector,
      msg,
      /^[a-zA-Z0-9!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]*$/g
    );
  }

  email(selector, msg) {
    return this.field(
      selector,
      msg,
      /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
    );
  }

  cellphone(selector, msg) {
    return this.field(
      selector,
      msg,
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    );
    // return this.field(selector, msg, /^01(?:0[1][6-9])(?:\d{3}|\d{4})\d{4}$/);
  }

  telephone(selector, msg) {
    return this.field(selector, msg, /^$\d{2,3}\d{3,4}\d{4}$/);
  }

  phone(selector, msg) {
    this.value(selector, msg);
    const content = document.querySelector(selector).value.trim();
    let check1 = /^01(?:0[1][6-9])(?:\d{3}|\d{4})\d{4}$/;
    let check2 = /^\d{2,3}\d{3,4}\d{4}$/;
    if (!check1.test(content) && !check2.test(content)) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }
}

// for node.js
// module.exports = new RegexHelper();
