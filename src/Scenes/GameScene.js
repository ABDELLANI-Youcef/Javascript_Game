// import 'phaser';
// import logoImg from '../assets/flag-of-algeria-map.png';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
 
  preload () {
    // load images
    // this.load.image('logo', logoImg);
  }
 
  create () {
    // this.add.image(400, 300, 'logo');
    let background = this.add.image(400,256,'background');
    background.setScale(1.6);
  }
};