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

tabList.addEventListener('click', (e) => {
  const str = e.target.value;
  console.log(str);
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
    e.target.setAttribute('aria-selected', true);
    const object = data[page][tab];
    console.log(object);
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
    }
  }
});
