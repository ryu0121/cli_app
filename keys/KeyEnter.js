class KeyEnter extends AbstractKey {
  call(cli) {
    if(cli.config.CLITextInput.value != '') {
      const parsedCLIArray = CommandLineParser.call(cli.config.CLITextInput.value);
      if (parsedCLIArray.length != 0) {
        cli.addHistory(cli.config.CLITextInput.value);
      }

      Controller.appendEchoParagraph(cli.config.CLIOutputDiv, cli.config.CLITextInput, cli.filesystem);
      cli.config.CLITextInput.value = '';

      // const validatorResponse = Validator.call(cli.filesystem, parsedCLIArray);
      // if (validatorResponse.isValid == false) {
      // Controller.appendResultParagraph(cli.config.CLIOutputDiv, false, validatorResponse.errorMessage);
      // } else {
        Controller.appendResultParagraph(cli.config.CLIOutputDiv, true, cli.evaluatedResultsStringFromParsedCLIArray(parsedCLIArray));
      // }
      cli.adjustTop();
    } else {
      Controller.appendEchoParagraph(cli.config.CLIOutputDiv, cli.config.CLITextInput, cli.filesystem);
      cli.adjustTop();
    }
  }
}