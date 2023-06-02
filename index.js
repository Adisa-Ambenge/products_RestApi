function generateProductCards(data) {
    const productContainer = document.getElementById("product");
        // iterate through the data and create a card for each product
    data.forEach((product) => {
      // creating element
      const card = document.createElement("div");
      card.classList.add("product-card");
      // Setting the element using data from products
      card.innerHTML = `
              <img  class="img" src="${product.thumbnail}" alt="${product.name}" />
              <h2>${product.title}</h2>
              <div class='productPrice'>
              <p>${product.price}</p>
              <button class=btnProduct>ADD TO CART</button>
              </div> 
          `;
      productContainer.appendChild(card);
    });
  }
          // set the limit to 8

  function fetchProducts() {
    fetch("https://dummyjson.com/products?Limit=8")
      .then((response) => response.json())
      .then((data) => {
        const returnedData = data.products.slice(0, 8);
        generateProductCards(returnedData);
      });
  }
  fetchProducts()