const body = document.getElementById("body");

//array for products
const products = [
  new Product("shoe", 2000, "footwear"),
  new Product("watch", 4000, "accessories"),
  new Product("phone", 40000, "electronics"),
  new Product("jeans", 3000, "garments"),
  new Product("Colddrink", 60, "Food"),
  new Product("shirt", 1500, "Garments")
];

//creating elements to display  on page
function createElements()
{

    const container = document.getElementById("container")
   
   

    products.forEach(prod=>{
        const card = document.createElement("div")
        card.className = "card"

        const name = document.createElement("h3")
        name.innerText = prod.name;

        const price = document.createElement("p")
        price.innerText = "Price: $" +prod.price;

        const category = document.createElement("p")
        category.innerText = "Category: " +prod.category;

        const discount = document.createElement("p")
        discount.innerText = "Discounted Price: "  + prod.getDiscountedPrice()

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(category);
        card.appendChild(discount)

        card.addEventListener('mouseenter', ()=>{card.style.border = "2px solid gray"})
        card.addEventListener('mouseleave', ()=>{card.style.border = " 2px solid white"})

        container.appendChild(card)
    })

}




//consturctor function to assign values
function Product(name, price, category)
{
    this.name = name;
    this.price = price;

    this.category = category;

}

//finds the costliest product
function findCostliest()
{
    const costliest = Math.max.apply(null, products.map(p=>p.price))
    const costliestProd = products.find(p=> p.price==costliest)

    document.getElementById("costliestProduct").textContent = (`The Costliest Product is:  ${costliestProd.name} and it's price is $${costliest}`)
}


//function to get discounted price of products
Product.prototype.getDiscountedPrice = function() {
  return this.price - (this.price * 0.2);
};


//initializer function set as IIFE
(function init()
{
    createElements()
    findCostliest();
    console.log("Website Loaded")
})();