export default class Controller {
  static appendEchoParagraph(parentDiv, inputEle, filesystem) {
    parentDiv.innerHTML+=
      `<p class="m-0">
          <span style='color:green'>root</span>
          <span style='color:magenta'>@</span>
          <span style='color:blue'>ryu</span>
          ${filesystem.pwd()}: ${inputEle.value}
      </p>`;

    return;
  }

  static appendResultParagraph(parentDiv, isValid, message) {
    let promptName = '';
    let promptColor = '';
    if (isValid){
        promptName = 'FileSystem';
        promptColor = 'turquoise';
    }
    else{
        promptName = 'FileSystemError';
        promptColor = 'red';
    }
    parentDiv.innerHTML+=
            `<p class="m-0 ${promptColor}">
                ${promptName}: ${message}
            </p>`;
    return;
  }
}

// touch [fileOrDirName]: 指定した名前のファイルをカレントディレクトリに作成します。ファイルまたはディレクトリが既に存在する場合は、ノードのdateModified値を現在の日付に更新します。
// mkDir [dirName]: 与えられた名前でカレントディレクトリに新しいディレクトリを作成します。
// ls [?fileOrDirName]: ターゲットノードがディレクトリの場合、ターゲットディレクトリノードの直下の全てのファイルリストを出力します。ターゲットノードがファイルの場合、与えられたノードのみ出力します。引数が存在しない場合、カレントディレクトリの全てのファイルリストを出力します。
// cd [..| dirName]: 現在の作業ディレクトリを指定されたものに変更します。引数が'..'の場合はカレントディレクトリを親ディレクトリに、そうでない場合はカレントディレクトリをカレントディレクトリ内のdirNameに変更します。
// pwd []: 現在の作業ディレクトリのパスを出力します。
// print [fileName]: カレントディレクトリ内の指定されたfileNameの.content値（ファイルの情報）を表示します。
// setContent [fileName]: 与えられたfileNameの.content値をカレントディレクトリに設定します。
// rm [fileOrDirName]: 指定したfileOrDirNameのファイルまたはディレクトリをカレントディレクトリから削除します。