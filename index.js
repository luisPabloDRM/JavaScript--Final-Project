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
    const li1_1 = document.createElement("li")
    const li2_2 = document.createElement("li")
    Principal.classList.add("presentacion__principal")
    li1_1.classList.add("presentacion_principal_div1")
    li2_2.classList.add("presentacion_principal_div2")
    const img = document.createElement("img")
    img.src = element.image
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li = document.createElement("li")
    const li4 = document.createElement('li');
    Principal.title = element.name
    li.innerText = element.name;
    li1.innerText = element.status;
    li2.innerText = element.species;
    li4.innerText = element.id;

    ul.appendChild(Principal)
    Principal.appendChild(li1_1)
    Principal.appendChild(li2_2)
    li1_1.appendChild(img)
    li1_1.appendChild(li)
    li1_1.appendChild(li1)
    li1_1.appendChild(li2)
    li1_1.appendChild(li4)
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
  