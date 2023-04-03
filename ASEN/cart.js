window.onload = function () {
    let sigin = document.querySelector("#signiin");
    let popup = document.querySelector(".popup");
    let popupopen = document.querySelector(".popup.open");
    let popupinner = document.querySelector(".popupinner");
    let closebutton = document.querySelector(".closebutton");

    sigin.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.add("open");
    });

    popup.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.remove("open");
    });

    popupinner.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    closebutton.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.remove("open");
    });


    document.addEventListener("click", function (e) {
        if (!popup.contains(e.target) && !sigin.xins(e.target)) {
            popup.classList.remove("open");
        }
    });
};

let btotal = document.querySelector("#btotal");
let ototal = document.querySelector("#ototal");
let carttotal = document.querySelector(".carttotal");
let cart = JSON.parse(localStorage.getItem("cartlist"));
let cartitems = document.querySelector(".cartitem");

display(cart);

function display(data) {
    cartitems.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let img = document.createElement("img");
        let brand = document.createElement("h3");
        let price = document.createElement("h4");
        let des = document.createElement("p");
        let quan = document.createElement("p");
        let plus = document.createElement("button");
        let min = document.createElement("button");
        let del = document.createElement("button");

        img.src = data[i].image;
        brand.innerText = data[i].brand;
        brand.style.textAlign = "center";
        brand.style.color = "#b19975";
        brand.style.marginTop = "-5px";

        des.innerText = data[i].desc;
        des.style.textAlign = "center";
        des.style.marginTop = "-5px";

        price.innerText = "₹" + data[i].price;
        price.style.textAlign = "center";
        price.style.marginTop = "0px";

        quan.innerText = data[i].QUANTITY;
        quan.setAttribute("class", "quan");

        del.innerText = "REMOVE";
        del.setAttribute("class", "del");

        plus.innerText = "+";
        plus.setAttribute("class", "plus");

        min.innerText = "-";
        min.setAttribute("class", "min");

        plus.addEventListener("click", function () {
            data[i].QUANTITY++;
            quan.innerText = data[i].QUANTITY;
            localStorage.setItem("cartlist", JSON.stringify(data));
            updateTotal();
        });

        min.addEventListener("click", function () {
            if (data[i].QUANTITY > 1) {
                data[i].QUANTITY--;
                quan.innerText = data[i].QUANTITY;
                localStorage.setItem("cartlist", JSON.stringify(data));
                updateTotal();
            }
        });

        del.addEventListener("click", function () {
            data.splice(i, 1);
            localStorage.setItem("cartlist", JSON.stringify(data));
            display(data);
            updateTotal();
        });

        card.append(img, brand, des, price, plus, quan, min, del);
        cartitems.append(card);
    }
    updateTotal();
}

function updateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += +cart[i].price * +cart[i].QUANTITY;
    }
    total.toFixed(2);
    btotal.innerText = "₹" + total;
    ototal.innerText = "₹" + total;
}

carttotal.innerText = cart.length;

// ordersuccessful 
let placeorder = document.querySelector("#proceedtoshipping")
let ordersuccessful = document.querySelector("#ordersuccessful")
placeorder.addEventListener("click", function () {
    if (cart.innerHTML != "") {
        placeorder.style.display = "none"
        ordersuccessful.style.display = "block"
    }
})
let orderclose = document.querySelector("#orderclose")
orderclose.addEventListener("click", function () {
    cart.innerHTML = ""
    ordersuccessful.style.display = "none"
    localStorage.setItem("cartlist", JSON.stringify(data))
    window.location.href = "index.html";
})