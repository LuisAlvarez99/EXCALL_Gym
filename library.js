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
// alert('WELCOME TO THE KAMUI GYM! HOME OF THE EXCALL BADGE!')

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



let myModal1 = document.getElementById('myModal1')
let myModal2 = document.getElementById('myModal2')
let myModal3 = document.getElementById('myModal3')
let myModal4 = document.getElementById('myModal4')
let but1 = document.getElementById('myBtn1')
let but2 = document.getElementById('myBtn2')
let but3 = document.getElementById('myBtn3')
let but4 = document.getElementById('myBtn4')
let span1 = document.getElementsByClassName('close')[0]
let span2 = document.getElementsByClassName('close')[1]
let span3 = document.getElementsByClassName('close')[2]
let span4 = document.getElementsByClassName('close')[3]
let inside1 = document.getElementsByClassName('inner-modal')[0]
let inside2 = document.getElementsByClassName('inner-modal')[1]
let inside3 = document.getElementsByClassName('inner-modal')[2]
let inside4 = document.getElementsByClassName('inner-modal')[3]


function pokeStats1() {
  let div = document.createElement('div')
  inside1.appendChild(div)
  div.innerHTML = `<p> ${xaiver.team[0].name}</p>
                    <img src=${xaiver.team[0].sprites.front_default}>
                    <p>HP: ${xaiver.team[0].stats[5].base_stat}</p>
                    <p>ATK: ${xaiver.team[0].stats[4].base_stat}</p>
                    <p>DEF: ${xaiver.team[0].stats[3].base_stat}</p>`
}
function pokeStats2() {
  let div = document.createElement('div')
  inside1.appendChild(div)
  div.innerHTML = `<p> ${xaiver.team[1].name}</p>
                    <img src=${xaiver.team[1].sprites.front_default}>
                    <p>HP: ${xaiver.team[1].stats[5].base_stat}</p>
                    <p>ATK: ${xaiver.team[1].stats[4].base_stat}</p>
                    <p>DEF: ${xaiver.team[1].stats[3].base_stat}</p>`
}
function pokeStats3() {
  let div = document.createElement('div')
  inside1.appendChild(div)
  div.innerHTML = `<p> ${xaiver.team[2].name}</p>
                    <img src=${xaiver.team[2].sprites.front_default}>
                    <p>HP: ${xaiver.team[2].stats[5].base_stat}</p>
                    <p>ATK: ${xaiver.team[2].stats[4].base_stat}</p>
                    <p>DEF: ${xaiver.team[2].stats[3].base_stat}</p>`
}

but1.onclick = function() {
  myModal1.style.display = 'block'
  pokeStats1()
  pokeStats2()
  pokeStats3()
}
span1.onclick = function() {
  myModal1.style.display = 'none'
}

function pokeStats4() {
  let div = document.createElement('div')
  inside2.appendChild(div)
  div.innerHTML = `<p> ${luisC.team[0].name}</p>
                    <img src=${luisC.team[0].sprites.front_default}>
                    <p>HP: ${luisC.team[0].stats[5].base_stat}</p>
                    <p>ATK: ${luisC.team[0].stats[4].base_stat}</p>
                    <p>DEF: ${luisC.team[0].stats[3].base_stat}</p>`
}
function pokeStats5() {
  let div = document.createElement('div')
  inside2.appendChild(div)
  div.innerHTML = `<p> ${luisC.team[1].name}</p>
                    <img src=${luisC.team[1].sprites.front_default}>
                    <p>HP: ${luisC.team[1].stats[5].base_stat}</p>
                    <p>ATK: ${luisC.team[1].stats[4].base_stat}</p>
                    <p>DEF: ${luisC.team[1].stats[3].base_stat}</p>`
}
function pokeStats6() {
  let div = document.createElement('div')
  inside2.appendChild(div)
  div.innerHTML = `<p> ${luisC.team[2].name}</p>
                    <img src=${luisC.team[2].sprites.front_default}>
                    <p>HP: ${luisC.team[2].stats[5].base_stat}</p>
                    <p>ATK: ${luisC.team[2].stats[4].base_stat}</p>
                    <p>DEF: ${luisC.team[2].stats[3].base_stat}</p>`
}

