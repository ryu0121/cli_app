class CommandLineParser {
  call(CLIInputString) {
    const tokenArray = CLIInputString.trim().split(' ');
    return tokenArray;
  }
}