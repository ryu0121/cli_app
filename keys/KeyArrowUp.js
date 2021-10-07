class KeyArrowUp extends AbstractKey {
  call() {
    let iterator = this.history.head;
    if(iterator != null){
      this.config.CLITextInput.value = iterator.data;
      if(this.history.head.next != null){
        tempLog.push(this.history.pop());
        count++;
      }
    }
  }
}