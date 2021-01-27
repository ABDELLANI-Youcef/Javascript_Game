const fireballAnim = {
  key: 'shoot',
  frames: [
    {
      key: 'fireball',
      frame: 'fire1',
    },
    {
      key: 'fireball',
      frame: 'fire2',
    },
    {
      key: 'fireball',
      frame: 'fire3',
    },
    {
      key: 'fireball',
      frame: 'fire4',
    },
    {
      key: 'fireball',
      frame: 'fire5',
    },
    {
      key: 'fireball',
      frame: 'fire6',
    },
    {
      key: 'fireball',
      frame: 'fire7',
    },
    {
      key: 'fireball',
      frame: 'fire8',
    },
    {
      key: 'fireball',
      frame: 'fire9',
    },
    {
      key: 'fireball',
      frame: 'fire10',
    },
    {
      key: 'fireball',
      frame: 'fire11',
    },
    {
      key: 'fireball',
      frame: 'fire12',
    },
    {
      key: 'fireball',
      frame: 'fire13',
    },
    {
      key: 'fireball',
      frame: 'fire14',
    },
  ],
  frameRate: 5,
  repeat: 1,
};

const playerAnimLeft = {
  key: 'left',
  frames: [
    {
      key: 'hero',
      frame: 'run1',
    },
    {
      key: 'hero',
      frame: 'run2',
    },
    {
      key: 'hero',
      frame: 'run3',
    },
    {
      key: 'hero',
      frame: 'run4',
    },
    {
      key: 'hero',
      frame: 'run5',
    },
    {
      key: 'hero',
      frame: 'run6',
    },
  ],
  frameRate: 10,
  repeat: -1,
};

const playerAnimRight = {
  key: 'right',
  frames: [
    {
      key: 'hero',
      frame: 'run1',
    },
    {
      key: 'hero',
      frame: 'run2',
    },
    {
      key: 'hero',
      frame: 'run3',
    },
    {
      key: 'hero',
      frame: 'run4',
    },
    {
      key: 'hero',
      frame: 'run5',
    },
    {
      key: 'hero',
      frame: 'run6',
    },
  ],
  frameRate: 10,
  repeat: -1,
};

const playerAnimStance = {
  key: 'stance',
  frames: [
    {
      key: 'hero',
      frame: 'stance',
    },
  ],
  frameRate: 20,
};

const burnBomb = (fire, bomb) => bomb.destroy();

export {
  fireballAnim, playerAnimLeft, playerAnimRight, playerAnimStance, burnBomb,
};