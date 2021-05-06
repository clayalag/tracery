let tweets = []
function generate() {
  
    var data = {
    	"start": ["#NP#"],
    	"NP": ["#N#: (#AC#) #T0##T1##T1# - #T1##T1##T1##T1#"],
    	"N": ["Camila Sin Apellido", "Christopher Sin Apellido", "Patricia Sin Apellido", "Hector Sin Apellido", "Tony Stark", "Eduardo Sin Apellido", "Juan Sin Apellido", "Yoyo Sin Apellido"],
      "AC": ["787", "939"],
      "T0": ["2", "3", "4", "5", "6", "7", "8", "9"],
    	"T1": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
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
