console.log("true")

// (() => {

//     console.log("job")
//     const shoop = document.getElementById("shopping-cart");
//     const footer = document.getElementById("footer");
//     const menu = document.getElementById("order-menu");
//     const goods = document.getElementById("cart-goods");
  
//     window.addEventListener("DOMContentLoaded", (e) => {
//       const heightWindow = document.documentElement.clientHeight;
//       const goodsPos = goods.getBoundingClientRect().bottom;
//       if (goodsPos <= heightWindow) shoop.classList.remove("shopping-cart--fixed");
//     })
  
//     window.addEventListener("scroll", (e) => {
  
//       const heig = footer.offsetHeight;
//       const heightWindow = document.documentElement.clientHeight
//       const positionTopWindow = footer.getBoundingClientRect().top;
//       const shopHeigh = shoop.offsetHeight;
//       const orderMenu = menu.getBoundingClientRect().bottom;
//       const goodsPos = goods.getBoundingClientRect().bottom;
  
//       if (goodsPos >= heightWindow && !shoop.classList.contains("shopping-cart--fixed")) {
//         shoop.classList.add("shopping-cart--fixed")
//       }
  
//       if (orderMenu >= heightWindow && !shoop.classList.contains("shopping-cart--fixed")) {
//         shoop.classList.add("shopping-cart--fixed")
//       } else if (heightWindow >= positionTopWindow) {
//         shoop.classList.remove("shopping-cart--fixed")
//       }
  
//     })
// })()
