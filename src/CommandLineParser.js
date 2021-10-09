export default class CommandLineParser {
  static call(CLIInputString) {
    const tokenArray = CLIInputString.trim().split(' ');
    return tokenArray;
  }
}