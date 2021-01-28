import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import mergeSort from '../utilities';

export default class ScoreScene extends Phaser.Scene {
  constructor() {
    super('Score');
  }

  create() {
    this.gameButton = new Button(this, config.width / 2, config.height - 70, 'blueButton1', 'blueButton2', 'Main menu', 'Title');
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/V6ByhikkkxTfvvLZEgMp/scores/', { mode: 'cors' })
      .then(response => response.json())
      .then(data => {
        let results = data.result;
        results = mergeSort(results, 'score');
        for (let i = 0; i < results.length && i < 10; i += 1) {
          const result = results[i];
          this.add.text(200, 40 + 40 * (i), `${result.user}: ${result.score}`, { fontSize: '32px', fill: '#fff' });
        }
      });
  }
}