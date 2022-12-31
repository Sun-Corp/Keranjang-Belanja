const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  price = document.querySelector(".price");

let i = 1,
  total = 250000;
harga = 250000;
plus.addEventListener("click", () => {
  i++;
  num.innerText = i;
  total = total + harga;
  price.innerText = total;
});

minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    num.innerText = i;
    total = total - harga;
    price.innerText = total;
  }
});
