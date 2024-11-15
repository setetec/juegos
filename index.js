const TAP_ID = "carousel-tap";
const AED_ID = "carousel-aed";


const gamesTAP = [
    {image : "games/backhome/img.png", title: "Back Home", description: "Nahuel Colque - En proceso", link: "games/backhome/index.html"},
    {image : "games/conejos/img.png", title: "Conejos", description: "Daniel La Roca- En proceso", link: "games/conejos/index.html"},
    {image : "games/dressup/img.png", title: "Dress Up Kitty", description: "Milo Bachmann", link: "games/dressup/index.html"},
    {image : "games/pacman/img.png", title: "Pacman", description: "Estefani Segovia - En proceso", link: "games/pacman/index.html"},
    {image : "games/submarino/img.png", title: "Submarino", description: "Facundo Torres - En proceso", link: "games/submarino/index.html"},
    {image : "games/pizzeria/img.png", title: "Repartidor de Pizza", description: "Danilo García", link: "games/pizzeria/index.html"},
    {image : "games/terror/img.png", title: "Juego de Terror", description: "Ariadna Aleman - En proceso", link: "games/terror/index.html"},
    {image : "games/navesdylan/img.png", title: "Juego de Naves", description: "Dylan Rosas", link: "games/navesdylan/index.html"},
    {image : "games/navessebas/img.png", title: "Juego de Naves", description: "Sebastian Muñoz", link: "games/navessebas/index.html"},
    {image : "games/zombie/img.png", title: "Juego Zombie", description: "Roger Chavez", link: "games/zombie/index.html"},
    {image : "games/nubes/img.png", title: "Nubes (Jumper)", description: "Mary Paredes - En proceso", link: "games/nubes/index.html"},
    {image : "games/penales/img.png", title: "Penales", description: "Erik Orellana - En proceso", link: "games/penales/index.html"},
    {image : "games/navesaxel/img.png", title: "Juego de Naves", description: "Axel Gutierrez - En proceso", link: "games/navesaxel/index.html"},
    {image : "games/catchertatiana/img.png", title: "Cacher Game", description: "Tatiana Choque - En proceso", link: "games/catchertatiana/index.html"},
    {image : "games/escapa/img.png", title: "Sam Escapa!", description: "Alba Condori", link: "games/escapa/index.html"},

]
const gamesAED = [
    {image : "games/aquaman/img.png", title: "Aquaman", description: "Valentin Velazquez - En proceso", link: "games/aquaman/index.html"},
    {image : "games/ludo/img.png", title: "Ludo", description: "Ariana Fabiola - En proceso", link: "games/ludo/index.html"},
    {image : "games/carrera/img.png", title: "Carrera", description: "Evelyn Villareal", link: "games/carrera/index.html"},
    {image : "games/pitusa/img.png", title: "Plataformero Gotico", description: "Fabian Gabriel", link: "games/pitusa/index.html"},
    {image : "games/conejo/img.png", title: "Conejo Catcher", description: "Priscila Della Torre", link: "games/conejo/index.html"},
    {image : "games/crossy/img.png", title: "Crossy Road", description: "Ayelen Quispe", link: "games/crossy/index.html"},
    {image : "games/loot/img.png", title: "Zombies y Loot", description: "Santiago Gomez - En proceso", link: "games/loot/index.html"},
    {image : "games/escapajapon/img.png", title: "Escape Japones", description: "Ana Porco Flores", link: "games/escapajapon/index.html"},
    {image : "games/linterna/img.png", title: "Plataforma a Oscuras", description: "Karen - En proceso", link: "games/linterna/index.html"},
    {image : "games/laberinto/img.png", title: "Laberinto", description: "Luana Lopez - En proceso", link: "games/laberinto/index.html"},
    {image : "games/narrativo/img.png", title: "Juego Narrativo para Esquivar", description: "Sol Perez - En proceso", link: "games/narrativo/index.html"},
    {image : "games/disparos/img.png", title: "Disparos y Zombies", description: "Leonardo Ojeda", link: "games/disparos/index.html"},
    {image : "games/trivia/img.png", title: "Trivia en un Lago", description: "Rocio Albarracin Quispe - En proceso", link: "games/trivia/index.html"},
    {image : "games/muzan/img.png", title: "Tanjiro vs Muzan", description: "Thomas Avila", link: "games/muzan/index.html"},
]


function fillCarousel(id, carousel, games) {
    const carouselInner = carousel.querySelector(".carousel-inner");
    const carouselIndicators = carousel.querySelector(".carousel-indicators");
    games.forEach((game, index) => {
        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-target", `#${id}`);
        button.setAttribute("data-bs-slide-to", index);
        if (index === 0) {
            button.classList.add("active");
            button.setAttribute("aria-current", "true");
        }
        carouselIndicators.appendChild(button);


        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
            carouselItem.classList.add("active");
        }
        carouselItem.innerHTML = `
            <img src="${game.image}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block">
                <h5>${game.title}</h5>
                <p>${game.description}</p>
                <a href="${game.link}" class="btn btn-primary">Jugar</a>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    const carouselTAP = document.getElementById(TAP_ID);
    const carouselAED = document.getElementById(AED_ID);

    fillCarousel(TAP_ID ,carouselTAP, gamesTAP);
    fillCarousel(AED_ID, carouselAED, gamesAED);
});
