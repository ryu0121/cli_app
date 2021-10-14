import AbstractCommand from "./AbstractCommand";
import Directory from "../filesystem/Directory";

export default class Mkdir extends AbstractCommand {
  constructor(filesystem) {
    super(filesystem);
    this.argContraint = AbstractCommand.SINGLE_ARG_CONSTRAINT;
  }

  execute(args) {
    const dirName = args[0];
    const currentDirsChildren = this.getCurrentDirsChildren_();
    if (currentDirsChildren.includes(dirName)) {
      return `There is already ${dirName} in this directory.`;
    } else {
      currentDirsChildren.append(new Directory(this.getCurrentDir_(), dirName));
    }
  }
}