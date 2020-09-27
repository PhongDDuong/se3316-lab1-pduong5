let pokemon = [["1","bulbasaur","grass,poison"],["2","ivysaur","grass,poison"],["3","venusaur","grass,poison"],["4","charmander","fire"],["5","charmeleon","fire"],
["6","charizard","fire,flying"],["7","squirtle","water"],["8","wartortle","water"],["9","blastoise","water"],["10","caterpie","bug"],["11","metapod","bug"],
["12","butterfree","bug,flying"],["13","weedle","bug,poison"],["14","kakuna","bug,poison"],["15","beedrill","bug,poison"],["16","pidgey","normal,flying"],
["17","pidgeotto","normal,flying"],["18","pidgeot","normal,flying"],["19","rattata","normal"],["20","raticate","normal"]]

function numSearch(){
    var uInput = document.getElementById("numInput").value;
    let result = "";
    let resultCount = 0;
    if(uInput!=""){
        var arrayLength = pokemon.length;
        for (var i = 0; i < arrayLength && resultCount<5; i++) {
            if(pokemon[i][0].includes(uInput)){
                result+=pokemon[i][1]+"\n";
                resultCount++;
            }
        }
    alert(result);
    }
    else{
        alert("error")
    }
}

function stringSearch(){
    var uInput = document.getElementById("stringInput").value;
    let result = "";
    let resultCount = 0;

    var arrayLength = pokemon.length;
    for (var i = 0; i < arrayLength && resultCount<5; i++) {
        if(pokemon[i][1].includes(uInput)||(pokemon[i][2].includes(uInput)&&uInput.length>2)){
            result+=pokemon[i][1]+"\n";
            resultCount++;
        }
    }
    alert(result);
}