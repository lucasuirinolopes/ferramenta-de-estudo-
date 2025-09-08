// Seleciona o elemento flashcard
const flashcard = document.querySelector('.flashcard');

// Adiciona um "ouvinte" de evento de clique
flashcard.addEventListener('click', () => {
    // Alterna a classe 'flip' no flashcard
    flashcard.classList.toggle('flip');
});
