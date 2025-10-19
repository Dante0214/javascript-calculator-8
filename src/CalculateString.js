import { ERROR_MESSAGES } from "./constants.js";

const calculateString = (text) => {
  const SPLIT_PREFIX = "//";
  const SPLIT_SUFFIX = "\\n";
  //1. 입력이 빈 문자열인 경우 예외 처리
  if (!text || text.trim() === "") {
    return 0;
  }

  let numbersPart = text;

  //2. 구분자 처리(커스텀 구분자로 변경하는것이 아닌 기본 구분자에 커스텀 구분자 추가 처리)
  if (text.startsWith(SPLIT_PREFIX)) {
    const delimiterEndIdx = text.indexOf(SPLIT_SUFFIX);
    if (delimiterEndIdx === -1) {
      throw new Error(ERROR_MESSAGES.INVALID_CUSTOM_DELIMITER_FORMAT);
    }
    const customDelimiter = text.substring(
      SPLIT_PREFIX.length,
      delimiterEndIdx
    );
    if (customDelimiter === "") {
      throw new Error(ERROR_MESSAGES.BLANK_CUSTOM_DELIMITER);
    }
    numbersPart = text.substring(delimiterEndIdx + SPLIT_SUFFIX.length);
    numbersPart = numbersPart.replaceAll(customDelimiter, ",");
  }
  numbersPart = numbersPart.replaceAll(":", ",");

  const numbers = numbersPart.split(",").map((str) => {
    const number = Number(str);
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
    }
    if (number < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
    return number;
  });

  // 3. 합계 계산
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
export default calculateString;
