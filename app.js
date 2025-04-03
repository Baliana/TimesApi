"use strict"

const listaDeLigas = document.querySelectorAll('.lista-ligas li');
const containerResultados = document.getElementById('cards-container');

// Função principal para buscar dados da liga
const buscarDadosDaLiga = async (nomeLiga) => {
    const apiKey = "4e9079e7d3e2a235b5a8e67371e72ba9"
    const API_URL = `https://v3.football.api-sports.io/leagues?search=${encodeURIComponent(nomeLiga)}`

    if (!nomeLiga || nomeLiga.trim() === "") {
        alert('Nome da liga inválido!')
        return
    }

    try {
        const myHeaders = new Headers()
        myHeaders.append("x-rapidapi-key", apiKey);
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        console.log(API_URL)
        const response = await fetch(API_URL, requestOptions);

        if (response.ok) {
            const data = await response.json()
            
            // Encontrar a liga correspondente
            const ligaEncontrada = data.response.find(liga => 
                liga.league.name.toLowerCase().includes(nomeLiga.toLowerCase())
            )

            if (ligaEncontrada) {
                exibirDadosDaLiga(ligaEncontrada)
            } else {
                alert('Liga não encontrada na API!')
            }
        } else {
            alert(`Erro na API: Status ${response.status}`)
        }
    } catch (error) {
        console.error("Erro:", error)
        alert('Erro ao acessar a API')
    }
}

// Função para exibir os dados da liga na tela
const exibirDadosDaLiga = (dadosLiga) => {
    containerResultados.innerHTML = ''

    const ligaHTML = `
        <div class="liga-card">
            <h2>${dadosLiga.league.name}</h2>
            <img src="${dadosLiga.league.logo}" alt="Logo">
            <p><strong>País:</strong> ${dadosLiga.country.name}</p>
            <p><strong>Temporada atual:</strong> ${dadosLiga.seasons[0].year}</p>
        </div>
    `

    containerResultados.innerHTML = ligaHTML // Atualiza o container com os dados da nova liga
}

// Adicionar clique para cada liga na lista
listaDeLigas.forEach(liga => {
    liga.addEventListener('click', () => {
        const nomeLiga = liga.textContent.trim()
        buscarDadosDaLiga(nomeLiga)
    })
})


const container = document.getElementById("cards-container")
const imagens = [
    './img/setas.png',
    './img/img1.png',
    './img/img2.png',
    './img/img3.png',
    './img/img4.png',
    './img/img5.png',
    './img/img6.png',
    './img/img7.png',
    './img/img8.png',
    './img/img9.png',
    './img/img10.png',
    './img/img11.png',
    './img/img12.png',
    './img/img13.png',
    './img/img14.png'
]

imagens.forEach((src, index) => {
    let img = document.createElement("img")
    img.src = src
    img.alt = `Imagem ${index + 1}`
    img.className = "card"
    img.style.width = "30px"
    img.style.height = "auto"
    img.style.maxHeight = "200px"
    img.style.objectFit = "cover"
    img.style.marginLeft = "2px"
    container.appendChild(img);
})
