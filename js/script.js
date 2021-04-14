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


// created add function to check if the typeof parameter is an object
function add(item){
if(typeof item==='object'){
pokemonList.push(item);
}
else{
  prompt("data invalid");
}
};

function addListItem(pokemon){
  let pokemonList=document.querySelector('.pokemon-list');
  let listItem=document.createElement('li');
  let button=document.createElement('button');
  button.addEventListener('click',function(){
  showDetails(pokemon);
});
  button.innerText=pokemon.name;
  button.classList.add('my-button');

  // appended the button to li
  listItem.appendChild(button);
  // appended the button to ul
  pokemonList.appendChild(listItem);
}
function showDetails(pokemon){
  console.log(pokemon);
}
return{
  getAll:getAll,
  add:add,
  addListItem:addListItem
};
})();

pokemonRepository.add({name:'Charizard',types:['fire','flying']});
console.log(pokemonRepository.getAll());
// Used a forEach() function instead of the for loop to iterate over the Pokémon in pokemonList array to print the details of each one.
pokemonRepository.getAll().forEach(function(pokemon){
  // document.write('name:'+ item.name + ' height:' + item.height +' types:'+ item.types + "</br>");
pokemonRepository.addListItem(pokemon);
 });
