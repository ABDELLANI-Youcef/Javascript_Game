// import 'phaser';
import flagLogo from '../assets/flag-of-algeria-map.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', flagLogo);
  }

  create() {
    this.scene.start('Preloader');
    
  }
};