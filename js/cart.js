document.addEventListener('DOMContentLoaded', () => {
  let carts = document.querySelectorAll('.add-cart');
  let products = [
    {
      name: "Multicolor Jumpsuit",
      price: 98,
      inCart: 0,
      image: "IMG/6.webp",
    },
    {
      name: "Black Long coord set",
      price: 80,
      inCart: 0,
      image: "IMG/34_6920bbcb-87b8-45ac-80c6-57b31e7ce0d8.webp",
    },
    {
      name: "ESLA Basic Jacket",
      price: 83,
      inCart: 0,
      image: "IMG/51clX2EMxtL._AC_SX679_.jpg",
    },
    {
      name: "jamila Women plain jackard",
      price: 80,
      inCart: 0,
      image: "IMG/61xh4nbvbUS._AC_SX569_.jpg",
    },
    {
      name: "Zip Up Hoodie For Women",
      price: 70,
      inCart: 0,
      image: "IMG/512N5cB8nVL._AC_SX679_.jpg",
    },
    {
      name: "Beautiful Orange Dress",
      price: 75,
      inCart: 0,
      image: "IMG/51PkjSYDUGL._AC_SX466_.jpg",
    },
    {
      name: "Alamalshop Jalabiya Casual style",
      price: 80,
      inCart: 0,
      image: "IMG/71yGKLRitwL._AC_SX569_.jpg",
    },
    {
      name: "Winter Warm Jackets for Women",
      price: 85,
      inCart: 0,
      image: "IMG/41j45aGk1AL._AC_.jpg",
    },
    {
      name: "PRYZM Women Biker Ultralight",
      price: 65,
      inCart: 0,
      image: "IMG/414zrYF1JfL._AC_.jpg",
    },
    {
      name: "Printed One Shoulder Dress",
      price: 85,
      inCart: 0,
      image: "IMG/74.webp",
    },
    {
      name: "Palm Leaves Printed Dress",
      price: 80,
      inCart: 0,
      image: "IMG/63.webp",
    },
    {
      name: "Casual Abaya For Women",
      price: 70,
      inCart: 0,
      image: "IMG/61LfYyo8KlL._AC_SX466_.jpg",
    },
    {
      name: "Long winter women's coat",
      price: 75,
      inCart: 0,
      image: "IMG/51bddoQsouS._AC_SX466_.jpg",
    },
    {
      name: "Jamila Women Plain Side Slit Short",
      price: 85,
      inCart: 0,
      image: "IMG/617VnPpf14S._AC_SX569_.jpg",
    },
    {
      name: "Black and white clothes",
      price: 89,
      inCart: 0,
      image: "IMG/61xZjYmVCmL._SS400_.jpg",
    },
    {
      name: "Clothes for veiled women",
      price: 98,
      inCart: 0,
      image: "IMG2/mod1.jpg",
    },
    {
      name: "colourful suits for veiled women",
      price: 80,
      inCart: 0,
      image: "IMG2/mod5.jpg",
    },
    {
      name: "Beautiful Trainning for women",
      price: 83,
      inCart: 0,
      image: "IMG2/mod10.jpg",
    },
    {
      name: "Trainning for veiled women",
      price: 80,
      inCart: 0,
      image: "IMG2/mod13.jpg",
    },
    {
      name: "suits for veiled women",
      price: 70,
      inCart: 0,
      image: "IMG2/mod17.jpg",
    },
    {
      name: "Long suit for women",
      price: 75,
      inCart: 0,
      image: "IMG2/mod21.jpg",
    },
    {
      name: "Over size trainning",
      price: 80,
      inCart: 0,
      image: "IMG2/mod24.jpg",
    },
    {
      name: "Beautiful Trainning for women",
      price: 85,
      inCart: 0,
      image: "IMG2/mod27.jpg",
    },
    {
      name: "Colourful long suit",
      price: 65,
      inCart: 0,
      image: "IMG2/mod30.jpg",
    },
    {
      name: "Summer suit for women",
      price: 85,
      inCart: 0,
      image: "IMG2/mod33.jpg",
    },
    {
      name: "Formal suit for women",
      price: 80,
      inCart: 0,
      image: "IMG2/mod36.jpg",
    },
    {
      name: "Oversize long suit",
      price: 70,
      inCart: 0,
      image: "IMG2/mod40.jpg",
    },
    {
      name: "Colourful formal suit",
      price: 75,
      inCart: 0,
      image: "IMG2/mod42.jpg",
    },
    {
      name: "Beautiful suit for women",
      price: 85,
      inCart: 0,
      image: "IMG2/mod45.jpg",
    },
    {
      name: "Oversize suit for women",
      price: 89,
      inCart: 0,
      image: "IMG2/mod47.jpg",
    },
    {
      name: "Dark dress",
      price: 198,
      inCart: 0,
      image: "IMG5/mod1.jpg",
    },
    {
      name: "Wooded Dress",
      price: 100,
      inCart: 0,
      image: "IMG5/mod4.jpg",
    },
    {
      name: "Beautiful dress",
      price: 103,
      inCart: 0,
      image: "IMG5/mod6.jpg",
    },
    {
      name: "Blue Dress",
      price: 90,
      inCart: 0,
      image: "IMG5/mod8.jpg",
    },
    {
      name: "Oversize Dress",
      price: 95,
      inCart: 0,
      image: "IMG5/mod11.jpg",
    },
    {
      name: "Colourful Dress",
      price: 95,
      inCart: 0,
      image: "IMG5/mod20.jpg",
    },
    {
      name: "Plain Dress",
      price: 80,
      inCart: 0,
      image: "IMG5/mod17.jpg",
    },
    {
      name: "Formal Dress",
      price: 85,
      inCart: 0,
      image: "IMG5/mod26.jpg",
    },
    {
      name: "Dress for young woman",
      price: 65,
      inCart: 0,
      image: "IMG5/mod29.jpg",
    },
    {
      name: "Striped Dress",
      price: 85,
      inCart: 0,
      image: "IMG5/mod24.jpg",
    },
    {
      name: "Colourful plain Dress",
      price: 80,
      inCart: 0,
      image: "IMG5/mod29.jpg",
    },
    {
      name: "Beautiful Plain Dress",
      price: 70,
      inCart: 0,
      image: "IMG5/mod43.jpg",
    },
    {
      name: "Princess Dress",
      price: 75,
      inCart: 0,
      image: "IMG5/mod44.jpg",
    },
    {
      name: "Yellow Dress",
      price: 85,
      inCart: 0,
      image: "IMG5/mod47.jpg",
    },
    {
      name: "A dress with roses",
      price: 89,
      inCart: 0,
      image: "IMG5/mod47.jpg",
    },
  ];

  for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }

  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
      document.querySelector('.cart span').textContent = productNumbers;
    }
  }

  function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers + 1);
      document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
  }

  function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      if (cartItems[product.name] == undefined) {
        cartItems = {
          ...cartItems,
          [product.name]: product
        };
      }
      cartItems[product.name].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.name]: product
      };
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
  }

  function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem('totalCost', cartCost + product.price);
    } else {
      localStorage.setItem('totalCost', product.price);
    }
  }

  function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productsContainer = document.querySelector('.products-container');

    if (cartItems && productsContainer) {
      productsContainer.innerHTML = `<div class="product-header">
        <h5 class="product-title">Product</h5>
        <h5 class="price">Price</h5>
        <h5 class="quantity">Quantity</h5>
        <h5 class="total">Total</h5>
      </div>`;
      Object.values(cartItems).map(item => {
        productsContainer.innerHTML += `
    <div class="product">
      <div class="product-title">
        <a class="deleteProduct" data-name="${item.name}">
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
        <img src="${item.image}" alt="${item.name}">
        ${item.name}
      </div>
      <div class="price" style="font-weight: bold;">$${item.price}</div>
      <div class="quantity">
        <i class="fa-solid fa-circle-minus" data-name="${item.name}"></i>
        <span>${item.inCart}</span>
        <i class="fa-solid fa-circle-plus" data-name="${item.name}"></i>
      </div>
      <div class="total">$${item.inCart * item.price}</div>
    </div>
    `;
      });

      productsContainer.innerHTML += `
  <div class="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total</h4>
    <h4 class="basketTotal">$${localStorage.getItem('totalCost')}</h4>
  </div>
  `;

      // Add event listeners to deleteProduct buttons
      let deleteButtons = document.querySelectorAll('.deleteProduct');
      deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
          let productName = button.getAttribute('data-name');
          removeItemFromCart(productName);
          displayCart();
        });
      });
      function removeItemFromCart(name) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        // Update total cost
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt(cartCost);
        let item = cartItems[name];
        cartCost -= item.inCart * item.price;
        localStorage.setItem('totalCost', cartCost);

        // Remove item from cart
        delete cartItems[name];
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        let cartCount = localStorage.getItem('cartNumbers');
  cartCount = parseInt(cartCount);
  cartCount -= item.inCart;
  localStorage.setItem('cartNumbers', cartCount);

  // Update cart display
  document.querySelector('.cart span').textContent = cartCount;
      };

          // Add event listeners to quantity buttons
          let minusButtons = document.querySelectorAll('.fa-circle-minus');
          let plusButtons = document.querySelectorAll('.fa-circle-plus');
          minusButtons.forEach(button => {
            button.addEventListener('click', () => {
              let productName = button.getAttribute('data-name');
              decreaseQuantity(productName);
              displayCart();
            });
          });
          plusButtons.forEach(button => {
            button.addEventListener('click', () => {
              let productName = button.getAttribute('data-name');
              increaseQuantity(productName);
              displayCart();
            });
          });
        }
      }

      function decreaseQuantity(name) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        // Decrease item quantity
        cartItems[name].inCart -= 1;

        // Update total cost
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt(cartCost);
        let item = cartItems[name];
        cartCost -= item.price;
        localStorage.setItem('totalCost', cartCost);

        // Remove item from cart if quantity is zero
        if (cartItems[name].inCart === 0) {
          delete cartItems[name];
        }

        // Update cart count
        let cartCount = localStorage.getItem('cartNumbers');
        cartCount = parseInt(cartCount);
        cartCount -= 1;
        localStorage.setItem('cartNumbers', cartCount);

        // Update cart display
        document.querySelector('.cart span').textContent = cartCount;
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      }

      function increaseQuantity(name) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        // Increase item quantity
        cartItems[name].inCart += 1;

        // Update total cost
        let cartCost = localStorage.getItem('totalCost');
        cartCost = parseInt(cartCost);
        let item = cartItems[name];
        cartCost += item.price;
        localStorage.setItem('totalCost', cartCost);

        // Update cart count
        let cartCount = localStorage.getItem('cartNumbers');
        cartCount = parseInt(cartCount);
        cartCount += 1;
        localStorage.setItem('cartNumbers', cartCount);

        // Update cart display
        document.querySelector('.cart span').textContent = cartCount;
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
    }

  onLoadCartNumbers();
  displayCart();
});
