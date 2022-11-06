import './styles.css';
import homepage from './homepage';
import clearScreen from './clearScreen';
import header from './header';
import menu from './menu';
import contact from './contact';

document.querySelector('#content').append(header());
homepage();

const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    clearScreen();
    if (e.target.innerText === "Home"){
      homepage();
    } else if (e.target.innerText === 'Menu'){
      menu();
    } else {
      contact();
    }
  })
}