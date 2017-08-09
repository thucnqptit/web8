class ShipType2Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs) {
    super(
      x,
      y,
      `Spaceship2${spriteSuffix}.png`,
      configs
    );
    this.configs.SHIP_SPEED = 1000;
    this.configs.COOLDOWN = 100;
  }
  fire() {
    this.posEnemy= Nakama.enemyGroup.getFirstAlive();
    if (this.posEnemy) {
      new BulletType2Controller(this.sprite.x, this.sprite.y, {});
    }
    else{
      new BulletType1Controller(this.sprite.x, this.sprite.y, {});
    }
  }
}
