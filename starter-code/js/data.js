const pages = ['destination', 'crew', 'technology'];
const tabs = ['moon', 'mars', 'europa', 'titan'];
let data;
let page;
let tab;

async function json() {
  const content = await fetch('data.json');
  const data = await content.json();
  return data;
}
json().then((content) => {
  data = content;
});

const tabList = document.querySelector('.tab-list');
const img = document.querySelector('.img');
const mainContent = document.querySelector('.content');
const metaData = document.querySelector('.sub-content');
const cont = mainContent.children;
const meta = metaData.children;
const btns = document.querySelectorAll('.btn-tabs');

tabList.addEventListener('click', (e) => {
  const str = e.target.value;
  if (e.target.getAttribute('class') === 'btn-tabs') {
    for (let i = 0; i < 4; i++) {
      btns[i].setAttribute('aria-selected', false);
      if (e.target.ownerDocument.URL.indexOf(pages[i]) > 0) {
        page = pages[i];
      }
      if (str.indexOf(tabs[i]) === 0) {
        tab = i;
      }
    }
    console.log(data[page][tab]);
    e.target.setAttribute('aria-selected', true);

    img.src = `./assets/destination/image-${str}.webp`;
    img.alt = `The ${data[page][tab].name}`;

    cont[0].textContent = data[page][tab].name;
    cont[1].textContent = data[page][tab].description;
    meta[0].children[1].textContent = data[page][tab].distance;
    meta[1].children[1].textContent = data[page][tab].travel;
  }
});
