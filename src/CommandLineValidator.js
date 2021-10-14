import AbstractCommand from "./commands/AbstractCommand";
import CommandCreater from "./commands/CommandCreater";

export default class CommandLineValidator {
  static execute(cli, tokens) {
    const commandString = tokens[0];
    const validatorResponse = CommandLineValidator.universalValidation_(commandString);
    if (validatorResponse.errorMessage !== '') {
      return validatorResponse;
    }

    const command = cli.commandCreater.getCommand(commandString);
    const args = tokens.slice(1);
    if (command.argContraint == AbstractCommand.NO_ARG_CONSTRAINT) {
      return CommandLineValidator.noArgValidation_(commandString, args);
    } else if (command.argContraint == AbstractCommand.SINGLE_ARG_CONSTRAINT) {
      return CommandLineValidator.singleArgValidation_(commandString, args);
    }
  }

  static universalValidation_(command) {
    if (command in CommandCreater.VALID_COMMANDS) {
      return { 'isValid': true, 'errorMessage': '' };
    }
    return { 'isValid': false, errorMessage: 'Only supports the following commands < touch,mkdir,ls,cd,pwd,print,setContent,rm,mv,cp >' };
  }

  static noArgValidation_(command, args) {
    if (command != "pwd" && command != "ls") {
      return { 'isValid': false, 'errorMessage': `command not found: ${command}` };
    }

    if (args.length !== 0) {
      return { 'isValid': false, 'errorMessage': `invalid arguments: ${command} can't have arguments` };
    }
    return { 'isValid': true, 'errorMessage': '' };
  }

  static singleArgValidation_(command, args) {
    if (args.length !== 1) {
      return { 'isValid': false, 'errorMessage': `invalid arguments: ${command} can only have one argument` };
    }
    return { 'isValid': true, 'errorMessage': '' };
  }
}
