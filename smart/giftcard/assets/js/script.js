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



// search_data

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
            let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
                second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

            return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
        })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}
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

// 0    ````````````````````````````````````````````````````````````````````````````````````calculator



// Default rate values for different products
var rateValues = {
    Apple: 800,
    Razer: 850,
    Sephora: 895,
    Steam: 1200,
    Nordstorm: 790,
    Google: 1200,
    Visa: 855,
    Footlocker: 830,
    Vanilla: 760,
    Ebay: 775,
    Amex: 721,
    Amazon: 1210,
    Nike: 760,
    Walmart: 1200,
    Playstation: 538,
    Gamestop: 1200,
    Roblox: 1200,
    Netspend: 1215,
    Xbox: 1200,
    Macy: 770,
    Homedepot: 1210,
    Kohl: 510,
    Lowe: 1200,
    Cvs: 1215,
    Sak: 1200,
    Neosurf: 1200,
    DollarGeneral: 1215,
    Bloomingdales: 1200
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




$.ajax(settings).done(function(response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    binancecoin.innerHTML = response.tether.usd;
    tether.innerHTML = response.binancecoin.usd;

})