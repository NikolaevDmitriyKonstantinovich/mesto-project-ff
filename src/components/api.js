const token = "f9abb9cd-6bca-4f92-b508-e5a8964bae2f";
const groupId = "wff-cohort-10";

const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-10",
  headers: {
    authorization: "f9abb9cd-6bca-4f92-b508-e5a8964bae2f",
    "Content-Type": "application/json",
  },
};

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserInfo = () => {
  return fetch(`${config.baseUrl}` + "/users/me", {
    method: "GET",
    headers: config.headers,
  }).then(handleResponse);
};

export const getCardInfo = () => {
  return fetch(`${config.baseUrl}` + "/cards", {
    method: "GET",
    headers: config.headers,
  }).then(handleResponse);
};

export const getProfileIntel = (name, about) => {
  return fetch(`${config.baseUrl}` + "/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(handleResponse);
};

export const addNewCardToServer = (name, link) => {
  return fetch(`${config.baseUrl}` + "/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(handleResponse);
};

export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}` + `/cards/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
};

export const cardLike = (id) => {
  return fetch(`${config.baseUrl}` + `/cards/likes/${id}`, {
    method: "PUT",
    headers: config.headers,
  }).then(handleResponse);
};

export const deleteCardLike = (id) => {
  return fetch(`${config.baseUrl}` + `/cards/likes/${id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(handleResponse);
};

export const newAvatar = (avatar) => {
  return fetch(`${config.baseUrl}` + "/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then(handleResponse);
};
