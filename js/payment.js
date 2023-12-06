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