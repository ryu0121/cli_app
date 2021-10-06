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
  }

  implementCommand = (event) => {
    if (event.key =='Enter') {
      if(this.config.CLITextInput.value != '') {
        const parsedCLIArray = CommandLineParser.call(this.config.CLITextInput.value);
        if (parsedCLIArray.length != 0) {
          this.history.push(this.config.CLITextInput.value);
        }

        Controller.appendEchoParagraph(this.config.CLIOutputDiv, this.filesystem);
        this.config.CLITextInput.value = '';

        const validatorResponse = Validator.call(this.filesystem, parsedCLIArray);
        if (validatorResponse.isValid == false) {
          Controller.appendResultParagraph(this.config.CLIOutputDiv, false, validatorResponse['errorMessage']);
        } else {
          Controller.appendResultParagraph(this.config.CLIOutputDiv, true, this.evaluatedResultsStringFromParsedCLIArray(parsedCLIArray));
        }
        this.adjustTop();
      } else {
        Controller.appendEchoParagraph(this.config.CLIOutputDiv, this.filesystem);
        this.adjustTop();
      }
    }
    else if(event.key == 'ArrowUp'){
      let iterator = this.history.head;
      if(iterator != null){
        this.config.CLITextInput.value = iterator.data;
        if(this.history.head.next != null){
          tempLog.push(this.history.pop());
          count++;
        }
      }
    }
    else if(event.key == 'ArrowDown'){
      if(tempLog.length != 0) this.history.push(tempLog.pop())
      let iterator = this.history.head;
      if(iterator != null){
        if(count != 0){
          this.config.CLITextInput.value = iterator.data;
          count--;
        }
        else this.config.CLITextInput.value = '';
      }
    }
  }

  evaluatedResultsStringFromParsedCLIArray(parsedArray) {

  }

  adjustTop() {
    this.config.CLIOutputDiv.scrollTop = this.config.CLIOutputDiv.scrollHeight;
  }
}

const cli = new Cli();
const cliTextInput = cli.config.CLITextInput;
cliTextInput.addEventListener('keyup', (event) => {
  cli.implementCommand(event);
});