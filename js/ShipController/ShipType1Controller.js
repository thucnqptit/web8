class ShipType1Controller extends ShipController{
  constructor(x, y, spriteSuffix, configs) {
    super(x,y,`Spaceship1${spriteSuffix}.png`,configs);
    this.configs.SHIP_SPEED = 1000;
    this.configs.COOLDOWN = 100;
  }
  fire(){
    new BulletType3Controller(this.sprite.position.x,this.sprite.position.y,{angle: -Math.PI/4});
    new BulletType3Controller(this.sprite.position.x,this.sprite.position.y,{angle: -3*Math.PI/4});
    new BulletType3Controller(this.sprite.position.x,this.sprite.position.y,{angle: -Math.PI/2});
    new BulletType3Controller(this.sprite.position.x,this.sprite.position.y,{angle: -5*Math.PI/8});
    new BulletType3Controller(this.sprite.position.x,this.sprite.position.y,{angle: -3*Math.PI/8});
  }
}
