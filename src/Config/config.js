/* eslint-disable no-undef */
export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 515,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};