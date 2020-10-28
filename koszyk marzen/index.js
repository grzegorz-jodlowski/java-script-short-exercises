// Import stylesheets

const CART_STORAGE = "CART_STORAGE";
const CART_CURRENCY = "zł";

const storage = new CartStorage();

const data = [
  {
    id: "1",
    name: 'Kurs "Opanuj JavaScript"',
    category: "Kurs programowania",
    price: "399"
  },
  {
    id: "2",
    name: "Mentoring z Przemkiem",
    category: "Indywidualne konsultacje",
    price: "150"
  }
];

const cartProductsBox = document.querySelector(".products-container");
const cartProductsTitle = document.querySelector(".products-title");
const cartSummary = document.querySelector(".cart-summary");
const submitButton = document.querySelector(".submit-button");

const addToCart = data => {
  //add sample quantity of products
  const cartData = data.map(product => ({
    ...product,
    quantity: 1
  }));

  storage.set(CART_STORAGE, cartData);
};

const updateQuantity = ({ target: { name, value } }) => {
  const updatedCart = storage.get(CART_STORAGE).map(item => {
    if (item.id === name) {
      return {
        ...item,
        quantity: parseInt(value)
      };
    } else {
      return item;
    }
  });

  storage.set(CART_STORAGE, updatedCart);

  renderCart();
};

const removeCartItem = ({ target }) => {
  const updatedCart = storage
    .get(CART_STORAGE)
    .filter(item => item.id !== target.dataset.id);

  storage.set(CART_STORAGE, updatedCart);

  renderCart();
};

const renderCart = () => {
  const products = storage.get(CART_STORAGE);

  let productsHtml = "";
  let cartValue = 0;

  products.forEach(({ id, name, category, price, quantity }) => {
    cartValue += price * quantity;
    productsHtml += `<div class="flex items-center border-b border-dashed">
        <div class="flex-auto">
          <img class="w-10 rounded-sm overflow-hidden" src="https://i.picsum.photos/id/160/200/150.jpg" alt="">
        </div>

        <div class="flex-auto px-5 py-3">
          <h2>${name}</h2>
          <p class="text-xs">${category}</p>
        </div>

        <div class="flex justify-end">
          <div class="border text-center mx-3"><input name=${id} min="1" class="w-10 cart-item-input" type="number" value=${quantity}></div>
          <div>${price * quantity} ${CART_CURRENCY}</div>
          <div data-id=${id} class="remove-item pl-4"><i data-id=${id} class=" fas fa-times"></i></div>
        </div>
      </div>`;
  });

  cartProductsBox.innerHTML = productsHtml;
  cartSummary.innerHTML = `${cartValue} ${CART_CURRENCY}`;

  if (!products.length) {
    submitButton.innerHTML = "Twój koszyk jest pusty";
  }

  cartProductsBox
    .querySelectorAll(".cart-item-input")
    .forEach(input => input.addEventListener("change", updateQuantity));

  cartProductsBox
    .querySelectorAll(".remove-item")
    .forEach(remove => remove.addEventListener("click", removeCartItem));
};

addToCart(data);
renderCart();

const submitCart = () => {
  const order = storage.get(CART_STORAGE);
  let orderHtml = "";
  let cartValue = 0;

  order.forEach(({ name, category, price, quantity }) => {
    cartValue += price * quantity;
    orderHtml += `

    <div class="flex items-center border-b border-dashed">
        <div class="flex-auto">
          <img class="w-10 rounded-sm overflow-hidden" src="https://i.picsum.photos/id/160/200/150.jpg" alt="">
        </div>

        <div class="flex-auto px-5 py-3">
          <h2>${name}</h2>
          <p class="text-xs">${category}</p>
          <p class="text-xs">${quantity} szt</p>
        </div>
      </div>`;
  });

  cartProductsTitle.innerHTML = "Podsumowanie zamówienia";
  cartProductsBox.innerHTML = orderHtml;
  cartSummary.innerHTML = `${cartValue} ${CART_CURRENCY}`;

  submitButton.remove();
};

submitButton.addEventListener("click", submitCart);
