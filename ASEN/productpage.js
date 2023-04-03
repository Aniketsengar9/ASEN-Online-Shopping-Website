// signin signup function

// window.onload = function () {
//     let sigin = document.querySelector("#signiin");
//     let popup = document.querySelector(".popup");
//     let popupopen = document.querySelector(".popup.open");
//     let popupinner = document.querySelector(".popupinner");
//     let closebutton = document.querySelector(".closebutton");

//     sigin.addEventListener("click", function (e) {
//         e.preventDefault();
//         popup.classList.add("open");
//     });

//     popup.addEventListener("click", function (e) {
//         e.preventDefault();
//         popup.classList.remove("open");
//     });

//     popupinner.addEventListener("click", function (e) {
//         e.preventDefault();
//         e.stopPropagation();
//     });

//     closebutton.addEventListener("click", function (e) {
//         e.preventDefault();
//         popup.classList.remove("open");
//     });


//     document.addEventListener("click", function (e) {
//         if (!popup.contains(e.target) && !sigin.contains(e.target)) {
//             popup.classList.remove("open");
//         }
//     });
// };
let sigin = document.querySelector("#signiin");
let popup = document.querySelector(".popup");
let popupopen = document.querySelector(".popup.open");
let popupinner = document.querySelector(".popupinner");
let closebutton = document.querySelector(".closebutton");

let myform = document.querySelector("sigin-form");
let siginmail = document.querySelector("#siginmail");
let siginpassword = document.querySelector("#siginpassword");
let btn = document.querySelector(".btn");


let popup1 = document.querySelector(".popup1");
let popupinner1 = document.querySelector(".popupinner1");
let closebutton1 = document.querySelector(".closebutton1");
let signupClick = document.querySelector("#signupclick");

// sigin

sigin.addEventListener("click", function () {
    popup.classList.add("open");
});

popup.addEventListener("click", function () {
    popup.classList.remove("open");
});

popupinner.addEventListener("click", function (e) {
    e.stopPropagation();
});

closebutton.addEventListener("click", function () {
    popup.classList.remove("open");
});

// signup
signupClick.onclick = function () {
    popup1.style.display = "block";
}

closebutton1.onclick = function () {
    popup1.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == popup1) {
        popup1.style.display = "none";
    }
}

let myform1 = document.querySelector("signup-form");
let username = document.querySelector("#username");
let mail = document.querySelector("#mail");
let password = document.querySelector("#password");
let confirmpassword = document.querySelector("#confirmpassword");
let btn1 = document.querySelector(".btn1");

btn1.onclick = function (event) {
    event.preventDefault(); // prevent the form from submitting
    // create an object with the form data
    let formData = {
        username: username.value,
        mail: mail.value,
        password: password.value,
        confirmpassword: confirmpassword.value
    };
    // store the object in Local Storage
    localStorage.setItem("formData", JSON.stringify(formData));
    // clear the form fields
    myform1.reset();
};


// populate form fields with saved data
let savedData = localStorage.getItem("formData");
if (savedData) {
    let formData = JSON.parse(savedData);
    username.value = formData.username;
    mail.value = formData.mail;
    password.value = formData.password;
    confirmpassword.value = formData.confirmpassword;

}

btn.onclick = function (event) {
    event.preventDefault(); // prevent the form from submitting
    let savedData = localStorage.getItem("formData");
    if (savedData) {
        let formData = JSON.parse(savedData);
        if (formData.mail === siginmail.value && formData.password === siginpassword.value) {
            alert("Login successful!");
            const signiinLink = document.querySelector('#signiin');

            // set the text content of the anchor tag to the username
            signiinLink.textContent = formData.username;

        } else {
            alert("Incorrect email or password.");
        }
    } else {
        alert("No user data found.");
    }
}