but2.onclick = function() {
  myModal2.style.display = 'block'
  pokeStats4()
  pokeStats5()
  pokeStats6()
}
span2.onclick = function() {
  myModal2.style.display = 'none'
}

function pokeStats7() {
  let div = document.createElement('div')
  inside3.appendChild(div)
  div.innerHTML = `<p> ${eshwar.team[0].name}</p>
                    <img src=${eshwar.team[0].sprites.front_default}>
                    <p>HP: ${eshwar.team[0].stats[5].base_stat}</p>
                    <p>ATK: ${eshwar.team[0].stats[4].base_stat}</p>
                    <p>DEF: ${eshwar.team[0].stats[3].base_stat}</p>`
}
function pokeStats8() {
  let div = document.createElement('div')
  inside3.appendChild(div)
  div.innerHTML = `<p> ${eshwar.team[1].name}</p>
                    <img src=${eshwar.team[1].sprites.front_default}>
                    <p>HP: ${eshwar.team[1].stats[5].base_stat}</p>
                    <p>ATK: ${eshwar.team[1].stats[4].base_stat}</p>
                    <p>DEF: ${eshwar.team[1].stats[3].base_stat}</p>`
}
function pokeStats9() {
  let div = document.createElement('div')
  inside3.appendChild(div)
  div.innerHTML = `<p> ${eshwar.team[2].name}</p>
                    <img src=${eshwar.team[2].sprites.front_default}>
                    <p>HP: ${eshwar.team[2].stats[5].base_stat}</p>
                    <p>ATK: ${eshwar.team[2].stats[4].base_stat}</p>
                    <p>DEF: ${eshwar.team[2].stats[3].base_stat}</p>`
}

but3.onclick = function() {
  myModal3.style.display = 'block'
  pokeStats7()
  pokeStats8()
  pokeStats9()
}
span3.onclick = function() {
  myModal3.style.display = 'none'
}

function pokeStats10() {
  let div = document.createElement('div')
  inside4.appendChild(div)
  div.innerHTML = `<p> ${luisA.team[0].name}</p>
                    <img src=${luisA.team[0].sprites.front_default}>
                    <p>HP: ${luisA.team[0].stats[5].base_stat}</p>
                    <p>ATK: ${luisA.team[0].stats[4].base_stat}</p>
                    <p>DEF: ${luisA.team[0].stats[3].base_stat}</p>`
}
function pokeStats11() {
  let div = document.createElement('div')
  inside4.appendChild(div)
  div.innerHTML = `<p> ${luisA.team[1].name}</p>
                    <img src=${luisA.team[1].sprites.front_default}>
                    <p>HP: ${luisA.team[1].stats[5].base_stat}</p>
                    <p>ATK: ${luisA.team[1].stats[4].base_stat}</p>
                    <p>DEF: ${luisA.team[1].stats[3].base_stat}</p>`
}
function pokeStats12() {
  let div = document.createElement('div')
  inside4.appendChild(div)
  div.innerHTML = `<p> ${xaiver.team[2].name}</p>
                    <img src=${xaiver.team[2].sprites.front_default}>
                    <p>HP: ${xaiver.team[2].stats[5].base_stat}</p>
                    <p>ATK: ${xaiver.team[2].stats[4].base_stat}</p>
                    <p>DEF: ${xaiver.team[2].stats[3].base_stat}</p>`
}

but4.onclick = function() {
  myModal4.style.display = 'block'
  pokeStats10()
  pokeStats11()
  pokeStats12()
}
span4.onclick = function() {
  myModal4.style.display = 'none'
}
