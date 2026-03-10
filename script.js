//carousel Menu

const track = document.getElementById("carousel-civil")
if (track) {
    const totalImages = 150
    function loadImages() {
        for (let i = 1; i <= totalImages; i++) {
            const num = String(i).padStart(3, "0")
            const img = document.createElement("img")
            img.src = `./assets/image/carousel/${num}.jpeg`
            img.loading = "lazy"
            track.appendChild(img)
        }
    }
    loadImages()
    loadImages()
}


//GALERIA FOTOS CIVIL
const fotoAtual = document.getElementById("foto-atual")
if (fotoAtual) {
    const totalFotos = 240
    const fotos = []
    for (let i = 1; i <= totalFotos; i++) {
        let numero = String(i).padStart(3, "0")
        fotos.push(`assets/image/Civil/${numero}.jpg`)

    }

    let indice = 0
    const btnPrev = document.querySelector(".prev")
    const btnNext = document.querySelector(".next")

    function mostrarFoto() {
        fotoAtual.src = fotos[indice]
        fotoAtual.style.opacity = 0

        setTimeout(() => {
            fotoAtual.src = fotos[indice]
            fotoAtual.style.opacity = 1
        }, 500)
    }

    function proxima() {
        indice++
        if (indice >= fotos.length) {
            indice = 0
        }
        mostrarFoto()
    }


    function anterior() {
        indice--
        if (indice < 0) {
            indice = fotos.length - 1
        }
        mostrarFoto()
    }

    btnNext.addEventListener("click", proxima)
    btnPrev.addEventListener("click", anterior)

    setInterval(proxima, 5000)
}

//GALERIA FOTOS RELIGIOSO
const fotoAtualReligioso = document.getElementById("foto-atual-religioso")

if (fotoAtualReligioso) {

    const totalFotosReligioso = 47
    const fotosReligioso = []

    for (let i = 1; i <= totalFotosReligioso; i++) {
        let numeroReligioso = String(i).padStart(3, "0")
        fotosReligioso.push(`assets/image/Religioso/${numeroReligioso}.jpg`)
        console.log(numeroReligioso)
    }

    let indiceReligioso = 0

    const btnPrevReligioso = document.querySelector(".btn-prev")
    const btnNextReligioso = document.querySelector(".btn-next")

    function mostrarFotoReligioso() {
        fotoAtualReligioso.src = fotosReligioso[indiceReligioso]
        fotoAtualReligioso.style.opacity = 0

        setTimeout(() => {
            fotoAtualReligioso.src = fotosReligioso[indiceReligioso]
            fotoAtualReligioso.style.opacity = 1
        }, 500)
    }


    function proximaReligioso() {
        indiceReligioso++
        if (indiceReligioso >= fotosReligioso.length) {
            indiceReligioso = 0
        }
        mostrarFotoReligioso()
    }

    function anteriorReligioso() {
        indiceReligioso--
        if (indiceReligioso < 0) {
            indiceReligioso = fotosReligioso.length - 1
        }
        mostrarFotoReligioso()
    }

    btnNextReligioso.addEventListener("click", proximaReligioso)
    btnPrevReligioso.addEventListener("click", anteriorReligioso)

    setInterval(proximaReligioso, 5000)
}

//petalas
const container = document.getElementById('petalas-container');
if (container) {
    function criarPetala() {
        const petala = document.createElement('div');
        petala.classList.add('petala');

        // posição horizontal aleatória
        petala.style.left = Math.random() * window.innerWidth + 'px';

        // tamanho e velocidade aleatórios
        const tamanho = 30 + Math.random() * 60;
        petala.style.width = tamanho + 'px';
        petala.style.height = tamanho + 'px';

        const duracao = 5 + Math.random() * 5; // 5 a 10 segundos
        petala.style.animationDuration = duracao + 's';

        container.appendChild(petala);

        // remove pétala depois que anima
        setTimeout(() => {
            petala.remove();
        }, duracao * 1000);
    }

    // gera pétalas a cada 200ms
    setInterval(criarPetala, 500);
}

// musica
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

if (musica && btnMusica) {
    musica.volume = 0.3;
    let tocando = false;
    btnMusica.addEventListener("click", () => {
        if (tocando) {
            musica.pause();
            btnMusica.textContent = "🔇";
        } else {
            musica.play();
            btnMusica.textContent = "🔊";
        }
        tocando = !tocando;
    });
}