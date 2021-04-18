// This array contains Pokémon data to display in your application.
// Created a new pokemonRepository variable to hold what the  IIFE will return.
let  pokemonRepository =(function(){
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
    button.addEventListener('click',function(event){
      showDetails(pokemon);
    });
    // appended the button to li
    listItem.appendChild(button);
    // appended the button to ul
    pokemonList.appendChild(listItem);
  }

  function loadList(){
      showLoadMessage()
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
      showLoadMessage()
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
  })
  }
  function showDetails(pokemon){
    pokemonRepository.loadDetails(pokemon).then(function(response){
      console.log(response);
    });
  }

// Bonus Task
let textInput=document.querySelector('#inputArea');
let textOutput=document.querySelector('#showOutput');
let btn=document.querySelector('#SubmitMessage');

// add addEventListener to button
btn.addEventListener('click',fetchHandler);
// selecting loading div
let loader=document.querySelector('#loading');

  // show Loading

  function showLoadMessage(){
loader.classList.add('display');

// stop loading aftersometime
setTimeout(function(){
  loader.classList.remove('display');
},5000);
      }

function hideLoadingMessage(){
loader.classList.remove('display');
}

function fetchHandler(event){
  showLoadMessage()
  let input=textInput.value;
 fetch(apiUrl).then(function(response){
    return response.json();
  }).then(function(json){
      hideLoadingMessage()
      textOutput.innerText="Output is entered";
}

  return{
    add:add,
    getAll:getAll,
    addListItem:addListItem,
    loadList:loadList,
    loadDetails:loadDetails,
    showDetails:showDetails,
    showLoadMessage;showLoadMessage,
    hideLoadingMessage:hideLoadingMessage
  };
})();


console.log(pokemonRepository.getAll());
pokemonRepository.loadList().then(function(){
  // Used a forEach() function instead of the for loop to iterate over the Pokémon in pokemonList array to print the details of each one.
  pokemonRepository.getAll().forEach(function(pokemon){
    // document.write('name:'+ item.name + ' height:' + item.height +' types:'+ item.types + "</br>");
    pokemonRepository.addListItem(pokemon);
  });
});
