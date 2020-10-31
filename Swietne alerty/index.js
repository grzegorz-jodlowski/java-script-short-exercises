class Notification {
  constructor(message, type) {
    this.message = message;
    this.type = type;
  }

  create() {
    let color;

    switch (this.type) {
      case "Error":
        color = "red";
        break;
      case "Warning":
        color = "yellow";
        break;
      case "Success":
        color = "green";
        break;
      case "Info":
        color = "blue";
        break;
      default:
        color = "gray";
    }

    const notification = document.createElement("div");
    notification.className = "alert p-2";
    notification.innerHTML = `
      <div class="inline-flex items-center bg-white leading-none text-${color}-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-${color}-600 text-white rounded-full h-6 px-3 justify-center items-center">${this.type
      }</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>`;

    notification.classList.add(".addAlert");

    this.addToQueue(notification);
  }

  destroy(notification) {
    notification.classList.add(".removeAlert");
    notification.remove();
  }

  addToQueue(notification) {
    const notifications = document.querySelectorAll(".notifications > div");
    console.log(notifications.length);
    if (notifications.length < 3) {
      const notificationBox = document.querySelector(".notifications");

      notificationBox.appendChild(notification);
      notification.addEventListener("click", () => this.destroy(notification));
      setTimeout(() => this.destroy(notification), 10000);
      document.querySelector(".notification-input").value = "";
    } else {
      setTimeout(() => this.addToQueue(notification), 1000);
    }
  }
}

const buttons = document.querySelectorAll(".buttons button");

const createNotification = ({ target }) => {
  const notificationMessage = document.querySelector(".notification-input")
    .value;

  if (notificationMessage) {
    const notification = new Notification(
      notificationMessage,
      target.textContent
    );
    notification.create();
  } else {
    const notification = new Notification("Wprowadź tekst", "Info");
    notification.create();
  }
};

buttons.forEach(button => button.addEventListener("click", createNotification));
