class AbstractKey {
  constructor(key) {
    this.key = this.selectKey(key);
  }

  // private method
  selectKey(key) {
    if (key =='Enter') {
      return KeyEnter.new();
    }
    else if(key == 'ArrowUp'){
      return KeyArrowUp.new();
    }
    else if(key == 'ArrowDown'){
      return KeyArrowDown.new();
    }
  }

  // abstract method
  call() {
    console.log('No Method Error');
  }
}