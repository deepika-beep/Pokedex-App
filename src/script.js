// This array contains Pokémon data to display in your application.
// Created a new pokemonRepository variable to hold what the  IIFE will return.
let pokemonRepository = (function() {
  // let modalContainer = document.querySelector('#modal-container');
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  // created add function to check if the typeof parameter is an object
  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      // "detailsUrl" in pokemon){
      pokemonList.push(pokemon);
    } else {
      prompt("data invalid");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".list-group");
    let listItem = document.createElement("li");

    // Added list-group-item on li elements which is a Bootstrap class
    listItem.classList.add("list-group-item");
    let button = document.createElement("button");

    // added button utility class

    button.innerText = pokemon.name;
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.setAttribute("data-bs-target", "#pokemonModal");
    button.setAttribute("data-bs-toggle", "modal");
    // appended the button to li
    listItem.appendChild(button);
    // appended the button to ul
    pokemonList.appendChild(listItem);
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  function loadList() {
    // showloading();
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          // function add(item)
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function() {
        console.error(e);
      });
  }

  function loadDetails(item) {
    // showloading();
    // loadDetails() should GET the Pokémon details using the URL from the Pokémon object in the parameter.
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
        // Everything in json are considered as details
      })
      .then(function(details) {
        item.height = details.height;
        item.types = details.types;
        item.imgUrl = details.sprites.front_shiny;
        return item;
      })
      .catch(function() {
        console.error(e);
      });
  }
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(response) {
      showModal(response);
    });
  }
  //Display a loader
  // let loading = document.querySelector(".loading");
  //
  // function showloading() {
  //   loading.classList.add("hidden");
  //   setTimeout(() => {
  //     loading.classList.remove("hidden");
  //   }, 5000);
  // }
  // Display a modal with the Pokémon’s name, its height, and an image of the Pokémon
  function showModal(pokemon) {
    let modalTitle = document.querySelector(".modal-title");
    // let modalHeader = document.querySelector('.modal-header');
    let modalBody = document.querySelector(".modal-body");

    // clear the existing content of the modal
    modalBody.innerHTML = "";
    modalTitle.innerHTML = "";

    // create element for name in modal content
    let nameElement = document.createElement("h1");
    nameElement.innerText = pokemon.name;
    // create element for height in modal content

    let heightElement = document.createElement("p");
    heightElement.innerText = " height :" + pokemon.height;

    // create element for img in modal content
    let imgElement = document.createElement("img");
    imgElement.classList.add("modal-img");
    imgElement.setAttribute("src", pokemon.imgUrl);
    // create element for types in modal content
    // let typeElement=document.createElement('p');

    modalTitle.appendChild(nameElement);
    modalBody.appendChild(heightElement);
    modalBody.appendChild(imgElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };
})();

pokemonRepository.loadList().then(function() {
  // console.log(pokemonRepository.getAll());
  // Used a forEach() function instead of the for loop to iterate over the Pokémon in pokemonList array to print the details of each one.
  pokemonRepository.getAll().forEach(function(pokemon) {
    // document.write('name:'+ item.name + ' height:' + item.height +' types:'+ item.types + "</br>");
    pokemonRepository.addListItem(pokemon);
  });
});
