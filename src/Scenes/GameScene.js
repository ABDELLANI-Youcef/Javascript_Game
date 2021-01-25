// import 'phaser';
// import logoImg from '../assets/flag-of-algeria-map.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    // this.load.image('logo', logoImg);
  }

  create() {
    // this.add.image(400, 300, 'logo');

    let background = this.add.image(400, 256, 'background');
    background.setScale(1.6);
    let platforms = this.physics.add.staticGroup();
    this.player = this.physics.add.sprite(100, 450, 'hero');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 6 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'hero', frame: 0 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 1, end: 6 }),
      frameRate: 10,
      repeat: -1
    });
    this.player.body.setGravityY(300);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.flipX=true;
      this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.flipX=false;
      this.player.anims.play('right', true);
    }
    else {
      this.player.setVelocityX(0);

      this.player.anims.play('turn');
    }
// this.player.body.touching.down || 
    if (this.cursors.up.isDown && (this.player.body.onFloor())) {
      this.player.setVelocityY(-330);
    }
  }
};