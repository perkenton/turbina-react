import { apiSettings } from './../constants/constants.js';

class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`));    
  }

  addAuthor(data) {
      // Код для демонстрации выполнения асинхронного запроса при сабмите
      return new Promise(resolve => setTimeout(() => {
        const result = Math.random() >= 0.5;
        alert("Форма отправлена " + (result ? "неуспешно" : "успешно"));

        resolve(result);
      }, 2000))
      // Заготовка для реального запроса
      // return fetch(`${this._url}`, {
      //     method: "POST",
      //     headers: this._headers,
      //     body: JSON.stringify({
      //       author: data.author,
      //       phone: data.phone,
      //       email: data.email,
      //       lyrics: data.lyrics
      //     }),
      // })
      // .then((res) => this._getResponseData(res));
  }  
}

const api = new Api({
  url: apiSettings.url,
  headers: {
    authorization: apiSettings.user,
    "content-type": "application/json",
  }
});

export default api;
