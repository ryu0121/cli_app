class KeyArrowDown extends AbstractKey {
  call() {
    if (tempLog.length != 0) this.history.push(tempLog.pop());
    let iterator = this.history.head;
    if(iterator != null){
      if(count != 0){
        this.config.CLITextInput.value = iterator.data;
        count--;
      }
      else this.config.CLITextInput.value = '';
    }
  }
}