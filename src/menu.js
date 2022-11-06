import CreateElement from './create-element';
import Pasta from './pasta.jpg'
import Cheesecake from './cheesecake.jpg'
import Chicken from './chkn.jpg'
import ChickenSalad from './chkn-salad.jpg'
import Eggs from './eggs.jpg'
import FrenchToast from './french-toast.jpg'
import IceCream from './ice-cream.jpg'
import Meatballs from './meatballs.jpg'
import Pancakes from './pancake.jpg'
import Salad from './salad.jpg'
import SaladBowl from './salad-bowl.jpg'
import Slider from './slider.jpg'

export default function menu() {
  const menuContent = CreateElement('div', '', 'menu-content');
  const cards = [];
  const imgs = [];
  const titles = [];
  const text = [];
  const prices = [];
  const menuItems = {imgLinks: [Pasta, Cheesecake, Chicken, ChickenSalad, Eggs, FrenchToast, IceCream, Meatballs, Pancakes, Salad, SaladBowl, Slider],
    imgNames: ['Pasta', 'Cheesecake', 'Chicken', 'Chicken Salad', 'Eggs', 'French Toast', 'Ice Cream', 'Meatballs', 'Pancakes', 'Salad', 'Salad Bowl', 'Slider'],
    imgText: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error', 'Lorem ipsum dolor sit', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
    prices: ['$12.99', '$13.99', '$15.99', '$6.99', '$16.99', '$12.99', '$24.99', '$16.99', '$9.99', '$12.99', '$13.99', '$27.99']};

  for (let i = 0; i < 12; i++) {
    cards[i] = CreateElement('div', '', 'card');
    imgs[i] = new Image();
    imgs[i].src = menuItems['imgLinks'][i];
    imgs[i].classList.add('menu-img');

    titles[i] = CreateElement('p', menuItems['imgNames'][i], 'menu-title', 'menu-text');
    text[i] = CreateElement('p', menuItems['imgText'][i], 'menu-text');
    prices[i] = CreateElement('p', menuItems['prices'][i], 'menu-text', 'menu-prices');


    cards[i].append(imgs[i], titles[i], text[i], prices[i]);
    menuContent.append(cards[i]);
  }

  const mainDiv = document.querySelector('#content');
  mainDiv.append(menuContent);
}