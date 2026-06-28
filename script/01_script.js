// console.log("01 Script Connected.")

const mainTitle = document.getElementById("main-title");
mainTitle.innerText = "Hello JavaScript...!!"


const listItems = document.querySelectorAll(".list-item");

// NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]
// listItems[0].style.color = "green";
// একটা একটা Item পেতে ফর লুপ চালাতে হবে ।
listItems.forEach(item => {
    // console.log(item);
    item.style.color = "red";
    item.style.fontSize = "20px";
    item.style.backgroundColor = "lightblue";
    item.style.marginBottom = "12px";
})


// for (const li of listItems) {
//     console.log(li)
// }



const mainDiv = document.getElementById("main-div");

console.log(mainDiv.children[0].children)
// HTMLCollection []
console.log(mainDiv.children[0].childNodes)
// NodeList [text]


// Attributes
const image = document.querySelector("img");  // (img tag)

image.setAttribute('alt', "Updated image failed!")
image.setAttribute('class', '#image')




const countBtn = document.getElementById("count-btn")
let count = 0;
countBtn.addEventListener("click", function () {
    const counter = document.getElementById("count")
    count++;
    counter.innerText = count;
})





/***** Steps :
 *
 
 *****/






const wishlistBtn = document.querySelectorAll(".wishlist-btn-card");

let coount = 0;
wishlistBtn.forEach(btn => {
    btn.addEventListener('click', function (event) {
        let wishCount = document.getElementById("wishCount");
        coount++;
        wishCount.innerText = coount;
    })
})

/**** 
 * কার্টে Button ক্লিক করলে কার্ডের প্রডাক্টের নাম, দাম, ক্যাটেগরি বের করে নিয়ে আসতে হবে।
 * অন্য একটি জায়গায় রাখার জন্য  let cart = []; ধরে নিতে হবে ।
 * নাম, দাম, ক্যাটেগরির একটা অবজেক্ট বানিয়ে নিতে হবে ।
 * একটা ফাংশনে এই অবজেক্ট কে product প্যারামিটার হিসেবে পাঠাতে হবে ।
 * addToCart(product);
 * 
****/

const buttons = document.querySelectorAll(".add-to-cart-btn");

let cart = []
buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        const card = e.target.closest(".product-card");

        const productName = card.querySelector(".product-name").textContent;
        const price = parseInt(card.querySelector(".product-price").textContent);
        const category = card.querySelector(".category-name").textContent;

        const product = {
            name: productName,
            productPrice: price,
            productCategory: category,
            quantity: 1,
        }

        addToCart(product)
    });
});


function addToCart(product) {
    const existingItem = cart.find(item => item.name == product.name);
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        cart.push(product)
    }
    console.log(cart)

    updateCart()
}



// To show 
const cartItemsDiv = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice")

function updateCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    cart.forEach(item => {
        total = total + (item.productPrice * item.quantity);
        totalItems = totalItems + item.quantity;

        const div = document.createElement("div");

        div.innerHTML = `
                ${item.name} (x ${item.quantity}) - ${item.productPrice * item.quantity}

                <button>Remove</button>

                `;

        cartItemsDiv.appendChild(div)
    })


    cartCount.innerText = totalItems;
    totalPrice.innerText = total;
}







