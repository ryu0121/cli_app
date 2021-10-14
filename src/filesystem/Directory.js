import AbstractFileSystemNode from "./AbstractFileSystemNode";
import LinkedList from "./LinkedList";

export default class Directory extends AbstractFileSystemNode {
  constructor(parent, name){
    super(parent, name);
    this.children = new LinkedList();
  }

  toString() {
    return this.name;
  }

  getCurrentDir_() {
    return this;
  }

  printList(includedHiddenFile) {
    let result = '';
    let iterator = this.children.head;
    while(iterator) {
      result += iterator.getName(includedHiddenFile) + ' ';
      iterator = iterator.next;
    }
    return result;
  }

  copyDeeply() {
    const copiedDir = new Directory(this.parent, this.fileName)
    copiedDir.updateDate = new Date();
    copiedDir.children = this.children.deepCopy()
    return copiedDir;
  }

  updateFileDate(fileName) {
    if(this.children.includes(fileName)){
      const file = this.children.getNode(fileName);
      file.updateDate = new Date();
      return;
    }
    this.children.append(new File(this, fileName));
  }

  deleteNode(name) {
    return this.children.delete(name);
  }

  getAbsolutePath() {
    let currentDir = this;
    let result = '';
    while(currentDir){
      result = `${currentDir.getName()}/${result}`;
      currentDir = currentDir.parent;
    }
    return result;
  }

  appendNode(node) {
    this.children.append(node);
  }

  getChildren() {
    return this.children;
  }

  getNodeUnderCurrentDir(node) {
    return this.children.getNode(node);
  }
}