import AbstractKey from './keys/AbstractKey';
import FileSystem from './FileSystem';
import HistoryStack from './HisotyStack';
import TempLogStack from './TempLogStack';

export default class Cli {
  constructor() {
    this.config = {
      CLIOutputDiv: document.getElementById('CLIOutputDiv'),
      CLITextInput: document.getElementById('CLITextInput')
    };
    this.filesystem = new FileSystem();
    this.history = new HistoryStack();
    this.tempLog = new TempLogStack();
    this.key = null;
  }

  implementKey = (event) => {
    if (event.key != 'Enter' && event.key != 'ArrowUp' && event.key != 'ArrowDown') {
      return;
    }
    const strategy = new AbstractKey(event.key);
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