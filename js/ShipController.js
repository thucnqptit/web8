class ShipController{

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.configs = configs;
    this.configs.SHIP_SPEED = 400;
    this.sprite.update = this.update.bind(this);
    this.overheat = false;
  }
  update(){
    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = - this.configs.SHIP_SPEED;
    } else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = +this.configs.SHIP_SPEED;
    } else{
      this.sprite.body.velocity.x = 0;
    }
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y =-this.configs.SHIP_SPEED;
    } else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = +this.configs.SHIP_SPEED;
    }else{
      this.sprite.body.velocity.y = 0;
    }
    // setTimeout(function(){
    //   this.overheat = false;
    // },500);
    // console.log(this.overheat);

    // setTimeout(function () {},1000);

    if(Nakama.keyboard.isDown(this.configs.fire) /*&& !this.overheat*/){
      var imgName = 'BulletType1.png'
      var img = new Image();
      img.src = "../Assets/Original Sprites/" + imgName;
      var y = this.sprite.position.y - img.height;
      var x = this.sprite.position.x + (this.sprite.body.width - img.width)/2;
      var newBullet = new BulletController(x,y,imgName);
      this.overheat = true;
    }

    // if(this.sprite.position.x > Nakama.configs.GAME_WIDTH - 2*this.sprite.width/3){
    //   this.sprite.position.x = Nakama.configs.GAME_WIDTH - 2*this.sprite.width/3;
    // } else if(this.sprite.position.x < - this.sprite.width/3){
    //   this.sprite.position.x = - this.sprite.width/3;
    // }
    // if(this.sprite.position.y > Nakama.configs.GAME_HEIGHT - 2*this.sprite.height/3){
    //   this.sprite.position.y = Nakama.configs.GAME_HEIGHT - 2*this.sprite.height/3;
    // } else if(this.sprite.position.y < - this.sprite.height/3){
    //   this.sprite.position.y = - this.sprite.height/3;
    // }
  }
}
