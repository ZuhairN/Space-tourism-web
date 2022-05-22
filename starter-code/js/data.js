const pages = ['destination', 'crew', 'technology'];
const tabs = ['tab-1', 'tab-2', 'tab-3', 'tab-4'];
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
const cont = mainContent.children;
const btns = document.querySelectorAll('.btn-tabs');

window.addEventListener('load', (event) => {
  if (window.innerWidth > 57 * 16) {
    img.src = img.src.replace('-landscape.', '-portrait.');
  }
});

function changeImg() {
  if (window.innerWidth > 57 * 16) {
    img.src = img.src.replace('-landscape.', '-portrait.');
  } else {
    img.src = img.src.replace('-portrait.', '-landscape.');
  }
}
window.onresize = changeImg;
tabList.addEventListener('click', (e) => {
  const str = e.target.value;
  if (e.target.getAttribute('class') === 'btn-tabs') {
    for (let i = 0; i < 4; i++) {
      if (btns[i]) {
        btns[i].setAttribute('aria-selected', false);
      }
      if (document.URL.indexOf(pages[i]) > 0) {
        page = pages[i];
      }
      if (str.indexOf(tabs[i]) === 0) {
        tab = i;
      }
    }
    e.target.setAttribute('aria-selected', true);
    const object = data[page][tab];
    if (page === 'destination') {
      const meta = document.querySelector('.sub-content').children;
      img.src = object.images.webp;
      img.alt = `The ${object.name}`;
      cont[0].textContent = object.name;
      cont[1].textContent = object.description;
      meta[0].children[1].textContent = object.distance;
      meta[1].children[1].textContent = object.travel;
    } else if (page === 'crew') {
      img.src = object.images.webp;
      img.alt = object.name;
      cont[0].innerHTML = `<span>${object.role}</span><br/>${object.name}`;
      cont[1].textContent = object.bio;
    } else {
      if (window.innerWidth < 57 * 16) {
        img.src = object.images.landscape;
      } else {
        img.src = object.images.portrait;
      }
      img.alt = `The ${object.name}`;
      cont[0].innerHTML = `<span>The terminology...</span><br/>${object.name}`;
      cont[1].textContent = object.description;
    }
  }
});
