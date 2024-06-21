
const baseSuccessCallback = (event) => {
  event.preventDefault();
  
  let formSuccess = document.querySelector('.form__success');
  let formSuccessClose = formSuccess.querySelector('.form__success-close')

  if (formSuccess) {
    formSuccess.classList.add('is-active')

    formSuccessClose.addEventListener('click', () => {
      formSuccess.classList.remove('is-active')
    })
  }
  // В данном колбеке бэкендер, либо разработчик при необходимости будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки или успешную отправку формы на сервер
};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить неккорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сбросс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
