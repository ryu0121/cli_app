export default class HistoryNode {
  constructor(command) {
    this.command = command;
    this.next = null;
  }
}