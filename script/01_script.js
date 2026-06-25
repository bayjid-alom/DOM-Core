console.log("01 Script Connected.")


const mainTitle = document.getElementById("main-title");
console.log(mainTitle.innerText)
mainTitle.innerText = "Hello JavaScript...!!"


const listItems = document.querySelectorAll(".list-item");
console.log(listItems)
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
console.log(image)

image.setAttribute('alt', "Updated image failed!")
image.setAttribute('class', '#image')






// ===================================================
const countBtn = document.getElementById("count-btn")
let count = 0;
countBtn.addEventListener("click", function () {
    const counter = document.getElementById("count")
    count++;
    counter.innerText = count;
})








