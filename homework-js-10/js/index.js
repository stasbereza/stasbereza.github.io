"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const btnGetUsers = document.querySelector('.js-get-users');
  const btnGetUser = document.querySelector('.js-get-user');
  const btnAddUser = document.querySelector('.js-add-user');
  const btnDelUser = document.querySelector('.js-del-user');
  const btnUpdateUser = document.querySelector('.js-update-user');

  const columnOne = document.querySelector('.js-column-1');
  const columnTwo = document.querySelector('.js-column-2');

  const inputIdGet = document.querySelector('.js-input-get-id');
  const inputNameAdd = document.querySelector('.js-input-add-name');
  const inputAgeAdd = document.querySelector('.js-input-add-age');
  const inputIdDel = document.querySelector('.js-input-del-id');
  const inputIdUpdate = document.querySelector('.js-input-update-id');
  const inputNameUpdate = document.querySelector('.js-input-update-name');
  const inputAgeUpdate = document.querySelector('.js-input-update-age');

  const modal = document.querySelector('#modal1');
  const modalContent = document.querySelector(".modal-content");

  const instances = M.Modal.init(modal, {
    inDuration: 500,
  });
  const instance = M.Modal.getInstance(modal);

  const createModalContent = text => {
    const modalContentMarkup =
      `<h4>Notice:</h4>
       <p>${text}</p>
      `;

    return modalContentMarkup;
  }

  const updateModalContent = markup => {
    modalContent.innerHTML = markup;
  }

  const showModal = message => {
    const markup = createModalContent(message);
    updateModalContent(markup);
    instance.open();
  }

  const preloader = document.querySelector(".preloader-wrapper");
  const togglePreloader = () => preloader.classList.toggle('active');

  // ======================== GET ALL USERS =============================  
  const getAllUsers = () => {
    const url = "https://test-users-api.herokuapp.com/users";

    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error' + response.statusText);
      })
      .then(data => data.data)
      .catch(error => {
        console.log(error);
      })
  }

  const createUserCards = userCards => {
    return userCards.reduce(
      (acc, user) =>
      acc +
      `<table class="striped z-depth-3">
        <tr>
          <th>ID</th>
          <td>${user.id}</td>
         </tr>
         <tr>
            <th>NAME</th>
            <td>${user.name}</td>
         </tr>
         <tr>
            <th>AGE</th>
            <td>${user.age}</td>
         </tr>
       </table>  
      `,
      ""
    )
  };

  const updateColumnOne = markup => {
    columnOne.insertAdjacentHTML('beforeend', markup);
  }

  const handleGetUsersSubmit = event => {
    event.preventDefault();
    togglePreloader();

    getAllUsers().then(users => {
      const markup = createUserCards(users);
      updateColumnOne(markup);
      togglePreloader();
    })
  }

  // ========================= GET USER BY ID ===========================   
  const getUserById = id => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    return fetch(url)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error' + response.statusText);
      })
      .then(data => data.data)
      .catch(error => {
        console.log(error);
      })
  }

  const createUserCard = user => {
    const userCardMarkup =
      `<table class="striped z-depth-3">
        <tr>
          <th>ID</th>
          <td>${user.id}</td>
         </tr>
         <tr>
            <th>NAME</th>
            <td>${user.name}</td>
         </tr>
         <tr>
            <th>AGE</th>
            <td>${user.age}</td>
         </tr>
       </table>  
      `;

    return userCardMarkup;
  };

  const updateColumnTwo = markup => {
    columnTwo.insertAdjacentHTML('beforeend', markup);
  }

  const handleGetUserSubmit = event => {
    event.preventDefault();

    const userId = inputIdGet.value;

    if (userId === "") {
      showModal("Fill out user's ID field!");
      return;
    }

    getUserById(userId).then(user => {
      if (user === undefined) {
        showModal(`User with ID "${userId}" has not existed!`);
      }

      const markup = createUserCard(user);
      updateColumnTwo(markup);
    });

    inputIdGet.value = "";
  }

  // ============================= ADD USER =============================  
  const addUser = (name, age) => {
    const url = `https://test-users-api.herokuapp.com/users`;

    const newUser = {
      name,
      age,
    };

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    };

    return fetch(url, options)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error' + response.statusText);
      })
      .then(data => data.data)
      .catch(error => {
        console.log(error);
      })
  }

  const handleAddUserSubmit = event => {
    event.preventDefault();

    const userName = inputNameAdd.value;
    const userAge = inputAgeAdd.value;

    if (userName === "" || userAge === "") {
      showModal("All input fields must be filled out!");
    } else {
      addUser(userName, userAge).then(user => {
        showModal(`User "${userName}" has been added! User's ID: "${user._id}"`);

        return user;
      });
    }

    inputNameAdd.value = "";
    inputAgeAdd.value = "";
  }

  // ============================= DELETE USER ==========================  
  const removeUser = id => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    return fetch(url, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error' + response.statusText);
      })
      .then(data => data.data)
      .catch(error => {
        console.log(error);
      })
  }

  const handleDelUserSubmit = event => {
    event.preventDefault();

    const userId = inputIdDel.value;

    if (userId === "") {
      showModal("Fill out user's ID field!");
      return;
    }

    removeUser(userId).then(user => {
      if (user === undefined || user === null) {
        showModal(`User with ID "${userId}" has not existed!`);
      }

      showModal(`User with ID "${user.id}" has been deleted!`);
    });

    inputIdDel.value = "";
  }

  // ============================ UPDATE USER =============================

  const updateUser = (id, name, age) => {
    const url = `https://test-users-api.herokuapp.com/users/${id}`;

    const userToUpdate = {
      name,
      age,
    };

    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userToUpdate),
    };

    return fetch(url, options)
      .then(response => {
        if (response.ok) return response.json();

        throw new Error('Error' + response.statusText);
      })
      .then(data => data.data)
      .catch(error => {
        console.log(error);
      })
  }

  const handleUpdateUserSubmit = event => {
    event.preventDefault();

    const userId = inputIdUpdate.value;
    const userName = inputNameUpdate.value;
    const userAge = inputAgeUpdate.value;

    if (userId === "" || userName === "" || userAge === "") {
      showModal("All input fields must be filled out!");
    } else {
      updateUser(userId, userName, userAge).then(user => {
        if (user === undefined) {
          showModal(`User with ID "${userId}" has not existed!`);
        }

        showModal(`User with ID "${user.id}" has been updated!`);

        return user;
      });
    }

    inputIdUpdate.value = "";
    inputNameUpdate.value = "";
    inputAgeUpdate.value = "";
  }

  btnGetUsers.addEventListener('click', handleGetUsersSubmit);
  btnGetUser.addEventListener('click', handleGetUserSubmit);
  btnAddUser.addEventListener('click', handleAddUserSubmit);
  btnDelUser.addEventListener('click', handleDelUserSubmit);
  btnUpdateUser.addEventListener('click', handleUpdateUserSubmit);
})