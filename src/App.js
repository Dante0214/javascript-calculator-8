import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const input = await Console.readLineAsync(
        "덧셈할 문자열을 입력해 주세요.\n"
      );
      if (input.trim() === "") {
        throw new Error("[ERROR] 빈 값이 입력되었습니다.");
      }
      Console.print(`문자열 : ${input}`);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}
export default App;
