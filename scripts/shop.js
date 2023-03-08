const rootPath = "../";
const topMessageBtn = document.querySelector(".top-message-btn");
topMessageBtn.addEventListener("click", () => {
    document.body.removeChild(topMessageBtn.parentElement);
});
if (getCurrentUser()) {
    document.body.removeChild(topMessageBtn.parentElement);
}


insertCart(navbar.querySelector(".cart-btn"))
insertDevices(document.querySelector(".devices"));
insertGadgets(document.querySelector(".gadget-container"));
document.querySelectorAll("*[data-modular]").forEach((elm) => {
    elm.addEventListener("click", (e) => {
        e.preventDefault();
        showData(elm.attributes["data-modular"].value);
    });
});
document.querySelectorAll("*[data-modular-log]").forEach((elm) => {
    elm.addEventListener("click", (e) => {
        e.preventDefault();
        if (elm.attributes["data-modular-log"].value == "sign") {
            showLog(true);
        } else {
            showLog(false);
        }

    });
});


// random select device
let randDevice = Math.floor(Math.random() * Devicesdata.length);
let randDeviceImg =  Math.floor(Math.random() * Devicesdata[randDevice].image.length);

document.querySelector(".new-device-name").innerText = Devicesdata[randDevice].name;
document.querySelector(".new-device-description").innerText = Devicesdata[randDevice].description;
document.querySelector(".new-device-img").src = rootPath + "images/phones/" + Devicesdata[randDevice].image[randDeviceImg];
document.querySelector(".new-device-btn").addEventListener("click", () => {
    addCartItem(Devicesdata[randDevice]);
});

document.querySelector(".new-device-price").innerHTML = `
    <span class="before-price">${Devicesdata[randDevice].price}$</span>
    <span class="after-price">${parseFloat(Devicesdata[randDevice].price*0.6).toFixed(2)}$</span>
`;




// random select gadgets
let randGadgetsList = [];

while (randGadgetsList.length < 3) {
    let randgadget = Math.floor(Math.random() * gadgetData.length);
    if (randGadgetsList.includes(randgadget)) continue;
    randGadgetsList.push(randgadget);
}

const popularGadgets =  document.querySelector(".popular-gadgets");
popularGadgets.innerHTML += randGadgetsList.map((gadgetIndex) => {
    return `
        <div class="popular-gadget">
            <img src="../images/gadgets/${gadgetData[gadgetIndex].image}" class="popular-gadget-img">
            <div class="popular-gadget-overlay">
                <button class="btn btn--secondary btn--small btn-outline">add to cart</button>
            </div>
        </div>
    `
}).join("");

popularGadgets.querySelectorAll("button.btn").forEach((btn,index) =>{
    btn.addEventListener("click",(e) =>{
        e.preventDefault()
        addCartItem(gadgetData[randGadgetsList[index]]);
    });
});

// random daily deal
let randDaiy = Math.floor(Math.random() * Devicesdata.length);
while (randDaiy == randDevice) {
    randDaiy = Math.floor(Math.random() * Devicesdata.length);
}

document.querySelectorAll(".daily-deal-img").forEach((img, i) => {
    img.src = rootPath + "images/phones/" + Devicesdata[randDaiy].image[i];
})

document.querySelector(".daily-deal-btn").addEventListener("click", () => {
    addCartItem(Devicesdata[randDaiy]);
});
document.querySelector(".daily-deal-price").innerHTML = `
    <span class="before-price">${Devicesdata[randDaiy].price}$</span>
    <span class="after-price">${parseFloat(Devicesdata[randDaiy].price*0.8).toFixed(2)}$</span>
`;

