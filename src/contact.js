import CreateElement from './create-element';
import Map from './map.png';

export default function menu() {
  const bodyContent = CreateElement('div', '', 'body-content');

  const divHeadline = CreateElement('div', '', 'headline');
  const phoneTitle = CreateElement('h2', 'Phone Number:', 'heading');
  const phoneText = CreateElement('p', '(123) 543-6240', 'text');
  const locationTitle = CreateElement('h2', 'Location:', 'heading');
  const locationText = CreateElement('p', '123 Fake Street, New York City, NY, USA', 'text');
  const map = new Image();
  map.src = Map;
  map.classList.add('map-img');

  divHeadline.append(phoneTitle, phoneText, locationTitle, locationText, map);

  bodyContent.append(divHeadline);
  const mainDiv = document.querySelector('#content');
  mainDiv.append(bodyContent);
}