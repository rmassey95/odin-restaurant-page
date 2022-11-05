import './styles.css';
import HeaderIcon from './header-icon.png';

function header(){
  const header = makeElement('div');
  const headerIcon = new Image();
  const headerText = makeElement('h2');
  headerIcon.src = HeaderIcon;

  addClassList(headerText, 'header-text');
  addClassList(headerIcon, 'header-icon');
  addClassList(header, 'header-container');

  headerText.innerText = "Ryan's Restaurant";

  header.appendChild(headerIcon);
  header.appendChild(headerText);

  return header;
}

function headline(){
  const divHeadline = makeElement('div');
  const headlineTitle = makeElement('h2');
  const headlineText = makeElement('p');

  addClassList(headlineTitle, 'heading');
  addClassList(headlineText, 'text');
  addClassList(divHeadline, 'headline');

  headlineTitle.innerText = 'Headline:';
  headlineText.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro perspiciatis, expedita rem ut in voluptas aut quae sapiente incidunt unde excepturi dolorem a, voluptatibus quidem consequuntur blanditiis eius doloremque doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora excepturi, maiores velit dolor quasi impedit iure at ipsum temporibus eligendi, hic et voluptatum fuga architecto! Optio distinctio porro commodi.';

  divHeadline.appendChild(headlineTitle);
  divHeadline.appendChild(headlineText);

  return divHeadline;
}

function review(){
  const review = makeElement('div');
  const reviewContainer = makeElement('div');
  const reviewHeading = makeElement('h2');
  const reviewText = makeElement('p');
  const reviewAuthor = makeElement('p');

  addClassList(review, 'review');
  addClassList(reviewContainer, 'review-container');
  addClassList(reviewHeading, 'heading');
  addClassList(reviewText, 'text');
  addClassList(reviewAuthor, 'text');
  addClassList(reviewAuthor, 'customer-name');

  reviewText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore rem exercitationem quae eum possimus corrupti perspiciatis? A dicta consequuntur cupiditate quo, perspiciatis temporibus voluptatum ipsam beatae corrupti sapiente.'
  reviewAuthor.innerText = '- Customer One';
  reviewHeading.innerText = 'Customer Review:';

  reviewContainer.appendChild(reviewHeading);
  reviewContainer.appendChild(reviewText);
  reviewContainer.appendChild(reviewAuthor);

  review.appendChild(reviewContainer);

  return review;
}

function hours(){
  const hours = makeElement('div');
  const hoursContent = makeElement('div');
  const hoursHeading = makeElement('h2');
  const hoursText = makeElement('p');

  addClassList(hours, 'hours');
  addClassList(hoursContent, 'hours-content');
  addClassList(hoursHeading, 'heading');
  addClassList(hoursText, 'text');

  hoursHeading.innerText = 'Hours:';
  hoursText.innerHTML = 'Monday: 1 pm - 10 pm<br>Tuesday: 1 pm - 10 pm<br>Wednesday: 1 pm - 10 pm<br>Thursday: 1 pm - 10 pm<br>Friday: 1 pm - 1 am<br>Saturday: 1 pm - 1 am<br>Sunday: 1 pm - 10 pm';

  hoursContent.appendChild(hoursHeading);
  hoursContent.appendChild(hoursText);

  hours.appendChild(hoursContent);

  return hours;
}

function appendElements(){
  const mainDiv = document.querySelector('#content');
  const bodyContent = makeElement('div');

  addClassList(bodyContent, 'body-content');

  mainDiv.appendChild(header());
  bodyContent.appendChild(headline());
  bodyContent.appendChild(review());
  bodyContent.appendChild(hours());
  
  mainDiv.appendChild(bodyContent);
}

function addClassList(element, className){
  element.classList.add(className);
}

function makeElement(element){
  return document.createElement(element);
}

appendElements();