import Directory from "./Directory";

export default class FileSystem {
  constructor(){
    this.root = new Directory(null, 'root');
    this.currentDir = this.root;
  }

  traverse(currentDir, path) {
    if (currentDir === null) {
      return { directory: null, errorMessage: 'No such file or directory' };
    }
    if (path.length === 0) {
      return { directory: currentDir, errorMessage: '' };
    }
    return this.traverse(currentDir.getNodeUnderCurrentDir(path.shift()), path);
  }
}

