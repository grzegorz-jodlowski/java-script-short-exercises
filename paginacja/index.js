const data = [
  {
    id: "1",
    name: "Peter Petrelli"
  },
  {
    id: "2",
    name: "Claire Bennet"
  },
  {
    id: "3",
    name: "Hiro Nakamura"
  },
  {
    id: "4",
    name: "Nathan Petrelli"
  },
  {
    id: "5",
    name: "Sylar"
  },
  {
    id: "6",
    name: "Niki Sanders"
  }
];

const CONTACTS_PER_PAGE = 2;

const contactsContainer = document.querySelector(".contacts-container");
const paginationButtonsContainer = document.querySelector(
  ".pagination-buttons-container"
);
const disabledButtonOpacity = "opacity-50";
const disabledButtonCursor = "cursor-not-allowed";
const activeBackground = "bg-gray-200";

let page = 1;

const addContactsToDOM = contacts => {
  contactsContainer.innerHTML = "";
  contacts.forEach(({ name }) => {
    contactsContainer.innerHTML += `
    <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
			<div class="w-4/5 h-10 py-3 px-1">
				<p class="hover:text-blue-dark">${name}</p>
			</div>
		</div>`;
  });
};

const paginateContacts = page => {
  const constactsToRender = data.slice(
    (page - 1) * CONTACTS_PER_PAGE,
    page * CONTACTS_PER_PAGE
  );

  addContactsToDOM(constactsToRender);
};

const updatePaginationNav = page => {
  const navButtons = paginationButtonsContainer.querySelectorAll(".navButton");
  const currentButtonPage = navButtons[page];

  navButtons.forEach(button => {
    button.classList.remove(disabledButtonOpacity);
    button.classList.remove(disabledButtonCursor);
    button.classList.remove(activeBackground);
    if (page === 1) {
      const previous = paginationButtonsContainer.querySelector(".previous");

      previous.classList.add(disabledButtonOpacity);
      previous.classList.add(disabledButtonCursor);
    } else if (page === navButtons.length - 2) {
      const next = paginationButtonsContainer.querySelector(".next");

      next.classList.add(disabledButtonOpacity);
      next.classList.add(disabledButtonCursor);
    }
  });
  currentButtonPage.classList.add(activeBackground);
};

const changePage = ({ target }) => {
  if (target.classList.contains(disabledButtonCursor)) {
    return;
  } else {
    let newPage;
    if (target.dataset.id === "-") {
      newPage = page - 1;
    } else if (target.dataset.id === "+") {
      newPage = page + 1;
    } else {
      newPage = parseInt(target.dataset.id);
    }

    page = newPage;

    paginateContacts(page);
    updatePaginationNav(page);
  }
};

const addPaginationNav = (contacts, contactsPerPage, page) => {
  const numberOfPages = Math.ceil(contacts.length / contactsPerPage);

  let paginationNavHtml = `
<li class="navButton previous relative cursor-pointer block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200

  " data-id='-'>Previous</li>`;

  for (let i = 1; i <= numberOfPages; i++) {
    paginationNavHtml += `
<li class="navButton relative cursor-pointer block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200 " data-id=${i}>${i}</li>`;
  }
  paginationNavHtml += `
<li class="navButton next relative cursor-pointer block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200

" data-id='+'>Next</li>`;

  paginationButtonsContainer.innerHTML = paginationNavHtml;

  const navButtons = paginationButtonsContainer.querySelectorAll(".navButton");
  navButtons.forEach(button => button.addEventListener("click", changePage));

  paginateContacts(page);
  updatePaginationNav(page);
};

addPaginationNav(data, CONTACTS_PER_PAGE, page);
