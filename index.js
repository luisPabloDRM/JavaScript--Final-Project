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
    

    const Principal = document.createElement("li")
    const div_1 = document.createElement("div")
    const div_2 = document.createElement("div")
    Principal.classList.add("presentacion__principal")
    div_1.classList.add("presentacion_principal_div1")
    div_2.classList.add("presentacion_principal_div2")
    const img = document.createElement("img")
    img.src = element.image
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const pi = document.createElement("p")
    const p4 = document.createElement('p');
    div_1.classList.add("img_border")
    div_2.classList.add("text")
    Principal.title = element.name
    pi.innerText = element.name;
    p1.innerText = element.status;
    p2.innerText = element.species;
    p4.innerText = element.id;
  
    ul.appendChild(Principal)
    Principal.appendChild(div_1)
    Principal.appendChild(div_2)
    div_1.appendChild(img)
    div_2.appendChild(pi)
    div_2.appendChild(p1)
    div_2.appendChild(p2)
    div_2.appendChild(p4)
  });
}


window.onload = ()=> {

  addListeners();

};

const addListeners=()=> {

 document.getElementById('btn').addEventListener('click', getCharacters);
 document.getElementById('btn-3').addEventListener('click', addEvent);
 document.getElementById('btn-2').addEventListener('click',randomCharacter);
 document.getElementById('butSearch').addEventListener('click', rymFinder);
}

//Esconder pantalla

var addEvent =()=>{

 let personajes = document.querySelectorAll(".presentacion__principal")
 personajes.forEach((item)=>{item.classList.add('hide')
   
 })
}

//SEARCH
const rymFinder=()=>{
 // debugger
  const textinput = document.getElementById('inputSearch').value
  let ulNode =document.querySelectorAll(".presentacion__principal");
 // ulNode.forEach(item =>{item.classList.remove('hide')})

   ulNode.forEach(item=>{
    if(!item.title.toLowerCase().includes(textinput.toLowerCase())){
      item.classList.add('hide')
   } 
  
})
}


// RANDOMIZE
const randomCharacter =  () => {
  let personajes = document.querySelectorAll(".presentacion__principal")

  personajes.forEach((item)=>{item.classList.remove('hide')})

  const randomize = Math.round(Math.random() * ((personajes.length - 1) - 0) + 0);

  const rym = personajes[randomize];

  personajes.forEach((item)=>{
    // debugger
  if( item.title !== rym.title){item.classList.add('hide')}})}
  