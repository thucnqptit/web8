class BulletType2Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType2.png", configs);
    this.configs = configs;
    this.configs.SPEED = 300;
    this.configs.TURN_RATE = 5;
    this.sprite.update = this.update.bind(this);
  }
  update(){
    this.posEnemy= Nakama.enemyGroup.getFirstAlive();
    if (this.posEnemy) {
      var targetAngle = Nakama.game.math.angleBetween(
        this.sprite.position.x,
        this.sprite.position.y,
        this.posEnemy.position.x,
        this.posEnemy.position.y
      );
      if (this.sprite.rotation !== targetAngle + Math.PI/2) {
          var delta = targetAngle + Math.PI/2 - this.sprite.rotation;
          if (delta > Math.PI) delta -= Math.PI * 2;
          if (delta < -Math.PI) delta += Math.PI * 2;
          if (delta > 0) {
              this.sprite.angle += this.configs.TURN_RATE;
          } else {
              this.sprite.angle -= this.configs.TURN_RATE;
          }
          if (Math.abs(delta) < Nakama.game.math.degToRad(this.configs.TURN_RATE)) {
              this.sprite.rotation = targetAngle + Math.PI/2;
          }
      }
          this.sprite.body.velocity.x = Math.cos(this.sprite.rotation-Math.PI/2) * this.configs.SPEED;
          this.sprite.body.velocity.y = Math.sin(this.sprite.rotation-Math.PI/2) * this.configs.SPEED;
    }
  }
}
