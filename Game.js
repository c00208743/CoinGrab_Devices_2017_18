/**
 * Game is the entry point for Javascript programs.
 *
 */

function Game()
{
  var x = 100;
  var y = 500;
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
}

Game.prototype.render = function(sceneManager)
{
  sceneManager.render();
  this.player.render();
}

Game.prototype.update = function(sceneManager)
{
  this.render(sceneManager);

  if (sceneManager) {
        return;
    }

  window.requestAnimationFrame(gameNS.game.update(sceneManager));
}
