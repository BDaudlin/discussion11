let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1

window.onload = function() {

    question1();

    function question1() {
        document.getElementById("host-name").innerHTML = "Brennen Daudlin";
        document.getElementById("collaborator-name").innerHTML = "Rafael Khoury";
        document.getElementById("collaborator2-name").innerHTML = "N/A";
    };

}

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
var button = document.querySelector("#instruction_button");
button.addEventListener("click", hideInstructions);
function hideInstructions() {
    console.log(this);

    let setOfQuestions = document.querySelector(".question");

    if (this.innerHTML === "Hide Instructions") {
        for (let question of setOfQuestions) {
            question.style.display = "none";
            this.innerHTML = "Show Instructions";
        }
    }

    else {
        for (let question of setOfQuestions) {
            question.style.display = "block";
            this.innerHTML = "Show Instructions";
        }
    }
}


// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
function question3(){
    var firstNameInput = document.getElementById('first_name');
    var lastNameInput = document.getElementById('last_name');

    if(firstNameInput.value === 'John'){
        lastNameInput.value = 'Doe';
    }else{
        lastNameInput.value = '';
    }
}



// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.




//Question 6





//Question 7 





//Question 8





//Question 9 

