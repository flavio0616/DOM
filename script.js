const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]

// // // criar o elemento
// // const artigo = document.createElement('article')
// // // popular elemento
// // artigo.innerHTML =`
// const artigo = document.createElement('article')
 
//popular o elemento
// artigo.innerHTML = `
//     <h3> ${arrayPostagens[1].titulo} </h3>
//       <p class="subtitulo"> ${arrayPostagens[1].subtitulo}  </p>
//       <div class="data">${arrayPostagens[1].data} </div>
//       <p>${arrayPostagens[1].texto} </p>
//     </article>
// `

//       // adicionar na DOM
//       const main = document.querySelector('main')
//       main.appendChild(artigo)

// const artigo = document.createElement('article')

// artigo.innerHTML =`
//   <h3>Churrascada do Mar</h3>
//   <p class="subtitulo">Melhor do que estar na praia!</p>
//   <div class="data">30/08/2022</div>
//   <p>Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
//   `

//   const main = document.querySelector('main')
//   main.appendChild(artigo)



for (let i = 0; i < arrayPostagens.length; i++){
//criar o elemento
const artigo = document.createElement('article')

//popular elemento
artigo.innerHTML =`
  <h3> ${arrayPostagens[i].titulo} </h3>
  <p class="subtitulo"> ${arrayPostagens[i].subtitulo}  </p>
  <div class="data">${arrayPostagens[i].data} </div>
  <p>${arrayPostagens[i].texto} </p>

`
//adicionar na DOM
const main = document.querySelector('main')
main.appendChild(artigo)
}