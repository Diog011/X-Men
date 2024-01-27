alert ('Site perigoso, saia imediatamente ! !')



//Objetivo 1 - Quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo

 //passo 1: Pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em
 //cima de um deles
 
const personagens = document.querySelectorAll('.personagem')

//passo2: Adicionar classe selecionado no personagem que o usuário passar o cursor do mouse*/

personagens.forEach(personagem => {
    personagem.addEventListener ('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }

//passo3: verificar se já existe um personagem selecionado, se sim, devemos remover a classe*/
const personagemSelecionado = document.querySelector('.selecionado');
personagemSelecionado.classList.remove('selecionado');

personagem.classList.add('selecionado');

//- Objetivo 2 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    
//passo1: Pegar o elemento do personagem grande pra a adicionar as informações nele

const imagemPersonagemGrande = document.querySelector('.personagem-grande');

//passo2: Alterar a imagem do personagem grande

const idPersonagem = personagem.attributes.id.value;

imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

//passo3: Alterar o nome do personagem grande

const nomePersonagem = document.getElementById('nome-personagem');

nomePersonagem.innerText = personagem.getAttribute('data-name');

//passo4: Alterar a descrição do personagem grande
const descricaoPersonagem = document.getElementById('descricao-personagem');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');


    })
})

 

 
