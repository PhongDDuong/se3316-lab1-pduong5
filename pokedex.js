let pokemon = [["1","Bulbasaur","Grass, Poison"],["2","Ivysaur","Grass, Poison"],["3","Venusaur","Grass, Poison"],["4","Charmander","Fire"],["5","Charmeleon","Fire"],
["6","Charizard","Fire, Flying"],["7","Squirtle","Water"],["8","Wartortle","Water"],["9","Blastoise","Water"],["10","Caterpie","Bug"],["11","Metapod","Bug"],
["12","Butterfree","Bug, Flying"],["13","Weedle","Bug, Poison"],["14","Kakuna","Bug, Poison"],["15","Beedrill","Bug, Poison"],["16","Pidgey","Normal, Flying"],
["17","Pidgeotto","Normal, Flying"],["18","Pidgeot","Normal, Flying"],["19","Rattata","Normal"],["20","Raticate","Normal"]]

function numSearch(){
    var uInput = document.getElementById("numInput").value;//takes in an input from the user
    let result = "";
    let resultCount = 0;

    if(uInput!="" && parseInt(uInput) >= 1 && parseInt(uInput) <= 20){//if input is not blank and has a value of between 1 and 20
        for (var i = 0; i < pokemon.length && resultCount<5; i++) {//iterates through the pokemon list until either 5 pokemon meet the search criteria or until every pokemon is checked
            if(pokemon[i][0].includes(uInput)){
                result+="#0"+pokemon[i][0]+" "+pokemon[i][1]+" | Type: "+pokemon[i][2]+"\n";//adds the pokemon that meet the criteria
                resultCount++;
            }
        }
        if(result==""){//if no pokemon meet the criteria
            alert("no results");
        }
        else{//prints results
            alert(result);
        }
    }
    else{//input does not fulfill the requirements
        alert("error")
    }
}

function searchPokemon() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("search").appendChild(node);
}


function stringSearch(){
    var uInput = document.getElementById("stringInput").value.toLowerCase();//takes in an input from the user and makes it lower case
    let result = "";
    let resultCount = 0;

    if(uInput!="" && uInput.length <= 20 && !/[^a-zA-Z]/.test(uInput)){//runs as long as the input isn't blank, input is less than 20 characters, and only contains letters
        for (var i = 0; i < pokemon.length && resultCount<5; i++) {//iterates through the pokemon list until either 5 pokemon meet the search criteria or until every pokemon is checked
            if(pokemon[i][1].toLowerCase().includes(uInput)||(pokemon[i][2].toLowerCase().includes(uInput)&&uInput.length>2)){//if string is found in name or typing
                result+="#0"+pokemon[i][0]+" "+pokemon[i][1]+" | Type: "+pokemon[i][2]+"\n";//adds the pokemon that meet the criteria
                resultCount++;
            }
        }
        if(result==""){//if no pokemon meet the criteria
            alert("no results");
        }
        else{//prints results
            alert(result);
        }
    }
    else{//input does not fulfill the requirements
        alert("error")
    }
}
