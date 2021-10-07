class Cli {
  constructor() {
    this.config = {
      CLIOutputDiv: document.getElementById('CLIOutputDiv'),
      CLITextInput: document.getElementById('CLITextInput')
    };
    this.filesystem = new FileSystem();
    this.history = new HistoryStack();
    this.tempLog = [];
    this.count = 0;
    this.key = null;
  }

  implementKey = (event) => {
    const strategy = AbstractKey.new(event.key);
    strategy.key.call(this);
  }

  evaluatedResultsStringFromParsedCLIArray(parsedArray) {
    return 'response from each command';
  }

  adjustTop() {
    this.config.CLIOutputDiv.scrollTop = this.config.CLIOutputDiv.scrollHeight;
  }

  addHistory(command) {
    this.history.push(command);
  }
}

const cli = new Cli();
const cliTextInput = cli.config.CLITextInput;
cliTextInput.addEventListener('keyup', (event) => {
  cli.implementKey(event);
});