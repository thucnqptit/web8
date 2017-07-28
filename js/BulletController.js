class BulletController{
  constructor(x,y,spriteName){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.BULLET_SPEED = 600;
    this.sprite.update = this.update.bind(this);
  }
  update(){
    // if(Nakama.keyboard.isDown(ship.configs.fire)){
      if(this.sprite.position.y > 0){
        this.sprite.body.velocity.y = -this.BULLET_SPEED;
      }
    // }
  }
}