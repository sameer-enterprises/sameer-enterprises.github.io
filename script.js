// Sameer Enterprises Script v1

// Product Search

const searchInput=document.querySelector(".search input");

const cards=document.querySelectorAll(".product-card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let value=searchInput.value.toLowerCase();

cards.forEach(card=>{

let text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="grid";

}else{

card.style.display="none";

}

});

});

}



// Smooth Scroll

document.querySelectorAll("a").forEach(anchor=>{

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href.startsWith("#")){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});



// Sticky Header

window.addEventListener("scroll",()=>{

const topbar=document.querySelector(".topbar");

if(window.scrollY>80){

topbar.style.position="fixed";

topbar.style.top="0";

topbar.style.left="0";

topbar.style.width="100%";

topbar.style.zIndex="999";

}else{

topbar.style.position="relative";

}

});

console.log("Sameer Enterprises Loaded");
// Scroll To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.bottom="20px";

topBtn.style.right="20px";

topBtn.style.width="50px";

topBtn.style.height="50px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#ff9800";

topBtn.style.color="#fff";

topBtn.style.fontSize="20px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// Buy Button Effect

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.innerHTML="Redirecting...";

setTimeout(()=>{

btn.innerHTML="🛒 Buy Now";

},1500);

});

});

console.log("Script Part 2 Loaded");
// ==========================
// Sameer Enterprises v1.0
// ==========================

// Hero Animation
window.addEventListener("load",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.opacity="0";

hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="0.8s";

hero.style.opacity="1";

hero.style.transform="translateY(0)";

},200);

}

});

// Button Hover Effect
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Current Year in Footer
const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML="© "+new Date().getFullYear()+" Sameer Enterprises";

}

console.log("Sameer Enterprises v1.0 Ready");

// Dynamic Product System

fetch("products.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("products-container");

if (!container) return;

Object.keys(data).forEach(category => {

data[category].forEach(product => {

container.innerHTML += 
<div class="product-card">

<div class="product-image">
<img src="${product.image}" alt="${product.name}">
</div>

<div class="product-details">
<h2>${product.name}</h2>

<p class="price">
₹${product.price}
<span>₹${product.oldPrice}</span>
</p>

<p>⭐ ${product.rating}</p>

<p>${product.badge}</p>

<a href="${product.buyLink}" target="_blank">
<button class="buy-btn">
🛒 Buy Now
</button>
</a>

</div>

</div>
;

});

});

})
.catch(error => console.log(error));
