import { EasingFunctions } from './easing.js';

var game, sprite1, sprite2, cursors;
var _lastDirection = 1;
var input = {
  'up': 0,
  'down': 0,
  'left': 0,
  'right': 0,
};
var player = {
  movement: {
    maxspeed: 200,
    bounce: {
      val: 0.05,
      duration: 500, // Input is ignored for x milliseconds after bouncing
      progress: 0,
      /*
			The player needs to be able to:
			1. slam into objects to deal damage, which should bounce.
			2. push objects, which should not bounce
			3. comically bounce off things when appropriate
			If the sprite body's delta is not 0, then it moved during the previous frame.
			If it moved during the previous frame and is currently touching a boundary and a direction key is currently held, cancel bounce.
			*/
    },
    acceleration: {
      method: 'linear',
      time: 1000,
      started: {
        x: 0,
        y: 0,
      },
      duration: {
        x: 0,
        y: 0,
      },
    },
    deceleration: {
      method: 'linear',
      time: 500,
      started: {
        x: 0,
        y: 0,
      },
      duration: {
        x: 0,
        y: 0,
      },
    },
  },
};

function preload() {
  game.load.image('atari', './src/atari130xe.png');
  game.load.image('player', './src/square_64x64_nsew.png');
}

function create() {
  cursors = game.input.keyboard.createCursorKeys();
  game.stage.backgroundColor = '#2d2d2d';

  sprite1 = game.add.sprite(150, 150, 'atari');
  sprite1.name = 'atari';
  game.physics.enable(sprite1, Phaser.Physics.ARCADE);

  //  Here you can visually see the two bounding boxes the sprites are using for collision.

  sprite1.body.immovable = true;

  player.sprite = game.add.sprite(700, 160, 'player');
  player.sprite.anchor.setTo(0.5, 0.5);
  player.sprite.name = 'player';
  game.physics.enable(player.sprite, Phaser.Physics.ARCADE);
  player.sprite.body.collideWorldBounds = true;
  player.sprite.body.bounce.set(player.movement.bounce.val);
}

function update() {
  game.physics.arcade.collide(
    sprite1,
    player.sprite,
    collisionHandler,
    null,
    this,
  );

  var now = Date.now();

  input['up'] = cursors.up.isDown ? 1 : 0;
  input['down'] = cursors.down.isDown ? 1 : 0;
  input['left'] = cursors.left.isDown ? 1 : 0;
  input['right'] = cursors.right.isDown ? 1 : 0;

  if (input['left'] || input['right']) {
    //if(!bodyIsTouching(sprite2.body, "x"))
    acceleratePlayer('x', input['left'], now);
  } else if (player.sprite.body.velocity.x != 0) {
    deceleratePlayer('x', now);
  }
  if (input['up'] || input['down']) {
    //if(!bodyIsTouching(sprite2.body, "y"))
    acceleratePlayer('y', input['up'], now);
  } else if (player.sprite.body.velocity.y != 0) {
    deceleratePlayer('y', now);
  }

  // Handle Player Rotation
  if (game.input.mousePointer.isDown) {
    turnPlayerToFacePoint({
      x: game.input.x,
      y: game.input.y,
    });
  }
}

function collisionHandler(obj1, obj2) {
  //game.stage.backgroundColor = '#992d2d';
}

function render() {
  game.debug.bodyInfo(player.sprite, 32, 32);
}

function acceleratePlayer(axis, direction, now) {
  // example: acceleratePlayer("x", sprite2.body.velocity.x, input["left"], now);
  var progress,
    sign = direction ? -1 : 1,
    timeelapsed = player.movement.acceleration.started[axis]
      ? now - player.movement.acceleration.started[axis]
      : 0;
  if (!timeelapsed) {
    // First frame
    player.movement.acceleration.started[axis] = now;
    player.movement.acceleration.duration[axis] =
      player.movement.deceleration.started[axis] = 0;
  } else {
    progress =
      timeelapsed >= player.movement.acceleration.time
        ? 1
        : EasingFunctions[player.movement.acceleration.method](
            timeelapsed / player.movement.acceleration.time,
          );
    player.movement.acceleration.duration[axis] =
      timeelapsed >= player.movement.acceleration.time
        ? player.movement.acceleration.time
        : timeelapsed;
    player.sprite.body.velocity[axis] =
      sign * player.movement.maxspeed * progress;
  }
}
function deceleratePlayer(axis, now) {
  // example: deceleratePlayer("x", sprite2.body.velocity.x, now);
  var progress,
    sign = player.sprite.body.velocity[axis] < 0 ? -1 : 1,
    timeelapsed = player.movement.deceleration.started[axis]
      ? now - player.movement.deceleration.started[axis]
      : 0;
  if (!timeelapsed) {
    // First frame
    player.movement.deceleration.started[axis] = now;
    player.movement.acceleration.duration[axis] =
      player.movement.deceleration.started[axis] -
      player.movement.acceleration.started[axis];
    player.movement.acceleration.started[axis] = 0;
    if (
      player.movement.acceleration.duration[axis] >
      player.movement.acceleration.time
    ) {
      player.movement.acceleration.duration[axis] =
        player.movement.acceleration.time;
    }
  } else {
    // Ease to a halt
    progress =
      timeelapsed >= player.movement.acceleration.duration[axis]
        ? 0
        : EasingFunctions[player.movement.deceleration.method](
            1 - timeelapsed / player.movement.acceleration.duration[axis],
          );
    player.sprite.body.velocity[axis] =
      sign * player.movement.maxspeed * progress;
    player.sprite.body.speed = Math.abs(player.sprite.body.velocity[axis]);
    //if(sprite2.body.velocity.x == 0 && sprite2.body.velocity.y == 0){
    //	sprite2.body.speed = 0;
    //}
  }
}
function bodyIsTouching(obj, axis) {
  if (axis == 'x') {
    return (
      obj.touching.left ||
      obj.touching.right ||
      obj.blocked.left ||
      obj.blocked.right
    );
  } else {
    return (
      obj.touching.up || obj.touching.down || obj.blocked.up || obj.blocked.down
    );
  }
}

