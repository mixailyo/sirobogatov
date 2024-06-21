function cookieInit() {
  // Функция для установки куки
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Функция для получения значения куки
  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) == 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  // Функция для скрытия уведомления
  function hideNotification() {
    const notification = document.querySelector(".cookie");
    notification.style.display = "none";
  }

  // Проверяем, была ли установлена кука
  const cookieName = "notificationCookie";
  const notificationCookie = getCookie(cookieName);

  if (notificationCookie === "") {
    // Кука не установлена, показываем уведомление
    const notification = document.querySelector(".cookie");
    const closeButton = document.querySelector(".cookie__btn");

    if (notification) {
      notification.style.display = "block";
    
      // Обработчик клика на кнопку для скрытия уведомления
      closeButton.addEventListener("click", function() {
        hideNotification();
        
        // Устанавливаем куку на 30 дней
        const daysToExpire = 30;
        setCookie(cookieName, "true", daysToExpire);
      });
    }
  }
}

export { cookieInit }