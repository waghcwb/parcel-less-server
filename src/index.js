import header from './components/header/header.html'

console.log('hi')

Array.from(document.querySelectorAll('.js-component-loader')).forEach((div) => {
  const component = div.getAttribute('data-component')

  switch (component) {
    case 'header':
      div.innerHTML = header;
      break;
    default:
      break;
  }
})