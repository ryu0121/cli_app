import AbstractCommand from "./AbstractCommand";

export default class Pwd extends AbstractCommand {
  constructor(filesystem){
    super(filesystem);
    this.argContraint = AbstractCommand.NO_ARG_CONSTRAINT;
  }

  execute(_args) {
    const currentDir = this.getCurrentDir_();
    return currentDir.getAbsolutePath();
  }
}