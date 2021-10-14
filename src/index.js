import "./style.css";
import Cli from './Cli';
import Controller from "./Controller";

const cli = new Cli();
Controller.init(cli);