// product data
let data = [
    {
        id: 1,
        image: "https://assets.ajio.com/medias/sys_master/root/20220906/so8h/6316673eaeb269dbb36e2fe2/buda_jeans_co_blue_mid-wash_skinny_fit_jeans.jpg",
        brand: "Buda Jeans Co",
        desc: "Mid-Wash Skinny Fit Jeans",
        price: "1172",
    },
    {
        id: 2,
        image: "https://assets.ajio.com/medias/sys_master/root/20221219/Ex8T/63a08143f997ddfdbddd4fb6/u.s._polo_assn._white_striped_cotton_shirt.jpg",
        brand: "U.S. Polo Assn.",
        desc: "Striped Cotton Shirt",
        price: "2799",
    },
    {
        id: 3,
        image: "https://assets.ajio.com/medias/sys_master/root/20221108/aqhS/6369faa1f997ddfdbd5febb7/buda_jeans_co_green_polo_t-shirt_with_contrast_tipping.jpg",
        brand: "Buda Jeans Co",
        desc: "Polo T-Shirt with Contrast Tipping",
        price: "458",
    },
    {
        id: 4,
        image: "https://assets.ajio.com/medias/sys_master/root/20220824/FDQq/63052f2ff997dd394c16adbd/superdry_black_core_shorts_with_insert_pockets.jpg",
        brand: "SUPERDRY",
        desc: "Core Shorts with Insert Pockets",
        price: "2599",
    },
    {
        id: 5,
        image: "https://assets.ajio.com/medias/sys_master/root/20221212/zGzK/639740a8f997ddfdbdcc8e72/superdry_white_vintage_polo_t-shirt_with_tipping.jpg",
        brand: "SUPERDRY",
        desc: "Vintage Polo T-Shirt with Tipping",
        price: "3999",
    },
    {
        id: 6,
        image: "https://assets.ajio.com/medias/sys_master/root/20220906/3vHH/6316c09daeb269dbb371f6b4/buda_jeans_co_olive_graphic_print_crew-neck_t-shirt.jpg",
        brand: "Buda Jeans Co",
        desc: "Graphic Print Crew-Neck T-shirt",
        price: "407",
    },
    {
        id: 7,
        image: "https://assets.ajio.com/medias/sys_master/root/20220316/jzWT/6231fecef997dd03e21905bd/armani_exchange_navy_slim_fit_shirt_with_buttoned_cuffs.jpg",
        brand: "ARMANI EXCHANGE",
        desc: "Slim Fit Shirt with Buttoned Cuffs",
        price: "5249",
    },
    {
        id: 8,
        image: "https://assets.ajio.com/medias/sys_master/root/20220513/OWCN/627e26ddaeb26921af770461/the_bear_house_purple_textured_slim_fit_shirt_with_patch_pocket.jpg",
        brand: "THE BEAR HOUSE",
        desc: "Textured Slim Fit Shirt with Patch Pocket",
        price: "1372",
    },
    {
        id: 9,
        image: "https://assets.ajio.com/medias/sys_master/root/20230221/cGDd/63f4650cf997dde6f4b57fa5/gap_black_mid-rise_straight_fit_jeans.jpg",
        brand: "GAP",
        desc: "Mid-Rise Straight Fit Jeans",
        price: "2499",
    },
    {
        id: 10,
        image: "https://assets.ajio.com/medias/sys_master/root/20221208/OExz/6391fe6eaeb269659cde97e6/gap_black_organic_cotton_straight_jeans.jpg",
        brand: "GAP",
        desc: "Organic Cotton Straight Jeans",
        price: "3499",
    },
    {
        id: 11,
        image: "https://assets.ajio.com/medias/sys_master/root/20221117/MXF3/63764b9faeb269659c99e0f0/buda_jeans_co_olive_slim_fit_crew-neck_t-shirt.jpg",
        brand: "Buda Jeans Co",
        desc: "Slim Fit Crew-Neck T-Shirt",
        price: "254",
    },
    {
        id: 12,
        image: "https://assets.ajio.com/medias/sys_master/root/20230302/hL02/6400dadfaeb26924e3a27fb6/gap_green_checked_slim_fit_shirt_with_patch_pocket.jpg",
        brand: "GAP",
        desc: "Checked Slim Fit Shirt with Patch Pocket",
        price: "1899",
    },
    {
        id: 13,
        image: "https://assets.ajio.com/medias/sys_master/root/20221212/PZ5D/639763d3f997ddfdbdcdeba7/superdry_red_vintage_polo_t-shirt_with_tipping.jpg",
        brand: "SUPERDRY",
        desc: "Vintage Polo T-Shirt with Tipping",
        price: "3999",
    },
    {
        id: 14,
        image: "https://assets.ajio.com/medias/sys_master/root/20220818/eRab/62fe5a16aeb269176183d49a/buda_jeans_co_red_polo_t-shirt_with_contrast_tipping.jpg",
        brand: "Buda Jeans Co",
        desc: "Polo T-Shirt with Contrast Tipping",
        price: "458",
    },
    {
        id: 15,
        image: "https://assets.ajio.com/medias/sys_master/root/20220427/kNVR/62685154aeb26921af453830/levis_blue_512_tapered_fit_jeans.jpg",
        brand: "LEVIS",
        desc: "512 Tapered Fit Jeans",
        price: "1665",
    },
    {
        id: 16,
        image: "https://assets.ajio.com/medias/sys_master/root/20220513/xlLS/627e266eaeb26921af76fba2/the_bear_house_grey_checked_slim_fit_shirt.jpg",
        brand: "THE BEAR HOUSE",
        desc: "Checked Slim Fit Shirt",
        price: "1372",
    },
    {
        id: 17,
        image: "https://assets.ajio.com/medias/sys_master/root/20220818/WPRI/62fe5b17aeb269176183dba4/buda_jeans_co_pink_typographic_print_crew-neck_t-shirt.jpg",
        brand: "Buda Jeans Co",
        desc: "Typographic Print Crew-Neck T-Shirt",
        price: "407",
    },
    {
        id: 18,
        image: "https://assets.ajio.com/medias/sys_master/root/20220819/gLHn/62fe8983f997dd394c02f84b/buda_jeans_co_white_%26_black_printed_crew-neck_t-shirt.jpg",
        brand: "Buda Jeans Co",
        desc: "Printed Crew-Neck T-shirt",
        price: "407",
    },
    {
        id: 19,
        image: "https://assets.ajio.com/medias/sys_master/root/20230301/xV1Y/63fe48c0f997dde6f4d294f9/gap_blue_logo_print_crew-neck_t-shirt.jpg",
        brand: "GAP",
        desc: "Logo Print Crew-Neck T-Shirt",
        price: "1299",
    },
    {
        id: 20,
        image: "https://assets.ajio.com/medias/sys_master/root/20221123/5kv7/637dbfe6aeb269659caaa99b/buda_jeans_co_ecru_striped_shirt_with_notched_lapel_collar.jpg",
        brand: "Buda Jeans Co",
        desc: "Striped Shirt with Notched Lapel Collar",
        price: "1124",
    },
    {
        id: 21,
        image: "https://assets.ajio.com/medias/sys_master/root/20230317/FPo1/6414a8deaeb26924e3cd19d3/gap_denim_lightly_washed_slim_tapered_fit_jeans.jpg",
        brand: "GAP",
        desc: "Lightly Washed Slim Tapered Fit Jeans",
        price: "2499",
    },
    {
        id: 22,
        image: "https://assets.ajio.com/medias/sys_master/root/20230322/8m7K/641a028a907deb497a98516c/the_hollander_white_crew-neck_loose_fit_t-shirt.jpg",
        brand: "THE HOLLANDER",
        desc: "Crew-Neck Loose Fit T-Shirt",
        price: "296",
    },
    {
        id: 23,
        image: "https://assets.ajio.com/medias/sys_master/root/20230201/8Nu5/63da40b0f997dd708e3192c5/lee_cooper_blue_distressed_cropped_slim_fit_jeans.jpg",
        brand: "Lee Cooper",
        desc: "Distressed Cropped Slim Fit Jeans",
        price: "2699",
    },
    {
        id: 24,
        image: "https://assets.ajio.com/medias/sys_master/root/20221212/aNYg/63974490f997ddfdbdcd1752/superdry_black_vintage_polo_t-shirt_with_tipping.jpg",
        brand: "SUPERDRY",
        desc: "Vintage Polo T-Shirt with Tipping",
        price: "3999",
    },
    {
        id: 25,
        image: "https://assets.ajio.com/medias/sys_master/root/20210828/0ozJ/61297a6f7cdb8cb8240b1366/puma_black_crew-neck_t-shirt_with_brand_icon.jpg",
        brand: "Puma",
        desc: "Crew-Neck T-shirt with Brand Icon",
        price: "899",
    },
    {
        id: 26,
        image: "https://assets.ajio.com/medias/sys_master/root/20220820/oefr/62ffdf30aeb269176189bb10/buda_jeans_co_white_polo_t-shirt_with_contrast_tipping.jpg",
        brand: "Buda Jeans Co",
        desc: "Polo T-Shirt with Contrast Tipping",
        price: "458",
    },
    {
        id: 27,
        image: "https://assets.ajio.com/medias/sys_master/root/20220513/uQMj/627e246ef997dd03e2b9c619/the_bear_house_cream_striped_slim_fit_linen_shirt.jpg",
        brand: "THE BEAR HOUSE",
        desc: "Striped Slim Fit Linen Shirt",
        price: "1372",
    },
    {
        id: 28,
        image: "https://assets.ajio.com/medias/sys_master/root/20220624/HMdY/62b4b141aeb26921af436f96/performax_black_fastdry_running_active_essential_shorts.jpg",
        brand: "PERFORMAX",
        desc: "Fastdry Running Active Essential Shorts",
        price: "499",
    },
    {
        id: 29,
        image: "https://assets.ajio.com/medias/sys_master/root/ajio/catalog/5eff254af997dd433b4864fc/armani_exchange_white_logo_print_regular_fit_t-shirt.jpg",
        brand: "ARMANI EXCHANGE",
        desc: "Logo Print Regular Fit T-shirt",
        price: "3749",
    },
    {
        id: 30,
        image: "https://assets.ajio.com/medias/sys_master/root/20230220/GW9S/63f3a994f997dde6f4b558bb/armani_exchange_white_comfort_fit_t-shirt_with_icon_logo_foil_embroidery.jpg",
        brand: "ARMANI EXCHANGE",
        desc: "Comfort Fit T-Shirt with Icon Logo Foil Embroidery",
        price: "6999",
    },
    {
        id: 31,
        image: "https://assets.ajio.com/medias/sys_master/root/20230109/FGpk/63bc19cff997dd708ef4f9ef/buda_jeans_co_beige_slim_fit_shirt_with_flap_pockets.jpg",
        brand: "Buda Jeans Co",
        desc: "Slim Fit Shirt with Flap Pockets",
        price: "1019",
    },
    {
        id: 32,
        image: "https://assets.ajio.com/medias/sys_master/root/20230216/6qOe/63edd3a6aeb26924e3748cbf/gas_orange_brand_print_slim_fit_crew-neck_t-shirt.jpg",
        brand: "GAS",
        desc: "Brand Print Slim Fit Crew-Neck T-Shirt",
        price: "1299",
    },
    {
        id: 33,
        image: "https://assets.ajio.com/medias/sys_master/root/20220301/HV2Z/621d2db5f997dd03e2f5a740/levis_multicoloured_checked_slim_fit_shirt_with_patch_pocket.jpg",
        brand: "LEVIS",
        desc: "Checked Slim Fit Shirt with Patch Pocket",
        price: "1316",
    },
    {
        id: 34,
        image: "https://assets.ajio.com/medias/sys_master/root/20230301/3NEy/63fe48c6aeb26924e39a1a6e/gap_tonal_blue_plaid_slim_fit_shirt_with_patch_pocket.jpg",
        brand: "GAP",
        desc: "Slim Fit Shirt with Patch Pocket",
        price: "1899",
    },

];

