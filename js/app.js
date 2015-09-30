// Enemies our player must avoid

var Enemy = function(x, y, speed, type) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

// sets enemy icon

    if (type == 'water-normal') {
        this.sprite = 'images/enemy-bug-shark.png';
    } else if (type == 'water-reverse') {
        this.sprite = 'images/enemy-bug-shark-reverse.png';
    } else if (type == 'stone-normal') {
        this.sprite = 'images/enemy-bug.png';
    } else if (type == 'stone-reverse') {
        this.sprite = 'images/enemy-bug-reverse.png';
    }
    
// sets location and speed of enemy 

    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
// creates enemy behavior 

    if (this.sprite == 'images/enemy-bug.png') {
        this.x = this.x + this.speed * dt;
        if (this.x > 1800) {
            this.x = -100;
        }
    }

    if (this.sprite == 'images/enemy-bug-reverse.png') {
        this.x = this.x - this.speed * dt;
        if (this.x < -100) {
            this.x = 1800;
            this.speed = this.speed * (Math.random() + .50);
        }
    }

    if (this.sprite == 'images/enemy-bug-shark.png') {
            this.x = this.x + this.speed * dt * upCount;
            if (this.x > 1800) {
                this.x = -100;
            }
    }

    if (this.sprite == 'images/enemy-bug-shark-reverse.png') {
        this.x = this.x - this.speed * dt;
        if (this.x < -100) {
            this.x = 1800;
            this.speed = this.speed * (Math.random() + .50);
        }
    }
}; 

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(playerX, playerY) {
    this.sprite = 'images/char-boy.png';
    this.x = 808;
    this.y = 725; 
};

// global player movement count

    var upCount = 0;
    var downCount = 0;
    var rightCount = 0;
    var leftCount = 0;

Player.prototype.update = function(dt) {
   
};

//draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//handles user inputs
Player.prototype.handleInput = function(key) {

//handles inputs and counts player movements

if (key == 'up') {
    if (upCount < 9) {
        this.y = this.y - 83;
        upCount = upCount + 1;
        downCount = downCount -1;
    }
}

if (key == 'down') {
    if (downCount < 0) {
        this.y = this.y + 83;
        upCount = upCount - 1;
        downCount = downCount + 1;
    }
}

if (key == 'left') {
    if (leftCount < 8) {
        this.x = this.x - 101;
        leftCount = leftCount + 1;
        rightCount = rightCount - 1;
    }
}

if (key == 'right') {
    if (rightCount < 8) {
        this.x = this.x + 101;
        leftCount = leftCount - 1;
        rightCount = rightCount + 1;
    }
}


};

var player = new Player();

// creates new enemies

var allEnemies = [
    new Enemy(300, 50, 200, 'water-reverse'), //water first row
    new Enemy(900, 50, 200, 'water-reverse'), //water first row
    new Enemy(200, 140, 200, 'water-normal'), //water second row
    new Enemy(1000, 140, 200, 'water-normal'), //water second row
    new Enemy(0, 220, 400, 'water-reverse'), // water thrid row
    new Enemy(600, 220, 400, 'water-reverse'),  // water third row
    new Enemy(1200, 220, 400, 'water-reverse'),  // water third row
    new Enemy(800, 300, 200, 'stone-reverse'), // stone first row
    new Enemy(0, 390, 300, 'stone-normal'),  // stone second row
    new Enemy(600, 390, 300, 'stone-normal'),  // stone second row
    new Enemy(1200, 390, 300, 'stone-normal'),  // stone second row
    new Enemy(1500, 470, 200, 'stone-reverse'), // stone third row
    new Enemy(300, 560, 300, 'stone-normal'),  // stone fourth row
    new Enemy(900, 560, 300, 'stone-normal'),  // stone fourth row
    new Enemy(1500, 560, 300, 'stone-normal'),  // stone fourth row
    

];

allEnemies.push();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

