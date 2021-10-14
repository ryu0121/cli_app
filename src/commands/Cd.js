import AbstractCommand from "./AbstractCommand";

export default class Cd extends AbstractCommand {
  constructor(filesystem) {
    super(filesystem);
    this.argContraint = AbstractCommand.SINGLE_ARG_CONSTRAINT;
  }

  execute(args) {
    const path = this.getPathArr_(args[0]);
    if (path[0] === '..' && this.getDirName_() === 'root') {
      return 'root directory does not have a parent directory';
    }
    if (path.length === 1 && path[0] === '..') {
      this.filesystem.currentDir = this.getParentDir_();
      return;
    }

    if (path[0] === '.') {
      path = path.slice(1);
    }
    const traverseResponse = this.traverse_(path);
    if (traverseResponse.errorMessage !== '') {
      return traverseResponse.errorMessage;
    }
    this.filesystem.currentDir = traverseResponse.directory;
  }

  getParentDir_() {
    return this.getCurrentDir_().parent;
  }
}