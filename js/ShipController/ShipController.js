class ShipController{

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.configs = configs;
    this.nextShotTime = 500;
    this.sprite.update = this.update.bind(this);
    // this.fire_key = Nakama.keyboard.addKey(this.config.fire);
  }
  update() {
    if (Nakama.keyboard.isDown(this.configs.left) ){
      this.sprite.body.velocity.x = -this.configs.SHIP_SPEED;
    }

    else if (Nakama.keyboard.isDown(this.configs.right)) {
      this.sprite.body.velocity.x = this.configs.SHIP_SPEED;
    }

    else{
      this.sprite.body.velocity.x = 0;
    }

    if (Nakama.keyboard.isDown(this.configs.up)){
      (this.sprite.body.velocity.y = -this.configs.SHIP_SPEED);
    }

    else if (Nakama.keyboard.isDown(this.configs.down)) {
      (this.sprite.body.velocity.y = this.configs.SHIP_SPEED);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.fire) && Nakama.game.time.time > this.nextShotTime ){
      this.fire();
      // this.fire_key.onDown.add(this.fire, this);
      this.nextShotTime = Nakama.game.time.time + this.configs.COOLDOWN;
    }
  }
  fire(){}
}
