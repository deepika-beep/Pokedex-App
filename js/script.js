// This array contains Pokémon data to display in your application.
// Created a new pokemonRepository variable to hold what the  IIFE will return.
let  pokemonRepository =(function(){
  let modalContainer = document.querySelector('#modal-container');

  let pokemonList=[

  ];
  let apiUrl='https://pokeapi.co/api/v2/pokemon/';


  // created add function to check if the typeof parameter is an object
  function add(pokemon){
    if(typeof pokemon==="object" &&
    "name" in pokemon) {
      // "detailsUrl" in pokemon){
      pokemonList.push(pokemon);
    }
    else{
      prompt("data invalid");
    }
  };

  function getAll(){
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList=document.querySelector('.pokemon-list');
    let listItem=document.createElement('li');
    let button=document.createElement('button');

    button.innerText=pokemon.name;
    button.classList.add('my-button');
    // appended the button to li
    listItem.appendChild(button);
    // appended the button to ul
    pokemonList.appendChild(listItem);
    button.addEventListener('click',function(event){
      showDetails(pokemon);
    });

  }

  function loadList(){
    return fetch(apiUrl).then(function(response){
      return response.json();
    }).then(function(json){
      json.results.forEach(function(item){
        let pokemon={
          name:item.name,
          detailsUrl:item.url
        };
        // function add(item)
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function(e){
      console.error(e);
    })

  }

  function loadDetails(item){

    // loadDetails() should GET the Pokémon details using the URL from the Pokémon object in the parameter.
    let url=item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
      // Everything in json are considered as details
    }).then(function(details){
      item.height=details.height;
      item.types=details.types;
      item.imgUrl=details.sprites.front_shiny;
      return item;
    }).catch(function(e)
  {
    console.error(e);
  });
  }
  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function(response){
    showModal(pokemon);
    });
  }

// Display a modal with the Pokémon’s name, its height, and an image of the Pokémon
function showModal(pokemon){
// addListItem(pokemon);
  // clear existing modal content
  modalContainer.innerHTML='';
  let modal=document.createElement('div');
  modal.classList.add('modal');
  // add new modal content
  let closeButtonElement=document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText='Close';
  closeButtonElement.addEventListener('click',hideModal);

  let nameElement=document.createElement('h3');
  nameElement.innerText=pokemon.name;

  let heightElement=document.createElement('h3');
  heightElement.innerText=pokemon.height;

  let imgElement=document.createElement('img');
  imgElement.classList.add('img-element');
  imgElement.src=pokemon.imageUrl;

  modal.appendChild('closeButtonElement');
  modal.appendChild('nameElement');
  modal.appendChild('heightElement');
  modal.appendChild('img-element');
  modalContainer.appendChild('modal');
  modalContainer.classList.add('is-visible');

}
// hideModal function

function hideModal(){

  modalContainer.classList.remove('is-visible');
}

document.querySelector('#show-modal').addEventListener('click',()=>{
  showModal(pokemon);
});

// Close the modal via Esc key
window.addEventListener('keydown',(e)=>{

  if(e.key==='Escape'&&  modalContainer.classList.contains('is-visible')){
    hideModal();
  }
});

// Close the modal when clicking the overlay
modalContainer.addEventListener('click',(e)=>{
  if(e.target=modalContainer){
    hideModal();
  }
});

  return{
    add:add,
    getAll:getAll,
    addListItem:addListItem,
    loadList:loadList,
    loadDetails:loadDetails,
    showDetails:showDetails,
    showModal:showModal,
    hideModal:hideModal

};
})();


// console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){
  // Used a forEach() function instead of the for loop to iterate over the Pokémon in pokemonList array to print the details of each one.
  pokemonRepository.getAll().forEach(function(pokemon){
    // document.write('name:'+ item.name + ' height:' + item.height +' types:'+ item.types + "</br>");
    pokemonRepository.addListItem(pokemon);
  });
});
