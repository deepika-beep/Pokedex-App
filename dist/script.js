let pokemonRepository = (function() {
  let t = [],
    n = "https://pokeapi.co/api/v2/pokemon/";
  function o(e) {
    "object" == typeof e && "name" in e ? t.push(e) : prompt("data invalid");
  }
  function i(t) {
    a();
    let n = t.detailsUrl;
    return fetch(n)
      .then(function(t) {
        return t.json();
      })
      .then(function(e) {
        return (
          c(),
          (t.height = e.height),
          (t.types = e.types),
          (t.imgUrl = e.sprites.front_shiny),
          t
        );
      })
      .catch(function() {
        console.error(e);
      });
  }
  function l(t) {
    i(t).then(function(t) {
      s(t);
    });
  }
  let r = document.querySelector("#loading");
  function a() {
    r.classList.remove("display");
  }
  function c() {
    r.classList.add("display");
  }
  function s(t) {
    let e = document.querySelector(".modal-title"),
      n = document.querySelector(".modal-body");
    (n.innerHTML = ""), (e.innerHTML = "");
    let o = document.createElement("h1");
    o.innerText = t.name;
    let i = document.createElement("p");
    i.innerText = " height :" + t.height;
    let l = document.createElement("img");
    l.classList.add("modal-img"),
      l.setAttribute("src", t.imgUrl),
      e.appendChild(o),
      n.appendChild(i),
      n.appendChild(l);
  }
  return {
    add: o,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = document.querySelector(".list-group"),
        n = document.createElement("li");
      n.classList.add("list-group-item");
      let o = document.createElement("button");
      (o.innerText = t.name),
        o.classList.add("btn"),
        o.classList.add("btn-primary"),
        o.setAttribute("data-bs-target", "#pokemonModal"),
        o.setAttribute("data-bs-toggle", "modal"),
        n.appendChild(o),
        e.appendChild(n),
        o.addEventListener("click", function() {
          l(t);
        });
    },
    loadList: function() {
      return (
        a(),
        fetch(n)
          .then(function(t) {
            return t.json();
          })
          .then(function(t) {
            c(),
              t.results.forEach(function(t) {
                let e = { name: t.name, detailsUrl: t.url };
                o(e), console.log(e);
              });
          })
          .catch(function() {
            c(), console.error(e);
          })
      );
    },
    loadDetails: i,
    showDetails: l,
    showModal: s
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
