import AbstractFileSystemNode from "./AbstractFileSystemNode";

export default class File extends AbstractFileSystemNode {
  constructor(parent, name){
    super(parent, name)
    this.isHidden = this.name.startsWith(".");
  }

  toString() {
    return `File Name: ${this.name}  Updated At: ${this.updatedDate.toLocaleDateString()}`;
  }

  getCurrentDir_() {
    throw Error(`${this.name} is not directory.`);
  }

  printList() {
    return this.name;
  }

  copyDeeply(){
    const copiedFile = new File(this.parent, this.name);
    copiedFile.updatedDate = new Date();
    return copiedFile;
  }
}