// This array contains Pokémon data to display in your application.

let pokemonList=[{name:'Bulbasaur',height:'7',types:['grass', 'poison']},
{name:'Ivysaur',height:'3',types:['grass', 'monster']},
{name:'Venusaur',height:'2',types:['grass', 'monster']}
];
// display the Pokémon name and height on  website’s DOM

// Added The conditional to check if the height is above a certain value to print the following output
// for(i=0;i<pokemonList.length;i++)
// {
// if(pokemonList[i].height>3)
// {
//
//   document.write(pokemonList[i].name + "(" + " height: "  + pokemonList[i].height + ")" + " Wow, that’s big!" + "<br>");
// }
// else if(pokemonList[i].height==3)
// {
//   document.write(pokemonList[i].name + "(" + " height: " + pokemonList[i].height + ")"+ " that’s average!" + "<br>");
// }
// else{
// document.write(pokemonList[i].name + "(" +" height: " + pokemonList[i].height + ")" +" that’s small!" + "<br>");
// }
// }

// Used a forEach() function instead of the for loop to iterate over the Pokémon in pokemonList array to print the details of each one.
pokemonList.forEach(function(pokemon){
  document.write('name:'+ pokemon.name + ' height:' + pokemon.height +' types:'+ pokemon.types + "</br>");
});
