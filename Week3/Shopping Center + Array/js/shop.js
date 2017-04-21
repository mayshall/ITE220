var shop = {
	customerName: "May",
	total: 0,
	products: [
		"Brooklyn T-Shirt White", 
		"Brooklyn T-Shirt Black", 
	 	"Apple Watch", 
		"Android Phone"
		],
	prices: [10,10,199,159],
	displayCustomerName: function () {
		
		var el = document.getElementById ("name");
		var hour = new Date().getHours();
		if(hour > 18) {
			el.textContent = "Good evening, " + shop.customerName;
		}
		else if(hour > 12) {
			el.textContent = "Good afternoon, " + shop.customerName;
		}
		else if(hour > 6) {
			el.textContent = "Good morning, " + shop.customerName;
		}
	
	},
	displayProducts: function () {
		
		var productsText = "";
		var productsElement = document.getElementById("product-list");
		for(var i = 0; i<this.products.length;i++) {

		  productsText += "<li class='list-group-item'><span class='badge'>$"+this.prices[i]+"</span>"+this.products[i]+"</li>";
		  this.total += this.prices[i];
	    }

		productsElement.innerHTML = productsText;

		var	totalPriceElement = document.getElementById("total-price");
		totalPriceElement.textContent = this.total;
	}

};

shop.displayCustomerName();
shop.displayProducts();