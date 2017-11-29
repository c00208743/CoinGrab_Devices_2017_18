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


  this.update = this.update.bind(this);


}

Game.prototype.init = function()
{
    console.log('Initialising game');
    this.previousTime = Date.now();
}


Game.prototype.update = function(sceneManager)
{
  //console.log("update")
  this.render(sceneManager);
  this.player.update();

  var now = Date.now();
  var deltaTime = (now - this.previousTime)
  this.previousTime = now;

  this.coin.update(deltaTime);



}

Game.prototype.render = function()
{
  this.player.render();
}
