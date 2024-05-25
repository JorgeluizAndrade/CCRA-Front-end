document.addEventListener("DOMContentLoaded", function () {
  const url = "https://api-ccra.onrender.com/api/receitas";
  const appDiv = document.querySelector("#receitas");
  const loader = document.querySelector(".loader");

  loader.style.display = "block";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let cardHTML = "";

      data.forEach((receita) => {
        cardHTML += `
        <div class="card"  data-id="${receita._id}">
            <h3 class="card__title">${receita.nome}</h3>
            <p class="card__content">Receita para você :)</p>
            <div class="card__date">Aproveite</div>
            <div class="card__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
                    <path fill="#fff" d="M13.4697 17.9697C13.1768 
                    18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 
                    19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 
                    13.2374C21.0066 12.554 21.0066 11.446 20.3232
                    10.7626L14.5303 4.96967C14.2374 4.67678 13.7626
                    4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 
                    11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4
                    12.75H18.6893L13.4697 17.9697Z"></path>
                </svg>
            </div>
        </div>
      `;
      });

      loader.style.display = "none";

      appDiv.innerHTML = `<div class="card-container">${cardHTML}</div>`;
      
      // Adicionando o evento onclick depois de adicionar os cartões
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const id = card.getAttribute('data-id');
        card.addEventListener('click', () => abrirJanelaPorId(id));
      });
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar as receitas:", error);
      loader.style.display = "none";
    });
});

function abrirJanelaPorId(id) {
  const novaGuia = window.open(`receitas.html?id=${id}`, '_blank');
  novaGuia.focus();
}