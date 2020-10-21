const API_URL =
  "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=";

const searchInput = document.querySelector("#book-name");
const resultList = document.querySelector(".results");
const loadingIndicator = document.querySelector(".loading");

const loading = value =>
  value ? loadingIndicator.classList.remove("hidden") : loadingIndicator.classList.add("hidden");

const reset = () => {
  searchInput.style.borderColor = "";
  resultList.innerHTML = "";
}

const renderList = books => {
  books.forEach(book => {
    const li = document.createElement("li");
    li.classList.add("entry");
    li.innerHTML =
      `<img class="entry__image" src=${book.imageUrl} alt=${book.title}>
    <a href=${book.description.fullContentUrl} class="entry__name">
      <p class="entry__name">${book.title}</p>
    </a>
    <p class="entry__name">${book.author.name}</p>`;

    resultList.append(li);
  });
}

const fetchBooks = url => {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        switch (response.status) {
          case 404:
            throw new Error('Nie udało się pobrać wyników z powodu błędnego adresu')
            break;
          case 429:
            throw new Error('Nie udało się pobrać wyników z powodu za dużej ilości zapytań')
            break;

          default:
            break;
        }
      }
    })
    .then(data => {
      searchInput.value = "";
      loading(false)

      if (data.length) {
        renderList(data)
      } else {
        resultList.innerHTML =
          '<p class="entry entry--error">Nie znaleziono pozycji</p>';
      }
    })
    .catch((err) => {
      resultList.innerHTML =
        `<p class="entry entry--error">${err.message}</p>`;
      loading(false)
    });
}

const search = event => {
  event.preventDefault();

  reset();

  if (searchInput.value) {
    loading(true);

    const url = `${API_URL}${searchInput.value}`;

    fetchBooks(url);
  } else {
    searchInput.style.borderColor = "red";
  }
};

document.forms[0].addEventListener("submit", search);
