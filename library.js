let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
let head = document.getElementById('entrance')
let elite = document.getElementById('elite')
let par = document.getElementById('par')

btn.addEventListener('click', () => {
  head.id = 'fade'
  setTimeout(() => {
    head.style.display = 'none'
  }, 3000)

  elite.id = 'fadeIn'
  setTimeout(() => {
    elite.style.display = 'block'
  }, 3000)
})

btn2.addEventListener('click', () => {
  par.style.display = 'block'
  par.style.animation = ' fadeIn 1s'
  head.id = 'fade'
  setTimeout(() => {
    head.style.display = 'none'
  }, 3000)

  elite.id = 'fadeIn'
  setTimeout(() => {
    elite.style.display = 'block'
  }, 3000)
})

pokemons= ()=> {
// let x = prompt('enter a number')
fetch(`https://fizal.me/pokeapi/api/v2/id/257.json`)
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let image = document.getElementById('blaziken')
  image.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/blaziken.gif`
  xaiver.team.push(data)

})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/68.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let machamp = document.getElementById('machamp')
  machamp.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/machamp.gif`
  xaiver.team.push(data)
})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/107.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let hitmonchan = document.getElementById('hitmonchan')
  hitmonchan.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/hitmonchan.gif`
  xaiver.team.push(data)

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
  sceptile.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/haxorus.gif`
  luisC.team.push(data)
})
}
pokemons()

pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/230.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let kindra = document.getElementById('kingdra')
  kindra.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/kingdra.gif`
  luisC.team.push(data)
})
}
pokemons()
pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/373.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let salamance = document.getElementById('salamance')
  salamance.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/salamence.gif`
  luisC.team.push(data)
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
  glalie.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/glalie.gif`
  eshwar.team.push(data)

})
}
pokemons()



pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/460.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let abomasnow = document.getElementById('abomasnow')
  abomasnow.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/abomasnow.gif`
  eshwar.team.push(data)
})
}
pokemons()
pokemons= ()=> {

fetch('https://fizal.me/pokeapi/api/v2/id/131.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let lapras = document.getElementById('lapras')
  lapras.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/lapras.gif`
  eshwar.team.push(data)
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
  gengar.src =`http://www.pkparaiso.com/imagenes/xy/sprites/animados/gengar.gif`
  luisA.team.push(data)
})
}

pokemons()
pokemons= ()=> {
fetch('https://fizal.me/pokeapi/api/v2/id/720.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let hoopa = document.getElementById('hoopa')
  hoopa.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/hoopa.gif`
  luisA.team.push(data)
})
}
pokemons()

pokemons= ()=> {
fetch('https://fizal.me/pokeapi/api/v2/id/429.json')
.then((res)=>res.json())
.then((data)=>{
  console.log(data)
  let mismagius = document.getElementById('mismagius')
  mismagius.src = `http://www.pkparaiso.com/imagenes/xy/sprites/animados/mismagius.gif`
  luisA.team.push(data)
})
}
pokemons()




class Leader {
  constructor(name){
    this.name = name
    this.team = []
  }
  all() {
    return this.team
  }
  get(name) {
    return this.team[name].name
  }
}


class Pokemon {
  constructor() {
    this.name = ''
  }
}

let dude = new Pokemon()
let luisA = new Leader('Lewis A')
let xaiver = new Leader('Xaiver')
let eshwar = new Leader('Eshwar')
let luisC = new Leader('Luis')
