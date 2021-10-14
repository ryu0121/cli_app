export default class CommandLineParser {
  static execute(CLIInputString) {
    const tokenArray = CLIInputString.trim().split(' ');
    return tokenArray;
  }
}