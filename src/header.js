import HeaderIcon from './header-icon.png';
import CreateElement from './create-element';

export default function header(){
  const headerIcon = new Image();
  headerIcon.src = HeaderIcon;

  headerIcon.classList.add('header-icon');

  const header = CreateElement('div', '', 'header-container');
  const headerText = CreateElement('h2', "Ryan's Restaurant", 'header-text');
  const btns = CreateElement('div', '', 'btns');
  const btnNames = ['Home', 'Menu', 'Contact'];
  btnNames.forEach(name => {
    const btn = CreateElement('button', name, 'btn');
    btns.append(btn);
  });

  const headerContainer = CreateElement('div', '', 'txt-img');

  headerContainer.append(headerIcon, headerText);
  header.append(headerContainer, btns);

  return header;
}