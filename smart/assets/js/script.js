'use strict';



/**
 * add event on element
 */

const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function() {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function() {
    if (window.scrollY > 300) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

/*const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function() {
    this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function() {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var binancecoin = document.getElementById("binancecoin");
var tether = document.getElementById("tether");


var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin&vs_currencies=usd%2Cngn",
    "method": "GET",
    "headers": {}
}

// Default rate values for different products
var rateValues = {
    btc: 1070,
    usdt: 1070,
    eth: 1060,
    sol: 1060,
    bnb: 1060,
    tron: 1060
        // Add default rates for more products here
};

function calculateTotal() {
    var productCode = document.getElementById('productCode').value;
    var rate = rateValues[productCode];
    var amount = parseFloat(document.getElementById('amount').value);
    var total = rate * amount;

    if (!isNaN(total)) {
        document.getElementById('result').innerText = "Total: #" + total.toFixed(2);
    } else {
        document.getElementById('result').innerText = "Please enter a valid amount.";
    }
}

$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    binancecoin.innerHTML = response.tether.usd;
    tether.innerHTML = response.binancecoin.usd;

})