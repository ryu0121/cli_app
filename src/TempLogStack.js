import CommandNode from "./CommandNode";

export default class TempLogStack {
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
      let temp = this.head;
      this.head = this.head.next;
      return temp.command;
  }
}