let product = document.querySelector(".products");
let cart = JSON.parse(localStorage.getItem("cartlist")) || [];
display(data);
function display(data) {
    product.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        let des = document.createElement("p");
        let img = document.createElement("img");
        let brand = document.createElement("h3");
        let price = document.createElement("h4");
        let atc = document.createElement("button")
        img.src = data[i].image;

        brand.innerText = data[i].brand;
        brand.style.textAlign = "center";
        brand.style.color = "#b19975"

        des.innerText = data[i].desc;
        des.style.textAlign = "center";

        price.innerText = "₹" + data[i].price;
        price.style.textAlign = "center";

        atc.innerText = "ADD TO CART"
        atc.style.display = "block";
        atc.style.margin = "0 auto";
        atc.style.color = "#b19975";
        atc.style.border = "none";
        atc.style.width = "50%";
        atc.style.fontSize = "18px";
        atc.style.marginBottom = "22px";
        img.style.width = "100%";
        card.style.boxShadow = "0px 0px 10px";
        card.style.marginLeft = "9%";
        card.style.marginTop = "10%";
        //card.style.paddingTop ="10%"

        atc.addEventListener("click", function () {
            // console.log(data[i])
            let checkitem = cart.findIndex(function (ele) { return ele.id === data[i].id })
            if (checkitem >= 0) {
                alert("Product already exist in cart")
            }
            else {
                cart.push({ ...data[i], QUANTITY: 1 })
                localStorage.setItem("cartlist", JSON.stringify(cart))
                alert("Product added to cart")
                count.innerText = cart.length
                display(data)
            }
        })

        card.append(img, brand, des, price, atc);
        product.append(card);

    }
}

