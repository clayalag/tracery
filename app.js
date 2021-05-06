let tweets = []
function generate() {
    /*var data = {
        "start": ["#tweet#"],
        "tweet": ["#NP# #VP#"],
        "NP": ["#Pronoun#", "#Noun#", "#Determiner# #Nominal#"],
        "Nominal": ["#Noun# #Nominal#", "#Noun#"],
        "VP": ["#Verb#", "#Verb# #NP#", "#Verb# #PP# #NP#", "#Verb# #PP#"],
        "PP": ["#Preposition# #NP#"],
        "Verb": ["is", "play", "played", "playing", "like", "liked", "likes", "need", "needed", "needs", "want", "wanted", "wants", "fly", "flying", "flies", "jump", "jumping", "jumps", "run", "running", "runs", "dance", "dancing", "dances"],
        "Pronoun": ["me", "I", "you", "it", "he", "she"],
        "Noun": ["John Keating", "Bob Harris", "Bruce Wayne", "John Constantine", "Gotham", "Asgard", "Diagon Alley", "Narnia"],
        "Determiner": ["the", "a", "an", "this", "these", "that", "there"],
        "Preposition": ["from", "to", "on", "near", "with"]
    }*/

    var data = {
    	"start": ["#NP#"],
    	"NP": ["#N# #AC# #T0##T1##T1# - #T1##T1##T1##T1#"],
    	/*"VP": ["#Vtrans# #NP#", "#Vintr#"],*/
    	"N": ["Camila Sin Apellido", "Christopher Sin Apellido", "Patricia Sin Apellido", "Hector Sin Apellido", "Tony Stark", "Eduardo Sin Apellido", "Juan Sin Apellido", "Yoyo Sin Apellido"],
      "AC": ["(787)", "(939)"],
      /*"Adj": ["cool", "lazy", "amazed", "sweet"],*/
      "T0": ["2", "3", "4", "5", "6", "7", "8", "9"],
    	"T1": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    	/*"T": ["coughs", "daydreams", "whines", "slobbers", "appears", "disappears", "exists", "cries", "laughs"]*/
    }

    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    tweets.push(expansion);

    printTweet(tweets);
}

function printTweet(tweets) {
    let textBox = document.getElementById("tweet");
    textBox.innerHTML = "";
    for(let i=tweets.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+tweets[i]+"</p>"
    }
}
