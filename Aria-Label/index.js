const btns = document.querySelectorAll('.btn');

function openInfo(event) {
  const news = event.target.closest('li');
  news.classList.toggle('show-text');
  if (news.className.includes('show-text')) {
    event.target.innerText = '+';
    console.log(event.t)
    event.target.setAttribute('aria-label', 'Exibir Noticia')
} else {
    event.target.innerText = 'X';
    event.target.setAttribute('aria-label', 'Fechar Noticia')
}
}

btns.forEach((elem) => {
    elem.addEventListener('click', openInfo);
});