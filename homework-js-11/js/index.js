"use strict";

const laptops = [{
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];

const rowLaptops = document.querySelector('.js-row-laptops');
const form = document.querySelector('.js-form');
const btnReset = form.querySelector('.js-btn-reset')
const source = document.querySelector('#laptop-card').innerHTML.trim();
const template = Handlebars.compile(source);

const markup = laptops.reduce((acc, laptop) => acc + template(laptop), '');

rowLaptops.insertAdjacentHTML('afterbegin', markup);

const filter = {
  size: [],
  color: [],
  release_date: []
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const checkboxes = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'));

  const filter = checkboxes.reduce((acc, checkbox) => {
    acc[checkbox.name].push(checkbox.value);
    return acc;
  }, {
    size: [],
    color: [],
    release_date: []
  })

  const filterLaptops = filter => laptops.filter(laptop => {
    if (
      (filter.size.includes(laptop.size.toString()) && filter.color.includes(laptop.color) && filter.release_date.includes(laptop.release_date.toString())) ||
      (filter.size.includes(laptop.size.toString()) && filter.color.includes(laptop.color)) ||
      (filter.size.includes(laptop.size.toString()) && filter.release_date.includes(laptop.release_date.toString())) ||
      (filter.color.includes(laptop.color) && filter.release_date.includes(laptop.release_date.toString())) ||
      filter.size.includes(laptop.size.toString()) ||
      filter.color.includes(laptop.color) ||
      filter.release_date.includes(laptop.release_date.toString())
    ) {
      return laptop;
    }
  });

  const filteredLaptops = filterLaptops(filter);

  const filteredMarkup = filteredLaptops.reduce((acc, filteredLaptop) => acc + template(filteredLaptop), '');

  rowLaptops.innerHTML = filteredMarkup;

  btnReset.addEventListener('click', handleReset);

  function handleReset() {
    rowLaptops.innerHTML = markup;
  }
})