const body = document.getElementById("body");


const products = [
  new Product("shoe", 2000, "footwear"),
  new Product("watch", 4000, "accessories"),
  new Product("phone", 40000, "electronics"),
  new Product("jeans", 3000, "garments"),
  new Product("Colddrink", 60, "Food"),
  new Product("shirt", 1500, "Garments")
];


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

        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(category);

        card.addEventListener('mouseenter', ()=>{card.style.border = "2px solid gray"})
        card.addEventListener('mouseleave', ()=>{card.style.border = " 2px solid white"})

        container.appendChild(card)
    })

}



function Product(name, price, category)
{
    this.name = name;
    this.price = price;

    this.category = category;

}

function findCostliest()
{
    const costliest = Math.max.apply(null, products.map(p=>p.price))
    const costliestProd = products.find(p=> p.price==costliest)

    document.getElementById("costliestProduct").textContent = (`The Costliest Product is:  ${costliestProd.name} and it's price is $${costliest}`)
}

Product.prototype.getDiscountedPrice=()=>
{
    return this.price - (this.price * 0.2);
}

(function init()
{
    createElements()
    findCostliest();
    console.log("Website Loaded")
})();