document.addEventListener("DOMContentLoaded", () => {
  carregarComentariosIniciais();

  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const id = this.getAttribute('href');
      const section = document.querySelector(id);

      const offset = 80;
      const top = section.offsetTop - offset;

      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });
  });
});

// ✅ adicionar comentário SEM random
function adicionarComentario() {
  const mensagem = document.getElementById("mensagem").value;

  if (mensagem === "") {
    alert("Escreva um comentário!");
    return;
  }

  criarComentario("Você", "img/user1.jpg", mensagem, true);

  document.getElementById("mensagem").value = "";
}

// ✅ função reutilizável
function criarComentario(nome, foto, mensagem, permitirAvaliacao = false) {
  const lista = document.getElementById("lista-comentarios");

  const div = document.createElement("div");
  div.classList.add("comentario");

  div.innerHTML = `
    <div class="comentario-header">
      <img src="${foto}" class="foto-comentario">
      <strong>${nome}</strong>
    </div>
    <p>${mensagem}</p>
    
    ${permitirAvaliacao ? `
      <div class="avaliacao">
        <span onclick="avaliar(this,1)">⭐</span>
        <span onclick="avaliar(this,2)">⭐</span>
        <span onclick="avaliar(this,3)">⭐</span>
        <span onclick="avaliar(this,4)">⭐</span>
        <span onclick="avaliar(this,5)">⭐</span>
      </div>
    ` : ""}
  `;

  lista.prepend(div);
}

// ✅ comentários iniciais COM avaliação
function carregarComentariosIniciais() {
  const comentarios = [
    {
      nome: "Maria Silva",
      foto: "img/user2.jpg",
      mensagem: "Atendimento excelente! Me senti muito bem cuidada."
    },
    {
      nome: "João Pereira",
      foto: "img/user3.jpg",
      mensagem: "Profissionais muito qualificados, recomendo!"
    },
    {
      nome: "Ana Souza",
      foto: "img/user4.jpg",
      mensagem: "Meu sorriso mudou completamente!"
    }
  ];

  comentarios.forEach(c => {
    criarComentario(c.nome, c.foto, c.mensagem, true);
  });
}

// ✅ sistema de estrelas
function avaliar(elemento, nota) {
  const estrelas = elemento.parentElement.querySelectorAll("span");

  estrelas.forEach((estrela, index) => {
    estrela.style.opacity = index < nota ? "1" : "0.3";
  });
}

// ✅ WhatsApp
function abrirWhats(servico) {
  const numero = "5551997320616";
  const mensagem = `Olá, tenho interesse em ${servico}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

let tamanhoFonte = 16;

function aumentarFonte() {
  tamanhoFonte += 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
  tamanhoFonte -= 2;
  document.body.style.fontSize = tamanhoFonte + "px";
}