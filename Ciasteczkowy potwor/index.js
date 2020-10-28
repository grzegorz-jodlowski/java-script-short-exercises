const COOKIE_DAYS = 1;
const COOKIE_NAME = 'SHURE_COOKIE';

const agreeButton = document.querySelector(".cookie-button");
const agreeBox = document.querySelector(".cookie-box");

// Web Storage Api solution

const storage = new AppStorage();

const agreeCookie = () => {
  agreeBox.classList.add("cookie-box--hidden");
  setTimeout(() => agreeBox.classList.add('hidden'), 1000);

  const date = new Date();
  date.setTime(date.getTime() + (COOKIE_DAYS * 24 * 60 * 60 * 1000));

  const cookieValue = {
    agree: true,
    expiration: date
  }

  storage.set(COOKIE_NAME, cookieValue)
};

const isExpired = (time) => {
  return Date.now() > new Date(time);
}

const checkCookie = () => {
  const cookie = storage.get(COOKIE_NAME)

  if (!cookie) {
    agreeBox.classList.remove("hidden");
  } else if (isExpired(cookie.expiration)) {
    agreeBox.classList.remove("hidden");

    const cookieValue = {
      agree: false,
      expiration: cookie.expiration
    }

    storage.set(COOKIE_NAME, cookieValue)
  }
}

agreeButton.addEventListener("click", agreeCookie);


checkCookie();


// // Cookies solution
// const setCookie = (name, value, days) => {
//   if (days) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     document.cookie = name + "_expires=" + date.toUTCString();
//     document.cookie = name + "=" + (value || "");
//   } else {
//     document.cookie = name + "=" + (value || "");
//   }
// }
// const getCookie = (name) => {
//   const nameWithEqual = name + "=";
//   const cookiesArray = document.cookie.split(';');
//   for (let i = 0; i < cookiesArray.length; i++) {
//     let cookie = cookiesArray[i];
//     while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
//     if (cookie.indexOf(nameWithEqual) == 0) return cookie.substring(nameWithEqual.length, cookie.length);
//   }
//   return null;
// }
// const eraseCookie = (name) => {
//   document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
// }

// const isExpired = () => {
//   return Date.now() > new Date(getCookie('great_cookie_expires'));
// }

// const checkCookie = () => {
//   if (getCookie('great_cookie') !== null && isExpired()) {
//     agreeBox.classList.remove("hidden");
//   }
// }

// const agreeCookie = () => {
//   agreeBox.classList.add("cookie-box--hidden");
//   setTimeout(() => agreeBox.classList.add('hidden'), 1000);

//   setCookie('great_cookie', 'agree', COOKIE_DAYS)
// };

// agreeButton.addEventListener("click", agreeCookie);

// checkCookie();
