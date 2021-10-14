export default class KeyArrowUp {
  execute(cli) {
    const previousCommand = cli.history.peek();
    if(previousCommand == null){
      return;
    }
    cli.config.CLITextInput.value = previousCommand;
    cli.tempLog.push(cli.history.pop());
  }
}