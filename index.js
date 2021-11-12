const getCharacters = () => {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then(myJson => {
      const myList = myJson.results;
     // list(myList);
      console.log(myJson.results);
      paintCharacters(myList);
    });
}



const paintCharacters = (a) => {
  ;
  const ul = document.getElementById("presentation");

  a.forEach(element => {
    

    const divPrincipal = document.createElement("div")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    divPrincipal.classList.add("presentacion__principal")
    div1.classList.add("presentacion_principal_div1")
    div2.classList.add("presentacion_principal_div2")
    const img = document.createElement("img")
    img.src = element.image
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li = document.createElement("li")
    const li4 = document.createElement('li');
    divPrincipal.title = element.name
    li.innerText = element.name;

    li1.innerText = element.status;

    li2.innerText = element.species;
    li4.innerText = element.id;

    ul.appendChild(divPrincipal)
    divPrincipal.appendChild(div1)
    divPrincipal.appendChild(div2)
    div1.appendChild(img)
    div2.appendChild(li)
    div2.appendChild(li1)
    div2.appendChild(li2)
    div2.appendChild(li4)
  });
}


window.onload = ()=> {

  addListeners();

};

const addListeners=()=> {

 document.getElementById('btn').addEventListener('click', getCharacters);
 document.getElementById('btn-3').addEventListener('click', addEvent);
 document.getElementById('btn-2').addEventListener('click',randomCharacter);
}



var addEvent =()=>{

 let personajes = document.querySelectorAll(".presentacion__principal")
 personajes.forEach((item)=>{item.classList.add('hide')
   
 })
}

//SEARCH




// RANDOMIZE
const randomCharacter =  () => {
  let personajes = document.querySelectorAll(".presentacion__principal")

  personajes.forEach((item)=>{item.classList.remove('hide')})

  const randomize = Math.round(Math.random() * ((personajes.length - 1) - 0) + 0);

  const rym = personajes[randomize];

  personajes.forEach((item)=>{
    // debugger
  if( item.title !== rym.title){item.classList.add('hide')} 
  })

}