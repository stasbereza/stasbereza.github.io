"use strict";

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;
  // return the array of all users
  this.getAllUsers = function () {
    return this.users;
  };
  // find user by login
  this.getUserByLogin = function (login) {
    return this.users.find(user => user.login === login);
  };
  // find user by id, return string 'active' if isActive=true, else return 'inactive'
  this.getUserStatus = function (userId) {
    const getUserById = this.users.find(user => user.id === userId);

    return getUserById.isActive ? 'active' : 'inactive';
  };
  // add new user, return the array of all users with new user
  this.addUser = function (user) {
    user.id = getId();
    user.isActive = false;
    this.users.push(user);
    console.log('added new user: ', user);

    return this.users;
  };
  // remove user by id, return new array of all users without matched user 
  this.removeUserById = function (userId) {
    return this.users.filter(user => user.id !== userId);
  };
  // count the number of all users
  this.getUsersCount = function () {
    //return this.users.length;
    return this.users.reduce((acc, user) => acc + 1, 0);
  };
  // return the array of user's posts by userId
  this.getUserPosts = function (userId) {
    return this.posts[userId];
  };
  // add new post, return the array of all user's posts with new post  
  this.addPost = function (userId, post) {
    this.posts[userId].push(post);
    console.log('added new post: ', post)

    return this.posts[userId];
  };
  // remove user's post by id, return new array of posts without matched post 
  this.removePost = function (userId, postId) {
    return this.posts[userId].filter(post => post.id !== postId);
  };
  // count the sum of all likes of matched user 
  this.getAllLikes = function (userId) {
    return this.posts[userId].reduce((acc, post) => acc + post.likes, 0);
  };
  // add +1 like to the certain post of matched user
  this.addPostLike = function (userId, postId) {
    const postLikesPlusOne = this.posts[userId].find(post => post.id === postId).likes + 1;

    return this.posts[userId].map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: postLikesPlusOne,
        };
      }

      return post;
    });
  };
  // count the number of all posts of matched user
  this.getPostsCount = function (userId) {
    //return this.posts[userId].length;
    return this.posts[userId].reduce((acc, post) => acc + 1, 0);
  };
}

const initialUsers = [{
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [{
      id: "-5sgljaskg",
      text: "post #1",
      likes: 3
    },
    {
      id: "-199hb6igr",
      text: "post #2",
      likes: 5
    },
    {
      id: "-hy0eyw5qo",
      text: "post #3",
      likes: 13
    }
  ],
  "-qkpzenjxe": [{
      id: "-5tu69g5rf",
      text: "post #1",
      likes: 8
    },
    {
      id: "-bje766393",
      text: "post #2",
      likes: 15
    }
  ],
  "-e51cpd4di": [{
      id: "-9y6nkmlj4",
      text: "post #1",
      likes: 18
    },
    {
      id: "-i03pbhy3s",
      text: "post #2",
      likes: 45
    }
  ],
};

const getId = () => "-" + Math.random().toString(36).substr(2, 9);

const newUserOne = {
  login: "stanislav.bereza@gmail.com",
  password: "rasd123"
}

const newUserTwo = {
  login: "somebodyelse@gmail.com",
  password: "qwe123"
}

const socialBook = new SocialBook(initialUsers, initialPosts);
console.log(socialBook);

console.log('the array of all users: ', socialBook.getAllUsers());

console.log('user by login "mangozedog@mail.com": ', socialBook.getUserByLogin('mangozedog@mail.com'));
console.log('user by login "polysweet@skynet.ze": ', socialBook.getUserByLogin('polysweet@skynet.ze'));
console.log('user by login "ajax2k@change.ua": ', socialBook.getUserByLogin('ajax2k@change.ua'));

console.log('user by id "-s19a6hqce": ', socialBook.getUserStatus('-s19a6hqce'));
console.log('user by id "-qkpzenjxe": ', socialBook.getUserStatus('-qkpzenjxe'));
console.log('user by id "-e51cpd4di": ', socialBook.getUserStatus('-e51cpd4di'));

console.log('the array with new user: ', socialBook.addUser(newUserOne));
console.log('the array with new user: ', socialBook.addUser(newUserTwo));

console.log('new array without user "-s19a6hqce": ', socialBook.removeUserById('-s19a6hqce'));
console.log('new array without user "-qkpzenjxe": ', socialBook.removeUserById('-qkpzenjxe'));
console.log('new array without user "-e51cpd4di": ', socialBook.removeUserById('-e51cpd4di'));

console.log('the number of all users: ', socialBook.getUsersCount());

console.log('the array of user\'s posts by userId "-s19a6hqce": ', socialBook.getUserPosts('-s19a6hqce'));
console.log('the array of user\'s posts by userId "-qkpzenjxe": ', socialBook.getUserPosts('-qkpzenjxe'));
console.log('the array of user\'s posts by userId "-e51cpd4di": ', socialBook.getUserPosts('-e51cpd4di'));

console.log('the array of user\'s posts with new post: ', socialBook.addPost('-s19a6hqce', {
  id: getId(),
  text: "post #4",
  likes: 0
}));
console.log('the array of user\'s posts with new post: ', socialBook.addPost('-qkpzenjxe', {
  id: getId(),
  text: "post #3",
  likes: 0
}));
console.log('the array of user\'s posts with new post: ', socialBook.addPost('-e51cpd4di', {
  id: getId(),
  text: "post #3",
  likes: 0
}));

console.log('new array of user "-s19a6hqce" posts without post #3 ', socialBook.removePost('-s19a6hqce', '-hy0eyw5qo'));
console.log('new array of user "-qkpzenjxe" posts without post #2 ', socialBook.removePost('-qkpzenjxe', '-bje766393'));
console.log('new array of user "-e51cpd4di" posts without post #1 ', socialBook.removePost('-e51cpd4di', '-9y6nkmlj4'));

console.log('the sum of all likes of user "-s19a6hqce": ', socialBook.getAllLikes('-s19a6hqce'));
console.log('the sum of all likes of user "-qkpzenjxe": ', socialBook.getAllLikes('-qkpzenjxe'));
console.log('the sum of all likes of user "-e51cpd4di": ', socialBook.getAllLikes('-e51cpd4di'));

console.log('added +1 like to the post #3 of user "-s19a6hqce": ', socialBook.addPostLike('-s19a6hqce', '-hy0eyw5qo'));
console.log('added +1 like to the post #2 of user "-qkpzenjxe": ', socialBook.addPostLike('-qkpzenjxe', '-bje766393'));
console.log('added +1 like to the post #1 of user "-e51cpd4di": ', socialBook.addPostLike('-e51cpd4di', '-9y6nkmlj4'));

console.log('the number of all posts of user "-s19a6hqce": ', socialBook.getPostsCount('-s19a6hqce'));
console.log('the number of all posts of user "-qkpzenjxe": ', socialBook.getPostsCount('-qkpzenjxe'));
console.log('the number of all posts of user "-e51cpd4di": ', socialBook.getPostsCount('-e51cpd4di'));