const parentDiv = document.querySelector('.feed__content');
if (parentDiv) {
  console.log('Elemento pai com classe ".Feed__content" encontrado!');

  function contarDivsFilhas() {
    const numDivs = parentDiv.querySelectorAll('div').length;
    console.log(`Número de divs filhas em .Feed__content: ${numDivs}`);
  }
  
  contarDivsFilhas();
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        for (const node of mutation.addedNodes) {
          if (node.nodeName === 'DIV') {
            console.log('Uma div foi encontrada!');
            setTimeout(() => {
              const firstButton = node.querySelector('button');
              if (firstButton) {
                firstButton.click();
                console.log('Botão clicado!');
              } else {
                console.log('Nenhum botão foi encontrado dentro da div.');
              }
              contarDivsFilhas();
            }, 100);
          } else {
            console.log('Um nó diferente de uma div foi adicionado.');
          }
        }
      }
    }
  });
  observer.observe(parentDiv, {
    childList: true,
    subtree: true
  });

}
else {
  console.error('Elemento pai com classe ".Feed__content" não encontrado.');
}
