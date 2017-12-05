/**
 * Game is the entry point for Javascript programs.
 *
 */

function Game()
{
  this.img = new Image();
  this.img.src = 'Images/coin.png';

  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');

  this.coin = new Coin(ctx, {
    width: 1000,
    height: 100,
    image: this.img
  }, 10)

  var x = 100;
  var y = 700;
  var width = 50;
  var height = 50;
  var r = 255;
  var g = 255;
  var b = 255;
  var colour = [r, g, b];
  this.player = new Player(x, y, width, height, colour);

  this.timer = 60;

  this.update = this.update.bind(this);


}

Game.prototype.init = function()
{
    this.previousTime = Date.now();
}

Game.prototype.restart = function()
{
  this.timer = 60;
}

Game.prototype.update = function(sceneManager)
{
  //console.log("update")
  this.render(sceneManager);
  this.player.update();

  var now = Date.now();
  var deltaTime = (now - this.previousTime)
  this.timer -= deltaTime / 1000;
  console.log(this.timer);
  this.previousTime = now;

  this.coin.update(deltaTime);

  if(this.player.x + this.player.width > this.coin.x && this.player.x < this.coin.x + this.coin.width / 40)
  {
    if(this.player.y + this.player.height / 2 > this.coin.y && this.player.y < this.coin.y + this.coin.height / 3)
    {
      this.coin.hit();
      this.player.hitCoin();
    }
  }

}

Game.prototype.render = function()
{
  this.player.render();
}
