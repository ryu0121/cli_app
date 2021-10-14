export default class AbstractCommand {
  static NO_ARG_CONSTRAINT = 'noArg';
  static SINGLE_ARG_CONSTRAINT = 'singleArg';
  static DOUBLE_ARG_CONSTRAINT = 'doubleArg';

  constructor(filesystem){
    this.filesystem = filesystem;
    this.argContraint = null;
  }

  execute () {
    throw Error(`${Function.name} is not implemented.`);
  }

  getCurrentDirsChildren_() {
    const currentDir = this.getCurrentDir_();
    return currentDir.getChildren();
  }

  getCurrentDir_() {
    return this.filesystem.currentDir;
  }

  getRootDir_() {
    return this.filesystem.root;
  }

  getDirName_() {
    const currentDir = this.getCurrentDir_();
    return currentDir.getName();
  }

  traverse_(path) {
    if(this.isAbsolute_(path)) {
      return this.filesystem.traverse(this.getRootDir_(), path);
    } else {
      return this.filesystem.traverse(this.getCurrentDir_(), path);
    }
  }

  isAbsolute_(path) {
    if (path.length === 0) {
      return;
    }
    if (path[0] === '') {
      path.shift();
      return true;
    } else {
      return false;
    }
  }

  getPathArr_(pathString) {
    return pathString.split('/');
  }
}