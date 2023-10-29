// Cart calculation

let qty = document.getElementById("qty");
let costRate = document.getElementById("costRate").innerText;
let cost = document.getElementById("cost");
let total = document.getElementById("total");

let shipPriceRate = 20;
let qtyValue = 0;
console.log(qty.value);
document.getElementById("minus").addEventListener("click", () => {
  if (qtyValue > 0) {
    qtyValue--;
    console.log(qtyValue);
    qty.innerText = qtyValue;
    qty.innerText = qtyValue;
    cost.innerText = qtyValue * costRate;
    ship.innerText = qtyValue * shipPriceRate;
    total.innerText = qtyValue * (Number(costRate) + Number(shipPriceRate));
  } else {
    qtyValue = 0;
    qty.innerText = qtyValue;
    qty.innerText = qtyValue;
    cost.innerText = qtyValue * costRate;
    ship.innerText = qtyValue * shipPriceRate;
    total.innerText = qtyValue * (Number(costRate) + Number(shipPriceRate));
  }
});

document.getElementById("plus").addEventListener("click", () => {
  qtyValue++;
  console.log(qtyValue);
  qty.innerText = qtyValue;
  cost.innerText = qtyValue * costRate;
  ship.innerText = qtyValue * shipPriceRate;
  total.innerText = qtyValue * (Number(costRate) + Number(shipPriceRate));
});
