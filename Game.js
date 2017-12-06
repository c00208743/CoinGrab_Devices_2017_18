/**
 * Game is the entry point for Javascript programs.
 *
 */

class Game
{
  constructor()
  {
  //  var sceneManager = new SceneManager();

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

  init()
  {
      this.previousTime = Date.now();
  }

restart()
{
  this.previousTime = Date.now();
  this.timer = 60;
}

  update ()
  {
    this.render(sceneManager);
    this.player.update();

    var now = Date.now();
    var deltaTime = (now - this.previousTime)
    this.timer -= deltaTime / 1000;
    this.previousTime = now;

    this.coin.update(deltaTime);

    if (this.timer <= 0)
    {
      sceneManager.goToScene('End Screen');
    }

    if(this.player.y + this.player.height / 2 > this.coin.y && this.player.y < this.coin.y + this.coin.height / 3)
    {
      this.coin.hit();
      this.player.hitCoin();
    }

  }

  render ()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = '40pt Impact Regular';
    ctx.fillStyle = 'black';
    ctx.fillText("Time left: " + Math.round(this.timer), 200, 70);

    this.player.render();
  }
}
