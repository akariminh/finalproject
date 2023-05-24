// Render cart ra UI (work in progress nha)

const cartCheckout = document.querySelector("#cart-checkout");
const totalPriceElement = document.querySelector("#total-price");

let cart = [];

const loadCartInformation = () => {
  const cartInString = localStorage.getItem("cart");
  cart = JSON.parse(cartInString) || [];
};
loadCartInformation();

const renderCart = () => {
  const cartCheckOutItems = cart.map((cartItem) => {
    const { productName, productInfo, price, id, quantity, discount, image } = cartItem;
    if (discount !== 0) {
      return `<tr>
      <th scope="row">
          <div class="display-product">
              <div class="checkout-image">
                  <div class="checkout-image-container">
                      <img src="${image}">
                  </div>
                  <div class="quantity">${quantity}</div>
              </div>
      </th>
      <td>
          <div class="checkout-product-info">
              <div class="checkout-name">${productName}</div>
              <div class="checkout-info">${productInfo}</div>
          </div>
      </td>
      <td>
          <div class="pricing-display">
              <div class="old-price">${price.toLocaleString('en-US')}₫</div>
              <div class="current-price">${(price * (100 - discount) / 100).toLocaleString('en-US')}₫
              </div>
          </div>
      </td>
      <td class="current-price">${(quantity * price * (100 - discount) / 100).toLocaleString('en-US')}</td>
  </tr>`;
    }
    else {
      return `<tr>
      <th scope="row">
          <div class="display-product">
              <div class="checkout-image">
                  <div class="checkout-image-container">
                      <img src="${image}">
                  </div>
                  <div class="quantity">${quantity}</div>
              </div>
      </th>
      <td>
          <div class="checkout-product-info">
              <div class="checkout-name">${productName}/div>
              <div class="checkout-info">${productInfo}</div>
          </div>
      </td>
      <td>
          <div class="pricing-display">
              <div class="current-price">${price.toLocaleString('en-US')}₫
              </div>
          </div>
      </td>
      <td class="current-price">${(quantity * price).toLocaleString('en-US')}</td>
  </tr>`;
    };
  })

  cartCheckout.innerHTML = cartCheckOutItems.join("");
};
renderCart();

// Tính tổng số tiền và render ra giao diện
const rendertotalprice = () => {
  const totalOriginalPrice = cart.filter(function (cart) {
    return cart.discount <= 0
  }).reduce((total, cartItem) => {
    const { price, quantity } = cartItem;
    return total += quantity * price;
  }, 0);
  const totalPriceWithDiscount = cart.filter(function (cart) {
    return cart.discount > 0
  }).reduce((total, cartItem) => {
    const { price, quantity, discount } = cartItem;
    return total += quantity * price * (100 - discount) / 100;
  }, 0);
  const totalPrice = totalOriginalPrice + totalPriceWithDiscount;
  return totalPriceElement.innerHTML = `${totalPrice.toLocaleString('en-US')}₫`
}

rendertotalprice();