export default class KeyArrowDown {
  call(cli) {
    const displayedCommand = cli.tempLog.peek();
    if (displayedCommand == null) {
      return;
    }
    cli.history.push(cli.tempLog.pop());
    cli.config.CLITextInput.value = cli.tempLog.peek();
  }
}