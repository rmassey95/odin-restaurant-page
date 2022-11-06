export default function clearScreen(clearPageName){
  const bodyContent = document.querySelector('.body-content');

  if (bodyContent === null){
    document.querySelector('.menu-content').remove();
  } else {
    bodyContent.remove();
  }
}