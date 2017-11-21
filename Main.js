/**
 * main is the entry point for Javascript programs.
 * @author {Jamie Murphy}
 */
var sceneManager;

function main()
{
  var game = new Game();
  var titleScene = new TitleScene('Title Screen');
  var menuScene = new MenuScene('Menu Screen');
  var gameScene = new GameScene('Game Screen');
  var endScene = new EndScene('End Screen');
   sceneManager = new SceneManager();
  game.init();
  initCanvas();
  sceneManager.addScene(titleScene);
  sceneManager.addScene(menuScene);
  sceneManager.addScene(gameScene);
  sceneManager.addScene(endScene);
  sceneManager.goToScene('Title Screen');
  document.addEventListener("touchstart", clickHandler.bind(null, sceneManager));
//  document.addEventListener("click", clickHandler.bind(null, sceneManager));
  draw(sceneManager);
}

function initCanvas()
{
  // Use the document object to create a new element canvas.
  var canvas = document.createElement("canvas");
  // Assign the canvas an id so we can reference it elsewhere.
  canvas.id = 'mycanvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // We want this to be a 2D canvas.
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, canvas.width, canvas.height);
  // Adds the canvas element to the document.
  document.body.appendChild(canvas);

}
/**
 * The clickHandler is called when a native click event is fired
 * @param {Class} sceneManager passes access to the sceneManager
 *the methods goToScene and render in the sceneManager are called
 */

function clickHandler (sceneManager, e)
{
   sceneManager.goToNextScene();	// Use a method on the sceneManager
   sceneManager.render();
}


/**
 * The clickHandler is called when a native click event is fired
 * @param {Class} SceneManager passes access to the sceneManager
 *the render in the sceneManager are called
 * Ross said this would become unessary try take it out
 */
function draw(SceneManager)
{
  sceneManager.render();
}
