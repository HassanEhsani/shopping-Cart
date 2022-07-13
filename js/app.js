const products = [
  {
    id: 1,
    name: "iphone 12",
    price: 20000,
    Image: "img/iphone-12.jpg",
  },
  {
    id: 2,
    name: "Air Pods",
    price: 10000,
    Image: "img/Apple-AirPods-Pro.jpg",
  },
];

const renderProducts = () => {
  const productDiv = document.querySelector(".products");
  productDiv.innerHTML = '';

  products.forEach((item, index) => {
    productDiv.innerHTML += `
        <div class="product card">
              <div class="product__img">
                <img src=${item.Image} />
              </div>
              <h2 class="product__title">${item.name}</h2>
              <h3 class="product__price">${item.price} افغانی</h3>
              <button class="btn btn-primary">افزودن به سبد خرید</button>
            </div> 
        `;
  });
};

renderProducts()