//searchbar

// let search = document.querySelector("#searchbar");
// search.addEventListener("input", function () {
//     let s = search.value.toLowerCase();
//     // console.log(s)


//     if (s.value === "") {
//         display(data);
//     }
//     else {
//         let res = data.filter(function (el) {
//             console.log(el.brand)
//             if (el.brand.toLowerCase().includes(s)) {
//                 return true
//             }
//         })
//         display(data);
//     }
// })
let totalitems = document.querySelector(".totalitem");
totalitems.textContent = data.length;

let search = document.querySelector("#searchbar");
search.addEventListener("input", function () {
    let s = search.value.toLowerCase();
    // totalitems.textContent = res.length;
    let res = data.filter(function (el) {
        return el.brand.toLowerCase().includes(s);
    });

    display(res);
    totalitems.textContent = res.length;
});

// filter


let fil = document.querySelector("#filter");

fil.addEventListener("change", function () {
    if (fil.value == "") {
        display(data);
    } else {
        let temp = data.filter(function (e) {
            if (e.brand == fil.value) {
                return true;
            }

        });
        display(temp);
        totalitems.textContent = temp.length;
    }
});

// sortfilter

let sorted = document.querySelector("#paisafida")
sorted.addEventListener("change", function () {
    if (sorted.value == "") {
        display(data);
    }
    else if (sorted.value == "Low to High") {
        let temp = data.slice().sort(function (a, b) { return (+a.price) - (+b.price) });
        display(temp);
    }
    else if (sorted.value == "High to Low") {
        let temp = data.slice().sort(function (a, b) { return (+b.price) - (+a.price) });
        display(temp);
    }
})