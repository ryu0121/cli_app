import KeyEnter from "./KeyEnter";
import KeyArrowUp from "./KeyArrowUp";
import KeyArrowDown from "./KeyArrowDown";

export default class AbstractKey {
  constructor(key) {
    this.key = this.selectKey(key);
  }

  // private method
  selectKey(key) {
    if (key =='Enter') {
      return new KeyEnter();
    }
    else if(key == 'ArrowUp'){
      return new KeyArrowUp();
    }
    else if (key == 'ArrowDown') {
      return new KeyArrowDown();
    }
  }
}
