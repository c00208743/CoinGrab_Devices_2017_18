/**
 * main is the entry point for Javascript programs.
 *
 */
class SceneManager
{
  constructor()
  {
    this.scenes = {};
    this.sceneTitles =[];
    this.currentScene = null;
    this.index = -1;
    this.sceneNum = -1;
  }

  /**
   * addScene increments the number of the current scene and pushes
   * the current scene title is pushed in the list and the scene
   * dictionary is set the sceneNum
   * @param {dictionary} scenes passes access to the scenes
   */
  addScene(scene)
  {
    this.sceneNum++;
    this.sceneTitles.push(scene.title);
    this.scenes[this.sceneNum] = scene;
  }

  /**
   * goToScene looks through this.sceneTitles  for the current title
   * then sets the index to the current title
   * @param {title} title passes access to the scenes
   */
  goToScene(title)
  {
    for (var i =0; i < this.sceneTitles.length; i++)
    {
      if(this.sceneTitles[i] == title)
      {
        this.index = i;
      }
    }
    this.currentScene = this.scenes[this.index];
  }

  /**
   * goToNextScene increments the index to get the scene that suppose to
   * come next and sets the current scene to the scene after the current index
   * @param {dictionary} scenes passes access to the scenes
   */
  goToNextScene()
  {
    this.index++;
    if(this.index > this.sceneNum)
    {
      this.index = 0;
    }

    if(this.index ==1)
    {
      var el = document.getElementById('divId3');
      el.parentNode.removeChild(el);
    }

    if(this.index == 2)
    {
      //removes the button
      var el = document.getElementById('divId');
      el.parentNode.removeChild(el);
      var el = document.getElementById('divId2');
      el.parentNode.removeChild(el);
    }

    this.currentScene = this.scenes[this.index];

  }
  render()
  {
    this.currentScene.render();
  }

  getScene()
  {
    return this.sceneTitles[this.index];
  }

  setScene(scene)
  {
    for (var i = 0; i < this.sceneTitles.length; i++)
    {
      if(scene.getScene === this.sceneTitles[i])
      {
        this.scenes[i].init();
      }
    }
  }
}
