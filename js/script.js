// This array contains Pokémon data to display in your application.
// Created a new pokemonRepository variable to hold what the  IIFE will return.
let  pokemonRepository =(function(){
let pokemonList=[{name:'Bulbasaur',height:'7',types:['grass', 'poison']},
{name:'Ivysaur',height:'3',types:['grass', 'monster']},
{name:'Venusaur',height:'2',types:['grass', 'monster']}
];
function getAll(){
  return pokemonList;
}
function add(item){
pokemonList.push(item);
}
return{
  getAll:getAll,
  add:add
};
})();

pokemonRepository.add({name:'Charizard',types:['fire','flying']});
console.log(pokemonRepository.getAll());
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
pokemonRepository.getAll().forEach(function(item){
  document.write('name:'+ item.name + ' height:' + item.height +' types:'+ item.types + "</br>");
 });
