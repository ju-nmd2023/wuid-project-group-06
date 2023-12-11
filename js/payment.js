// Default device functions

let quantity;

function increaseQuantity() {
    let quantitySpan = document.getElementById('quantity');
    let currentQuantity = parseInt(quantitySpan.innerText);
    quantitySpan.innerText = currentQuantity + 1;
    updateSubTotalAndTotal();
}

function decreaseQuantity() {
    let quantitySpan = document.getElementById('quantity');
    let currentQuantity = parseInt(quantitySpan.innerText);

    // Ensure the quantity is at least 1
    if (currentQuantity > 1) {
        quantitySpan.innerText = currentQuantity - 1;
        updateSubTotalAndTotal();
    }
}

function updateSubTotalAndTotal() {
    let quantity = parseInt(document.getElementById('quantity').innerText);
    let pricePerItem = 39.90; // Update this with the actual price per item

    // Calculate subtotal and update the element
    let subTotal = quantity * pricePerItem;
    document.getElementById('subTotal').innerText = subTotal.toFixed(2) + " €";

    // Add delivery cost (assuming it's a fixed cost)
    let deliveryCost = 5.00;
    let totalAmount = subTotal + deliveryCost;
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2) + " €";
}

// Tablet device functions

let quantityTab;

function increaseQuantityTab() {
    let quantitySpanTab = document.getElementById('quantity-tab');
    let currentQuantityTab = parseInt(quantitySpanTab.innerText);
    quantitySpanTab.innerText = currentQuantityTab + 1;
    updateSubTotalAndTotalTab();
}

function decreaseQuantityTab() {
    let quantitySpanTab = document.getElementById('quantity-tab');
    let currentQuantityTab = parseInt(quantitySpanTab.innerText);

    // Ensure the quantity is at least 1
    if (currentQuantityTab > 1) {
        quantitySpanTab.innerText = currentQuantityTab - 1;
        updateSubTotalAndTotalTab();
    }
}

function updateSubTotalAndTotalTab() {
    let quantityTab = parseInt(document.getElementById('quantity-tab').innerText);
    let pricePerItemTab = 39.90; // Update this with the actual price per item for tablet

    // Calculate subtotal and update the element
    let subTotalTab = quantityTab * pricePerItemTab;
    document.getElementById('subTotalTab').innerText = subTotalTab.toFixed(2) + " €";

    // Add delivery cost (assuming it's a fixed cost)
    let deliveryCostTab = 5.00; // Update this with the actual delivery cost for tablet
    let totalAmountTab = subTotalTab + deliveryCostTab;
    document.getElementById('totalAmountTab').innerText = totalAmountTab.toFixed(2) + " €";
}

// Mobile device functions

let quantityMobile;

function increaseQuantityMobile() {
    let quantitySpanMobile = document.getElementById('quantity-mobile');
    let currentQuantityMobile = parseInt(quantitySpanMobile.innerText);
    quantitySpanMobile.innerText = currentQuantityMobile + 1;
    updateSubTotalAndTotalMobile();
}

function decreaseQuantityMobile() {
    let quantitySpanMobile = document.getElementById('quantity-mobile');
    let currentQuantityMobile = parseInt(quantitySpanMobile.innerText);

    // Ensure the quantity is at least 1
    if (currentQuantityMobile > 1) {
        quantitySpanMobile.innerText = currentQuantityMobile - 1;
        updateSubTotalAndTotalMobile();
    }
}

function updateSubTotalAndTotalMobile() {
    let quantityMobile = parseInt(document.getElementById('quantity-mobile').innerText);
    let pricePerItemMobile = 39.90; // Update this with the actual price per item for mobile

    // Calculate subtotal and update the element
    let subTotalMobile = quantityMobile * pricePerItemMobile;
    document.getElementById('subTotalMobile').innerText = subTotalMobile.toFixed(2) + " €";

    // Add delivery cost (assuming it's a fixed cost)
    let deliveryCostMobile = 5.00; // Update this with the actual delivery cost for mobile
    let totalAmountMobile = subTotalMobile + deliveryCostMobile;
    document.getElementById('totalAmountMobile').innerText = totalAmountMobile.toFixed(2) + " €";
}
