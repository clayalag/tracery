var story = {
  "start": "#[hero:#character#]story",
  "character": ["dragon", "unicorn", "rainbow"],
  "story": "A #adj# #hero# fights the #adj# monster. Go #hero# go!",
  "adj": ["dark", "spleepy", "quite"]
}

var grammar;

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(story);

  var result = grammar.flatten("#start#");
  console.log(result);
}
