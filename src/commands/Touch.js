import AbstractCommand from "./AbstractCommand";
import File from "../filesystem/File";

export default class Touch extends AbstractCommand {
  constructor(filesystem) {
    super(filesystem);
    this.argContraint = AbstractCommand.SINGLE_ARG_CONSTRAINT;
  }

  execute(args) {
    const fileName = args[0];
    const currentDirsChildren = this.getCurrentDirsChildren_();
    if (currentDirsChildren.includes(fileName)) {
      const file = currentDirsChildren.getNode(fileName);
      file.updatedDate = new Date();
    } else {
      currentDirsChildren.append(new File(this.getCurrentDir_(), fileName));
    }
  }
}