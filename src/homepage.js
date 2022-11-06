import CreateElement from './create-element';
import header from './header';

function headline(){

  const divHeadline = CreateElement('div', '', 'headline');
  const headlineTitle = CreateElement('h2', 'Headline:', 'heading');
  const headlineText = CreateElement('p', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro perspiciatis, expedita rem ut in voluptas aut quae sapiente incidunt unde excepturi dolorem a, voluptatibus quidem consequuntur blanditiis eius doloremque doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora excepturi, maiores velit dolor quasi impedit iure at ipsum temporibus eligendi, hic et voluptatum fuga architecto! Optio distinctio porro commodi.', 'text');

  divHeadline.append(headlineTitle, headlineText);

  return divHeadline;
}

function review(){

  const review = CreateElement('div', '', 'review');
  const reviewContainer = CreateElement('div', '', 'review-container');
  const reviewHeading = CreateElement('h2', 'Customer Review:', 'heading');
  const reviewText = CreateElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error labore rem exercitationem quae eum possimus corrupti perspiciatis? A dicta consequuntur cupiditate quo, perspiciatis temporibus voluptatum ipsam beatae corrupti sapiente.', 'text');
  const reviewAuthor = CreateElement('p', '- Customer One', 'text', 'customer-name');

  reviewContainer.append(reviewHeading, reviewText, reviewAuthor);

  review.appendChild(reviewContainer);

  return review;
}

function hours(){

  const hours = CreateElement('div', '', 'hours');
  const hoursContent = CreateElement('div', '', 'hours-content');
  const hoursHeading = CreateElement('h2', 'Hours:', 'heading');
  const hoursText = CreateElement('p', 'Monday: 1 pm - 10 pm<br>Tuesday: 1 pm - 10 pm<br>Wednesday: 1 pm - 10 pm<br>Thursday: 1 pm - 10 pm<br>Friday: 1 pm - 1 am<br>Saturday: 1 pm - 1 am<br>Sunday: 1 pm - 10 pm', 'text');

  hoursContent.append(hoursHeading, hoursText);

  hours.appendChild(hoursContent);

  return hours;
}

export default function appendElements(){
  const mainDiv = document.querySelector('#content');
  const bodyContent = CreateElement('div', '', 'body-content');

  bodyContent.append(headline(), review(), hours());
  mainDiv.append(bodyContent);
}