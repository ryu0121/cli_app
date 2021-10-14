import AbstractCommand from "./AbstractCommand";

export default class Ls extends AbstractCommand {
  constructor(fileSystem) {
    super(fileSystem);
    this.argContraint = AbstractCommand.NO_ARG_CONSTRAINT;
  }

  execute(args) {
    const includedHiddenFile = args.length != 0 && args[0] == '-a'
    const currentDir = this.getCurrentDir_();
    return currentDir.printList(includedHiddenFile);
  }
}