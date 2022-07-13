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
  productDiv.innerHTML = "";

  products.forEach((item, index) => {
    productDiv.innerHTML += `
        <div class="product card">
              <div class="product__img">
                <img src=${item.Image} />
              </div>
              <h2 class="product__title">${item.name}</h2>
              <h3 class="product__price">${item.price} افغانی</h3>
              <button class="btn btn-primary" onclick="addToCart(${index})">افزودن به سبد خرید</button>
            </div> 
        `;
  });
};

let cart = {
  items: [],
  total: 0,
};

const renderCartItems = () => {
  const cartDiv = document.querySelector(".cart__items");
  cartDiv.innerHTML = "";

  const totalPriceEl = document.querySelector(".cart__total-price");
  let totalPrice = 0;

  if (cart.items.length === 0) {
    cartDiv.innerHTML = "محصولی در سبد خرید وجود ندارد!";
  }

  cart.items.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `
        <div class="cart__item">
             <div class="col-md-4">
                 <button class="btn btn-danger" onclick="removeFromCart('${item.name}')">حذف</button>
                  </div>
                  <div class="col-md-4 p-8">
                     <div class="qty">${item.qty}</div>
                        </div>
                    <div class="col-md-4">
                    <h3 class="cart__item-title">${item.name}</h3>
                </div>
         </div>
        `;
  });

  totalPriceEl.innerHTML = `مجموع: ${totalPrice} افغانی`;
};

const addToCart = (productIndex) => {
  const product = products[productIndex];

  let existingProduct = false;
  let newCartItems = cart.items.reduce((state, item) => {
    if (item.name === product.name) {
      existingProduct = true;

      const newItem = {
        ...item,
        qty: item.qty + 1,
        total: (item.qty + 1) * item.price,
      };
      return [...state, newItem];
    }
    return [...state, item];
  }, []);

  if (!existingProduct) {
    newCartItems.push({
      ...product,
      qty: 1,
      total: product.price,
    });
  }
  cart = {
    ...cart,
    items: newCartItems,
  };
  renderCartItems();
};

const removeFromCart = (productName) => {
    let newCartItems = cart.items.reduce((state,item)=>{
        if(item.name === productName){
            const newItem = {
                ...item,
                qty: item.qty -1,
                total: (item.qty -1) * item.price
            }
            if(newItem.qty >0){
                return[...state, newItem]
            }
            else{
                return state
            }
        }
        return[...state,item]
    },[])
    cart = {
        ...cart,
        items: newCartItems
    }
    renderCartItems()
};

renderProducts();
renderCartItems();
