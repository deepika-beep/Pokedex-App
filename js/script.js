// This array contains Pokémon data to display in your application.

let pokemonList=[{name:'Bulbasaur',height:'7',types:['grass', 'poison']},
{name:'Ivysaur',height:'3',types:['grass', 'monster']},
{name:'Venusaur',height:'2',types:['grass', 'monster']}
];
// display the Pokémon name and height on  website’s DOM
for(i=0;i<pokemonList.length;i++)
{
  document.write(pokemonList[i].name +  " height: " + pokemonList[i].height);
}
// Added The conditional to check if the height is above a certain value to print the following output
for(i=0;i<pokemonList.length;i++)
if(pokemonList[i].height>3)
{

  document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " Wow, that’s big!");
}
else if(pokemonList[i].height==3)
{
  document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " that’s average!");
}
else{
document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " that’s small!");
}
