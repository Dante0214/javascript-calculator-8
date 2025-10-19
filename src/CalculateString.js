const calculateString = (text) => {
  //1. 입력이 빈 문자열인 경우 예외 처리
  if (!text || text.trim() === "") {
    return 0;
  }
  //2. 구분자 처리
  const numberStrings = text.replaceAll(":", ",").split(",");
  const totalSum = numberStrings.reduce((acc, str) => {
    const number = Number(str);
    if (isNaN(number)) {
      throw new Error("[ERROR] 유효한 숫자가 아닙니다.");
    }
    return acc + number;
  }, 0);
  return totalSum;
};
export default calculateString;
