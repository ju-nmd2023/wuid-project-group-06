let quantity;

        function increaseQuantity() {
            var quantitySpan = document.getElementById('quantity');
            var currentQuantity = parseInt(quantitySpan.innerText);
            quantitySpan.innerText = currentQuantity + 1;
            updateSubTotalAndTotal();
        }

        function decreaseQuantity() {
            var quantitySpan = document.getElementById('quantity');
            var currentQuantity = parseInt(quantitySpan.innerText);

            // Ensure the quantity is at least 1
            if (currentQuantity > 1) {
                quantitySpan.innerText = currentQuantity - 1;
                updateSubTotalAndTotal();
            } 
        }

        function updateSubTotalAndTotal() {
            var quantity = parseInt(document.getElementById('quantity').innerText);
            var pricePerItem = 39.90; // Update this with the actual price per item

            // Calculate subtotal and update the element
            var subTotal = quantity * pricePerItem;
            document.getElementById('subTotal').innerText = subTotal.toFixed(2) + " €";

            // Add delivery cost (assuming it's a fixed cost)
            var deliveryCost = 5.00;
            var totalAmount = subTotal + deliveryCost;
            document.getElementById('totalAmount').innerText = totalAmount.toFixed(2) + " €";
        }
        
let quantityTab;

        function increaseQuantityTab() {
          var quantitySpanTab = document.getElementById('quantity-tab');
          var currentQuantityTab = parseInt(quantitySpanTab.innerText);
          quantitySpanTab.innerText = currentQuantityTab + 1;
          updateSubTotalAndTotalTab();
        }
        
        function decreaseQuantityTab() {
          var quantitySpanTab = document.getElementById('quantity-tab');
          var currentQuantityTab = parseInt(quantitySpanTab.innerText);
        
          // Ensure the quantity is at least 1
          if (currentQuantityTab > 1) {
            quantitySpanTab.innerText = currentQuantityTab - 1;
            updateSubTotalAndTotalTab();
          }
        }
        
        function updateSubTotalAndTotalTab() {
          var quantityTab = parseInt(document.getElementById('quantity-tab').innerText);
          var pricePerItemTab = 39.90; // Update this with the actual price per item for tablet
        
          // Calculate subtotal and update the element
          var subTotalTab = quantityTab * pricePerItemTab;
          document.getElementById('subTotalTab').innerText = subTotalTab.toFixed(2) + " €";
        
          // Add delivery cost (assuming it's a fixed cost)
          var deliveryCostTab = 5.00; // Update this with the actual delivery cost for tablet
          var totalAmountTab = subTotalTab + deliveryCostTab;
          document.getElementById('totalAmountTab').innerText = totalAmountTab.toFixed(2) + " €";
        }

let quantityMobile;

function increaseQuantityMobile() {
  var quantitySpanMobile = document.getElementById('quantity-mobile');
  var currentQuantityMobile = parseInt(quantitySpanMobile.innerText);
  quantitySpanMobile.innerText = currentQuantityMobile + 1;
  updateSubTotalAndTotalMobile();
}

function decreaseQuantityMobile() {
  var quantitySpanMobile = document.getElementById('quantity-mobile');
  var currentQuantityMobile = parseInt(quantitySpanMobile.innerText);

  // Ensure the quantity is at least 1
  if (currentQuantityMobile > 1) {
    quantitySpanMobile.innerText = currentQuantityMobile - 1;
    updateSubTotalAndTotalMobile();
  }
}

function updateSubTotalAndTotalMobile() {
  var quantityMobile = parseInt(document.getElementById('quantity-mobile').innerText);
  var pricePerItemMobile = 39.90; // Update this with the actual price per item for mobile

  // Calculate subtotal and update the element
  var subTotalMobile = quantityMobile * pricePerItemMobile;
  document.getElementById('subTotalMobile').innerText = subTotalMobile.toFixed(2) + " €";

  // Add delivery cost (assuming it's a fixed cost)
  var deliveryCostMobile = 5.00; // Update this with the actual delivery cost for mobile
  var totalAmountMobile = subTotalMobile + deliveryCostMobile;
  document.getElementById('totalAmountMobile').innerText = totalAmountMobile.toFixed(2) + " €";
}