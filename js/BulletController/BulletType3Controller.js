class BulletType3Controller extends BulletController {
  constructor(x, y, configs){
    super(x, y, "BulletType2.png", configs);
    this.configs = configs;
    this.configs.SPEED = 300
    this.sprite.update = this.update.bind(this);
    this.sprite.rotation = this.configs.angle+Math.PI/2;
  }
  update(){
    
    this.sprite.body.velocity.x = Math.cos(this.configs.angle) * this.configs.SPEED;
    this.sprite.body.velocity.y = Math.sin(this.configs.angle) * this.configs.SPEED;
  }
}
