pokemons= ()=> {
// let x = prompt('enter a number')
fetch(`https://fizal.me/pokeapi/api/v2/id/257.json`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let image = document.getElementById('blazeiken')
  image.src = data.sprites.front_default

})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/68.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let machamp = document.getElementById('machamp')
  machamp.src = data.sprites.front_shiny
})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/107.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let hitmonchan = document.getElementById('hitmonchan')
  hitmonchan.src = data.sprites.front_default

})
}
pokemons()








pokemons= ()=> {
// let x = prompt('enter a number')
fetch(`https://fizal.me/pokeapi/api/v2/id/612.json`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let sceptile = document.getElementById('haxorus')
  sceptile.src = data.sprites.front_shiny
})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/230.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let kindra = document.getElementById('kingdra')
  kindra.src = data.sprites.front_shiny
})
}
pokemons()
pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/373.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let salamance = document.getElementById('salamance')
  salamance.src = data.sprites.front_shiny
})
}
pokemons()










pokemons= ()=> {
// let x = prompt('enter a number')
fetch(`https://fizal.me/pokeapi/api/v2/id/362.json`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let glalie = document.getElementById('glalie')
  glalie.src = data.sprites.front_default

})
}
pokemons()



pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/460.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let abomasnow = document.getElementById('abomasnow')
  abomasnow.src = data.sprites.front_default
})
}
pokemons()
pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/131.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let lapras = document.getElementById('lapras')
  lapras.src = data.sprites.front_default
})
}
pokemons()










pokemons= ()=> {
// let x = prompt('enter a number')
fetch(`https://fizal.me/pokeapi/api/v2/id/94.json`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let gengar = document.getElementById('gengar')
  gengar.src = data.sprites.front_default

})
}
pokemons()
pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/720.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let hoopa = document.getElementById('hoopa')
  hoopa.src = data.sprites.front_default
})
}
pokemons()

pokemons= ()=> {
fetch('https://fizal.me/pokeapi/api/v2/id/429.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let mismagius = document.getElementById('mismagius')
  mismagius.src = data.sprites.front_default
})
}
pokemons()

class Leader {
  constructor(name){
    this.name = name
    this.team = []
  }
}


class Pokemon {
  constructor() {
    this.name = ''
  }
}

class Trainer {
  constructor(name) {
    this.name = name
    this.team = []
  }
}


let trainer = new Trainer()
let dude = new Pokemon()
let luisA = new Leader('Lewis A')
let xaiver = new Leader('Xaiver')
let eshwar = new Leader('Eshwar')
let luisC = new Leader('Luis')
