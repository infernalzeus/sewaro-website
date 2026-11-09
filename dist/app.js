const dishPhotos = new Map([
  ['Chicken Shapale', ['shapale.jpg', 'Two golden fried shapale']],
  ['Chicken Chilli Mo:Mo', ['chilli-momo.jpg', 'Chilli mo:mo with peppers']],
  ['Vegetable Chowmein', ['chowmein.jpg', 'Stir-fried noodles and vegetables']],
  ['Crispy Pork Belly Thukpa', ['thukpa.jpg', 'Thukpa noodle soup with lime']],
]);

function appendDishPhoto(article, name) {
  const photo = dishPhotos.get(name);
  if (!photo) return;

  const [file, description] = photo;
  const image = document.createElement('img');
  image.className = 'menu-item-photo';
  image.src = 'assets/' + file;
  image.alt = description;
  image.loading = 'lazy';
  image.width = 88;
  image.height = 88;
  article.classList.add('has-photo');
  article.append(image);
}

let groups=[],selected='All';const list=document.querySelector('#menu-list'),filters=document.querySelector('#filters'),search=document.querySelector('#search');function render(){list.replaceChildren();let count=0;for(const [category,items] of groups){if(selected!=='All'&&selected!==category)continue;const matches=items.filter(i=>(i[0]+' '+i[2]).toLowerCase().includes(search.value.trim().toLowerCase()));if(!matches.length)continue;count+=matches.length;const section=document.createElement('section');section.className='menu-group';const heading = document.createElement('div');
heading.className = 'menu-group-heading';
const title = document.createElement('h3');
title.textContent = category;
heading.append(title);
section.append(heading);
const grid=document.createElement('div');grid.className='dishes';for(const [name,price,description]of matches){const article=document.createElement('article');article.className='menu-item';const h=document.createElement('h4');h.textContent=name;const cost=document.createElement('span');cost.className='price';cost.textContent='£'+price;const p=document.createElement('p');p.textContent=description;article.append(h,cost,p);
appendDishPhoto(article, name);
grid.append(article)}section.append(grid);list.append(section)}document.querySelector('#empty').hidden=count>0}fetch('assets/menu.json').then(r=>{if(!r.ok)throw Error('menu');return r.json()}).then(data=>{groups=data;for(const category of ['All',...groups.map(g=>g[0])]){const b=document.createElement('button');b.textContent=category;b.type='button';b.setAttribute('aria-pressed',String(category===selected));b.addEventListener('click',()=>{selected=category;for(const el of filters.children)el.setAttribute('aria-pressed',String(el===b));render()});filters.append(b)}render()}).catch(()=>{list.textContent='The menu could not load. Please call 07882 926835 for our current menu.'});search.addEventListener('input',render);
