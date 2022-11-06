export default function CreateElement(element, text, ...args){
  const docElement = document.createElement(element);
  if (text != ''){
    docElement.innerHTML = text;
  }
  args.forEach(element => {
    docElement.classList.add(element);
  });

  return docElement;
}