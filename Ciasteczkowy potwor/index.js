const COOKIE_DAYS = 1;

const agreeButton = document.querySelector(".cookie-button");
const agreeBox = document.querySelector(".cookie-box");

const setCookie = (name, value, days) => {
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "_expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "");
  } else {
    document.cookie = name + "=" + (value || "");
  }
}
const getCookie = (name) => {
  const nameWithEqual = name + "=";
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i];
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
    if (cookie.indexOf(nameWithEqual) == 0) return cookie.substring(nameWithEqual.length, cookie.length);
  }
  return null;
}
const eraseCookie = (name) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const isExpired = () => {
  return Date.now() > new Date(getCookie('great_cookie_expires')); // true if time1 is later
}

const checkCookie = () => {
  if (getCookie('great_cookie') === 'agree' && !isExpired()) {
    agreeBox.classList.add("hidden");
  }
}

const agreeCookie = () => {
  agreeBox.classList.add("hidden");
  setCookie('great_cookie', 'agree', COOKIE_DAYS)
};

agreeButton.addEventListener("click", agreeCookie);

checkCookie();