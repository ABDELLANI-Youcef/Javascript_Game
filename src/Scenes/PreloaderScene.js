import blueBtn1 from '../assets/ui/blue-button1.png'
import blueBtn2 from '../assets/ui/blue-button2.png';
import background from '../assets/Uchiha_Hideout.png';
import hero from "../assets/test_hero.png";
import data from '../assets/sprites.json';
import coinImg from '../assets/coin.png'
import coinData from '../assets/coin.json';
import bombImg from '../assets/bomb.png'
import bombData from '../assets/bomb.json'
import fireImg from '../assets/fireball.png';
import fireData from '../assets/fireball.json';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    
    this.load.image('blueButton1', blueBtn1);
    this.load.image('blueButton2', blueBtn2);

    this.load.image('background', background);
    this.load.atlas('hero', hero, data);
    this.load.atlas('coin', coinImg, coinData);
    this.load.atlas('bomb', bombImg, bombData);
    this.load.atlas('fireball', fireImg, fireData);
  }

  create() {
    // this.scene.start('Game');
    this.scene.start('Title');
  }
};