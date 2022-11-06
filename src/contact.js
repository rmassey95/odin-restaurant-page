import CreateElement from './create-element';

export default function menu() {
  const bodyContent = CreateElement('div', '', 'body-content');

  const mainDiv = document.querySelector('#content');
  mainDiv.append(bodyContent);
}