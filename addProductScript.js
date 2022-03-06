// Add Product to Bag
function Product(name, price, size, shipping) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.shipping = shipping;
    this.calcShipping = function () {
        if (this.price > 50) {
            this.shipping = 0;
        } else {
            this.shipping = 8;
        }
    }
    var newPrice = Number(this.price) + Number(this.shipping);

    this.summary = function () {
        this.size = document.getElementById('sizeSelect').value;
        document.getElementById("product").innerHTML = "Product: " + this.name;
        document.getElementById("productSize").innerHTML = "Size: " + this.size;
        document.getElementById("cost").innerHTML = "Price: $" + this.price;
        document.getElementById("ship").innerHTML = "Shipping: $" + this.shipping;
        document.getElementById("total").innerHTML = "Total: $" + newPrice;
    }
};

// Products
var sweater = new Product("80's Vintage Sweater", 35, "", 8);
var cargo = new Product("Khaki Cargo Pants", 25, "", 8);
var tee = new Product("Y2K Graphic Tee", 23, "", 8);
var sweats = new Product("Fleece Cargo Sweat Pants", 33, "", 8);

// Checkout side bar
function openCheck() {
    document.getElementById("myCheckbar").style.width = "300px";
}

function closeCheck() {
    document.getElementById("myCheckbar").style.width = "0";
}