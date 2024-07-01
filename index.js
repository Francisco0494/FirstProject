document.addEventListener("DOMContentLoaded",function(){ // We make sure our DOM is fully loaded

// Tip Calculator

const btnEl = document.getElementById("calcular");
const billInput = document.getElementById("Bill");
const porInput = document.getElementById("Porcentaje");
const totalSpan = document.getElementById("Total");


function calculador(){
    const billValue = billInput.value;
    const porValue = porInput.value;
    const totalValue = billValue *(1+(porValue/100));
    totalSpan.innerText=totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculador);


// Nav Bar

const navbarElement = document.querySelector(".navbar");
const bottomContainerElement = document.querySelector(".bottom-container");

function adjustNavbar(){
    if(window.scrollY>bottomContainerElement.offsetTop - navbarElement.offsetHeight -50) {
        navbarElement.classList.add("active");
    }else{
        navbarElement.classList.remove("active");
    }
}

adjustNavbar();

window.addEventListener("scroll",adjustNavbar);

// Console Log to check that everything is working 

console.log("Button element:", btnEl);
console.log("Bill input element:", billInput);
console.log("Percentage input element:", porInput);
console.log("Total span element:", totalSpan);
console.log("Navbar element:", navbarElement);
console.log("Bottom container element:", bottomContainerElement);

});

