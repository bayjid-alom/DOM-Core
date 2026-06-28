## 🚀 M04 - DOM (Document Object Model)

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-DOM_Core-yellow?style=for-the-badge\&logo=javascript)
![Session](https://img.shields.io/badge/CS1-DOM_Basics-blue?style=for-the-badge)
![Milestone](https://img.shields.io/badge/Milestone-04-success?style=for-the-badge)

</div>

[Visit : DOM Core 🔥](https://bayjid-alom.github.io/DOM-Core/)

---

## 📖 Topics Covered

* DOM Introduction
* DOM Traversing
* `getElementById()`
* `getElementsByClassName()`
* `getElementsByTagName()`
* `querySelector()`
* `querySelectorAll()`
* Parent, Child & Sibling Nodes
* Creating Elements
* `appendChild()`
* `innerText`
* `innerHTML`
* `getAttribute()`
* `setAttribute()`
* Dynamic Styling
* `classList.add()`
* `classList.remove()`

---


### 🔍 querySelector() & querySelectorAll()

```js

 * querySelector() ব্যবহার করলে CSS Selector-এর মতো লিখতে হয়।
 *
 * ID  → #id-name
 * Class → .class-name
 * Tag → tag-name   (div)
 *
 * querySelector()
 * ➜ প্রথম matching element return করে।
 *
 * querySelectorAll()
 * ➜ সব matching elements return করে (NodeList)।
 
```

### ✔️ Output Types
- console.log(mainDiv.children[0].children)
- HTMLCollection []
---
- console.log(mainDiv.children[0].childNodes)
- NodeList [text]

---

### ✔️ setAttributes
- image.setAttribute('alt', "Updated image failed!")
- image.setAttribute('class', '#image')



``` 
✔️ forEach(item =>{})
for of এর পরিবর্তে এভাবে একটা একটা আইটেম পাওয়া যায় । 

listItems.forEach(item => {
    console.log(item);
    item.style.color = "blue";
    item.style.fontSize = "20px";
})
```


- Nodelist পেলে forEach(item =>{}) Use করা যায় ।