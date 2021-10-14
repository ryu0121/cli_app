import Controller from '../Controller';
import CommandLineParser from '../CommandLineParser';
import CommandLineValidator from '../CommandLineValidator';

export default class KeyEnter {
  execute(cli) {
    const inputValue = cli.getInputValue();
    if(inputValue === '') {
      Controller.appendEchoParagraph(cli);
    } else {
      const parsedCLIArray = CommandLineParser.execute(inputValue);
      if (parsedCLIArray.length !== 0) {
        cli.appendHistory(inputValue);
      }

      Controller.appendEchoParagraph(cli);
      cli.getTextInput().value = '';

      const validatorResponse = CommandLineValidator.execute(cli, parsedCLIArray);
      const resultMessage = this.calculateResultMessage_(validatorResponse, cli, parsedCLIArray);
      Controller.appendResultParagraph(cli.getOutputDiv(), validatorResponse.isValid, resultMessage);
    }
    cli.adjustTop();
  }

  calculateResultMessage_(validatorResponse, cli, parsedCLIArray) {
    if (validatorResponse.isValid === false) {
      return validatorResponse.errorMessage;
    } else {
      return cli.evaluateCLICommand(parsedCLIArray);
    }
  }
}