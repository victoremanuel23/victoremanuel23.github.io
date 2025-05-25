const buttons = document.querySelectorAll('.btn-menu');
const sections = document.querySelectorAll('.section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');

    // Remove active de todas as seções
    sections.forEach(section => section.classList.remove('active'));

    // Ativa a seção alvo
    const targetSection = document.getElementById(target);
    if (targetSection) targetSection.classList.add('active');

    // Ajusta botão ativo
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