// Animation Functions
function turnPlayerToFacePoint(point) {
  var playercenter = {
      x: player.sprite.x + player.sprite.width / 2,
      y: player.sprite.y + player.sprite.height / 2,
    },
    vector = getVector(playercenter, point),
    currentRotation = Math.round10(parsePhaserAngle(player.sprite.angle)),
    side = getRotationForFacingVector(vector, currentRotation),
    deg = parseAngle(currentRotation + side.degreesFromVector);
  // Animate Player
  if (Math.abs(side.degreesFromVector) > 0.1) {
    player.sprite.angle = deg;
    document.querySelector('#console').innerHTML = side.degreesFromVector;
  }
}

// Math helpers
Math.degrees = function (radians) {
  return (radians * 180) / Math.PI;
};

Math.round10 = function (float) {
  return Math.round(float * 10) / 10;
};

function parseAngle(deg) {
  if (deg < 0) {
    deg = 360 + (deg % 360);
  } else if (deg >= 360) {
    deg %= 360;
  }
  return deg;
}

function parsePhaserAngle(deg) {
  if (deg < 0) {
    deg = 360 - deg;
  }
  return deg;
}

function getRotationForFacingVector(vector, currentRotation) {
  // currentRotation: float, current rotation of element
  // vector: {x, y, magnitude}
  // This function compares a vector to a rotation value for the
  // north face of an object and returns the closest of four sides
  // and how many degrees the object would need to turn to line
  // that side up in the middle of that vector.

  var rotation = {
    ele: {
      north: currentRotation,
      east: parseAngle(currentRotation + 90),
      south: parseAngle(currentRotation + 180),
      west: parseAngle(currentRotation + 270),
    },
    point: vector.rotation,
  };

  // Which of ele's sides is closer to facing the point?
  // Todo: handle if diff is equal to these values by remembering last turn's direction.
  var closest,
    difference = Math.round10(Math.abs(rotation.ele.north - rotation.point));
  if (difference < 45) {
    closest = 'north';
  } else if (difference < 135) {
    closest = 'east';
    difference -= 90;
  } else if (difference < 225) {
    closest = 'south';
    difference -= 180;
  } else {
    closest = 'west';
    difference -= 270;
  }

  // Which direction is the vector from the element side?
  _lastDirection =
    parseAngle(rotation.point - difference) === rotation.ele[closest] ? 1 : -1;

  return {
    side: closest,
    degreesFromVector: _lastDirection * difference,
  };
}

function getVector(start, finish) {
  // This function simulates a X/Y coordinate grid centered on "ele",
  // with the positive X and Y values above and right of the center
  // and the negative values below and left of the center.

  var quadrant,
    opposite,
    adjacent,
    approach = {
      x: { ne: 0, sw: 180 },
      y: { ne: 90, sw: 270 },
      straight: false,
    },
    vector = {
      x: Math.round10(finish.x - start.x),
      y: Math.round10(start.y - finish.y),
      magnitude: 0,
    };

  if (vector.x == 0) approach.straight = 'y';
  else if (vector.y == 0) approach.straight = 'x';

  if (!approach.straight) {
    // Magnitude is the hypotenuse
    vector.magnitude = Math.round10(
      Math.sqrt(vector.x * vector.x + vector.y * vector.y),
    );
    // Set the opposite and adjacent sides, and the quadrant
    if (vector.x > 0) {
      if (vector.y > 0) {
        quadrant = 0; // NE
        opposite = vector.x;
        adjacent = vector.y;
      } else {
        quadrant = 1; // SE
        opposite = vector.y;
        adjacent = vector.x;
      }
    } else {
      if (vector.y > 0) {
        quadrant = 3; // NW
        opposite = vector.y;
        adjacent = vector.x;
      } else {
        quadrant = 2; // SW
        opposite = vector.x;
        adjacent = vector.y;
      }
    }
    // Calculate the angle of the vector
    approach.ratio = Math.abs(opposite) / Math.abs(adjacent);
    approach.atan = Math.atan(approach.ratio);
    approach.degrees = Math.round10(Math.degrees(approach.atan));
    // Convert the angle from the triangle to a 0-360 degree rotation around the center
    vector.rotation = approach.degrees + quadrant * 90;
  } else {
    vector.magnitude = Math.abs(vector[approach.straight]);
    vector.rotation =
      vector[approach.straight] > 0
        ? approach[approach.straight].ne
        : approach[approach.straight].sw;
  }

  return vector;
}

export const createGame = function (selector) {
  const container = document.getElementById(selector);
  const width = container.clientWidth;
  const height = (width / 16) * 9;
  game = new window.Phaser.Game(width, height, Phaser.CANVAS, selector, {
    preload,
    create,
    update,
    render,
  });
  return game;
};
