class Products {
  render() {
    let prodHtml = document.querySelector(".products-container");
    console.log(CATALOG);
    CATALOG.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("products-element");
      li.innerHTML = `
        <span class="products-element__name">${item.name}</span>
        <img class="products-element__img" src="${item.img}" />
        <span class="products-element__price">${item.price}</span>
        <button class="products-element__btn" data-id="${item.id}">Добавить в корзину</button>
      `;

      const button = li.querySelector(".products-element__btn");
      const storedProducts = localStorageUtil.getProducts();
      const isInCart = storedProducts.some((product) => product.id === item.id);

      if (isInCart) {
        button.textContent = "Удалить из корзины";
        button.classList.add("products-element__btn_active");
      }

      button.addEventListener("click", () => {
        const productId = item.id;
        let storedProducts = localStorageUtil.getProducts(); 
        const productIndex = storedProducts.findIndex((product) => product.id === productId);

        if (productIndex !== -1) {
          storedProducts.splice(productIndex, 1);
          button.textContent = "Добавить в корзину"; 
          button.classList.remove("products-element__btn_active"); 
        } else {
          storedProducts.push(item);
          button.textContent = "Удалить из корзины"; 
          button.classList.add("products-element__btn_active"); 
        }

        localStorageUtil.putProducts(storedProducts); 
      });

      prodHtml.appendChild(li);
    });
  }
}

const products = new Products();
products.render();
