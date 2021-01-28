import Phaser from 'phaser';

export default class ScoreForm extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key1, key2, text, targetScene, form, score) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.form = `#${form}`;
    this.score = score;

    this.button = this.scene.add.sprite(0, 0, key1).setInteractive();
    this.text = this.scene.add.text(0, 0, text, { fontSize: '32px', fill: '#fff' });
    Phaser.Display.Align.In.Center(this.text, this.button);

    this.add(this.button);
    this.add(this.text);

    this.button.on('pointerdown', () => {
      this.submitScore();
      document.querySelector(this.form).style.display = 'none';
      this.scene.scene.start(targetScene);
    });

    this.button.on('pointerover', () => {
      this.button.setTexture(key2);
    });

    this.button.on('pointerout', () => {
      this.button.setTexture(key1);
    });

    this.scene.add.existing(this);
    document.querySelector(this.form).style.display = 'block';
  }

  submitScore() {
    const name = document.querySelector(this.form).value;
    const score = {
      user: name,
      score: this.score,
    };

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/V6ByhikkkxTfvvLZEgMp/scores/', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    });
  }
}