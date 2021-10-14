import HistoryStack from './commandHistory/HisotyStack';
import TempLogStack from './commandHistory/TempLogStack';
import CommandCreater from './commands/CommandCreater';
import FileSystem from './filesystem/FileSystem';
import KeyStrategy from './keys/KeyStrategy';

export default class Cli {
  constructor() {
    this.config = {
      CLIOutputDiv: document.getElementById('CLIOutputDiv'),
      CLITextInput: document.getElementById('CLITextInput')
    };
    this.filesystem = new FileSystem();
    this.commandCreater = new CommandCreater(this.filesystem);
    this.history = new HistoryStack();
    this.tempLog = new TempLogStack();
  }

  executeKey = (event) => {
    if (event.key != 'Enter' && event.key != 'ArrowUp' && event.key != 'ArrowDown') {
      return;
    }
    const strategy = new KeyStrategy(event.key);
    strategy.key.execute(this);
  }

  evaluateCLICommand(tokens) {
    const command = this.commandCreater.getCommand(tokens[0]);
    return command.execute(tokens.slice(1));
  }

  adjustTop() {
    this.config.CLIOutputDiv.scrollTop = this.config.CLIOutputDiv.scrollHeight;
  }

  appendHistory(command) {
    this.history.push(command);
  }

  getTextInput() {
    return this.config.CLITextInput;
  }

  getInputValue() {
    return this.getTextInput().value;
  }

  getOutputDiv() {
    return this.config.CLIOutputDiv;
  }
}