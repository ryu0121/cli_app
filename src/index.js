import "./style.css";
import Cli from './Cli';

const cli = new Cli();
const cliTextInput = cli.config.CLITextInput;
cliTextInput.addEventListener('keyup', (event) => {
  cli.implementKey(event);
});