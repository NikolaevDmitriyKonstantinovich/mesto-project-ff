const token = "f9abb9cd-6bca-4f92-b508-e5a8964bae2f";
const groupId = "wff-cohort-10";

const handleResponse = (res) => {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

const getInitialCards = () => {
  return fetch("https://nomoreparties.co/v1/cohort-42/cards", {
    headers: {
      authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    },
  })
    .then(handleResponse)
};

export const getUserInfo = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-10/users/me", {
    method: "GET",
    headers: {
      authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
    },
  })
    .then(handleResponse)
};

export const getCardInfo = () => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-10/cards", {
    method: "GET",
    headers: {
      authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
    },
  })
    .then(handleResponse)
};

export const getProfileIntel = (name, about) => {
  return fetch("https://nomoreparties.co/v1/wff-cohort-10/users/me ", {
    method: "PATCH",
    headers: {
      authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
};

export const addNewCardToServer = (name, link) => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-10/cards', {
        method: "POST",
        headers: {
            authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            link: link,
          }),
    });
}

export const deleteCard = (id) => {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-10/cards/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f"
        },
    })
    .then(handleResponse)
}

export const cardLike = (id) => {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-10/cards/likes/${id}`, {
        method: 'PUT',
        headers: {
            authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f"
        },
    })
    .then(handleResponse)
}

export const deleteCardLike = (id) => {
    return fetch(`https://nomoreparties.co/v1/wff-cohort-10/cards/likes/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f"
        },
    })
    .then(handleResponse)
}

export const newAvatar = (avatar) => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-10/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            avatar: avatar,
          }),
    })
    // .then((res) => res.json())
    // .catch((err) => {
    //   console.log("Ошибка. Запрос не выполнен");
    // });
}
