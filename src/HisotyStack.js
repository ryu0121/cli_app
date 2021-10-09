import CommandNode from "./CommandNode";

export default class HistoryStack {
  constructor() {
    this.head = null;
  }

  push(command) {
    const temp = this.head;
    this.head = new CommandNode(command);
    this.head.next = temp;
  }

  peek(){
      if(this.head == null) return null;
      return this.head.command;
  }

  pop(){
    const temp = this.head;
    if (temp == null) {
      return;
    }
    this.head = this.head.next;
    return temp.command;
  }
}