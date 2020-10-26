const SORT_DIRECTION_ASC = "asc";
const SORT_DIRECTION_DESC = "desc";

const chapters = [
  {
    author: "Adam",
    title: "Fundamenty języka JavaScript",
    duration: 10129
  },
  {
    author: "Przemek",
    title: "Przeglądarka bez tajemnic",
    duration: 19393
  },
  {
    author: "Marcin",
    title: "W świecie frameworków",
    duration: 14002
  },
  {
    author: "Grzesiek",
    title: "React zaawansowany",
    duration: 14500
  }
];

const tableBody = document.querySelector(".OJS-table");
const durationTableCell = document.querySelector(".duration");

const formatTime = seconds => {
  const h = String(Math.floor(seconds / 3600));
  const m = String(Math.floor((seconds % 3600) / 60));
  const s = String((seconds % 3600) % 60);

  return `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`;
};

const renderTableRows = data => {
  tableBody.innerHTML = "";

  data.forEach(({ title, author, duration }, index) => {
    const tr = document.createElement("tr");
    tr.style.transition = "3s";
    if (index % 2 !== 0) {
      tr.classList.add("bg-gray-100");
    }
    tr.innerHTML = `<td class="border px-4 py-2">${title}</td>
      <td class="border px-4 py-2">${author}</td>
      <td class="border px-4 py-2">${formatTime(duration)}</td>`;
    tr.style.opacity = "0";

    tableBody.append(tr);
  });
};

const sortObjects = (a, b, direction, key) => {
  if (direction === SORT_DIRECTION_ASC) {
    return a[key] - b[key];
  } else if (direction === SORT_DIRECTION_DESC) {
    return b[key] - a[key];
  }
};

const animation = () => {
  const trItems = document.querySelectorAll("tbody tr");
  trItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "100";
    }, index * 75);
  });
};

const sortByDuration = () => {
  const durationArrow = document.querySelector(".arrow-icon");

  if (durationArrow.classList.contains("fa-caret-down")) {
    const sortedChapters = chapters.sort((a, b) =>
      sortObjects(a, b, SORT_DIRECTION_ASC, "duration")
    );
    renderTableRows(sortedChapters);
    animation();

    durationArrow.classList.toggle("fa-caret-up");
    durationArrow.classList.toggle("fa-caret-down");
  } else if (durationArrow.classList.contains("fa-caret-up")) {
    const sortedChapters = chapters.sort((a, b) =>
      sortObjects(a, b, SORT_DIRECTION_DESC, "duration")
    );
    renderTableRows(sortedChapters);
    animation();

    durationArrow.classList.toggle("fa-caret-down");
    durationArrow.classList.toggle("fa-caret-up");
  } else {
    return;
  }
};

durationTableCell.addEventListener("click", sortByDuration);

sortByDuration();
