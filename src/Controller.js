export default class Controller {
  static init(cli) {
    const cliTextInput = cli.config.CLITextInput;
    cliTextInput.addEventListener('keyup', (event) => {
      cli.executeKey(event);
    });
  }

  static appendEchoParagraph(cli) {
    const parentDiv = cli.getOutputDiv();
    const inputEle = cli.getTextInput();
    const command = cli.commandCreater.getCommand('pwd');
    parentDiv.innerHTML+=
      `<p class="m-0">
          <span style='color:green'>root</span>
          <span style='color:magenta'>@</span>
          <span style='color:blue'>ryu</span>
          : ${command.execute()} ${inputEle.value}
      </p>`;
  }

  static appendResultParagraph(parentDiv, isValid, message) {
    if (message === undefined) {
      return;
    }

    let promptName;
    let promptColor;
    if (isValid) {
      promptName = 'FileSystem';
      promptColor = 'turquoise';
    } else {
      promptName = 'FileSystemError';
      promptColor = 'warn';
    }
    parentDiv.innerHTML+=
      `<p class="m-0 ${promptColor}">
          ${promptName}: ${message}
      </p>`;
  }
}
