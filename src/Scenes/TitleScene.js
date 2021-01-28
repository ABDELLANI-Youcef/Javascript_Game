import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    document.querySelector('#username').style.display = 'none';
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');
    this.scoreButton = new Button(this, config.width / 2, config.height / 2, 'blueButton1', 'blueButton2', 'Scores', 'Score');
  }
}