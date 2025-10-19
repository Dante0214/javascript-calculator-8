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
    const customDelimiter = text.substring(
      SPLIT_PREFIX.length,
      delimiterEndIdx
    );
    numbersPart = text.substring(delimiterEndIdx + SPLIT_SUFFIX.length);
    numbersPart = numbersPart.replaceAll(customDelimiter, ",");
  }
  numbersPart = numbersPart.replaceAll(":", ",");

  const numbers = numbersPart.split(",").map((str) => {
    const number = Number(str);
    if (isNaN(number)) {
      throw new Error("[ERROR] 유효한 숫자가 아닙니다.");
    }
    if (number < 0) {
      throw new Error("[ERROR] 음수는 허용되지 않습니다.");
    }
    return number;
  });

  // 3. 합계 계산
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
export default calculateString;
