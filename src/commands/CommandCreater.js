import Cd from "./Cd";
import Ls from "./Ls";
import Mkdir from "./Mkdir";
import Pwd from "./Pwd";
import Touch from "./Touch";

export default class CommandCreater{
  static VALID_COMMANDS = Object.freeze({
    ls: Ls,
    mkdir: Mkdir,
    touch: Touch,
    pwd: Pwd,
    cd: Cd,
    // 今後拡張予定
    // move: Move,
    // copy: Copy,
    // rm: Rm,
    // cat: Cat,
  })

  constructor(filesystem) {
    this.commands = {};
    for (let command in CommandCreater.VALID_COMMANDS) {
      this.commands[command] = new CommandCreater.VALID_COMMANDS[command](filesystem);
    }
  }

  getCommand(command) {
    if (!this.commands[command]) throw Error(`Command Not Found ${command}`);

    return this.commands[command];
  }
}