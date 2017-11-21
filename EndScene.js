/**
 * main is the entry point for Javascript programs.
 *
 */
class EndScene extends Scene
{
  constructor(title)
  {
    super(title);
  }
  /**
   * The Render method creates a background with a hex value
   * and prompts text with this.title string message
   *
   */
  render()
  {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.font = 'Impact Regular';
    ctx.fillText(this.title, 10, 50);
    document.body.style.backgroundColor = "#8700FF";
  }


}
