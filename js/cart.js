//Elliots things *LEAVE THEM BE*


<div id="container2">
  <h2>Item Cost Calculator</h2>
  <p id="item-cost">Total Cost: $0</p>
  <div id=container>
  <button onclick="updateCost(-1)">-</button>
  <span id="quantity">1</span>
  <button onclick="updateCost(1)">+</button>
  </div>
</div>

let quantity = 1;
const costPerItem = 39.90;
const deliveryCost = 5.00;

function updateCost(change) {
  quantity = Math.max(1, quantity + change);
  updateDisplay();
}

function updateDisplay() {
  const totalCost = (quantity * costPerItem) + deliveryCost;
  document.getElementById('item-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
  document.getElementById('quantity').textContent = quantity;
}

// Initial display
updateDisplay();
