const row = document.querySelector(".row");
const titolo = document.getElementById("titolo");

titolo.innerHTML = "OUR TEAM";

const cards = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        immagine: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "img/angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "img/walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scoot Estrada",
        ruolo: "Developer",
        immagine: "img/scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "img/barbara-ramos-graphic-designer.jpg",
    }
];
console.log(cards);

for(let team of cards){
    console.log(team);
}


for(let team of cards){
    const teamPrint = `<div class="col-4 mb-5">
    <div class="card" style="width: 18rem;">
        <img src="img/${team.immagine}" class="card-img-top" alt="${team.nome}">
        <div class="card-body">
          <p class="card-text fw-bold fs-5">${team.nome}</p>
          <p class="card-text fw-lighter">${team.ruolo}</p>
        </div>
    </div>`;
}