"use strict";

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 4 (https://codepen.io/stasbereza/pen/RJpgMQ?editors=1010) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [{
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/tech",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
]

const container = document.querySelector('.container');

const cards = createCards(posts);
container.innerHTML = cards;

function createCards(arr) {

  return arr.reduce(
    (acc, post) => acc + createPostCard(post),
    ''
  );

  // let postCards = '';

  // arr.forEach(post => {
  // const postCard = createPostCard(post);
  // postCards += postCard;
  // });

  // return postCards;
}

function createPostCard({
  img,
  title,
  text,
  stats
}) {
  const post = `
  <div class="post">
    <img class="post__image" src=${img}>
    <h2 class="post__title">${title}</h2>
     <p class="post__text">${text}</p>

    <ul class="actions post__actions">
      <li class="actions__item">
          <button class="actions__btn ">
              <span class="actions__icon actions__icon--like"></span>
              <span class="actions__count">${stats.likes}</span>
          </button>
      </li>
      <li class="actions__item">
          <button class="actions__btn">
              <span class="actions__icon actions__icon--dislike"></span>
              <span class="actions__count">${stats.dislikes}</span>
          </button>
      </li>
      <li class="actions__item">
          <button class="actions__btn">
              <span class="actions__icon actions__icon--fav"></span>
              <span class="actions__count">${stats.fav}</span>
          </button>
      </li>
    </ul>
  </div>
  `
  return post;
}