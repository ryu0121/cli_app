export default class AbstractFileSystemNode {
  constructor(parent, name) {
    this.name = name;
    this.updatedDate = new Date();
    this.parent = parent;
    this.next = null;
    this.prev = null;
  }

  getName(includedHiddenFile){
    if (includedHiddenFile) {
      return this.name;
    }
    return this.isHidden? "": this.name;
  }

  toString() {
    throw Error(`${Function.name} is not implemented.`);
  }

  printList(){
    throw Error(`${Function.name} is not implemented.`);
  }

  getCurrentDir_(){
    throw Error(`${Function.name} is not implemented.`);
  }

  copyDeeply(){
    throw Error(`${Function.name} is not implemented.`);
  }
}