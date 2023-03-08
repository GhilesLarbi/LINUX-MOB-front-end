const rootPath = "../";

// img popup
const editImgBtn = document.querySelector(".edit-img-btn");
const editImgsBox = document.querySelector(".edit-imgs");

editImgBtn.addEventListener("click", () => {
    editImgsBox.classList.toggle("show");
})


// control tabs
const dashControls = document.querySelectorAll(".dash-control");
let dashSelectedControl = document.querySelector(".select.dash-control");

const dashTabs = document.querySelectorAll(".dash-tab");
let dashSelectedTab = document.querySelector(".select.dash-tab");

const tabTitles = document.querySelectorAll(".tab-title");
let tabSelectedTitle = document.querySelector(".select.tab-title");


dashControls.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        btn.classList.add("select");
        dashSelectedControl.classList.remove("select")
        dashSelectedControl = btn;


        dashTabs[i].classList.add("select");
        dashSelectedTab.classList.remove("select");
        dashSelectedTab = dashTabs[i];

        tabTitles[i].classList.add("select");
        tabTitles[i].attributes["role"].value = "heading"
        tabSelectedTitle.classList.remove("select");
        tabSelectedTitle.attributes["role"].value = "none"
        tabSelectedTitle = tabTitles[i];
    });
});

if (localStorage.getItem("tab") == "3") {
    localStorage.setItem("tab", "");

    dashControls[2].classList.add("select");
        dashSelectedControl.classList.remove("select")
        dashSelectedControl = dashControls[2];


        dashTabs[2].classList.add("select");
        dashSelectedTab.classList.remove("select");
        dashSelectedTab = dashTabs[2];

        tabTitles[2].classList.add("select");
        tabSelectedTitle.classList.remove("select");
        tabSelectedTitle = tabTitles[2];
}


// get data

let user = getCurrentUser();

if (!user) user = {
    firstName : "User",
    lastName : "Name", 
    email : "Exemple@exmple.com", 
    password : "admin",
    phoneNumber : "+213 987654321", 
    address : "Algeria",
    designation : "Ui/Ux Designer", 
    image : "avatar.svg", 
}
addUser(user);
let userIndex = isUserExist(user.email, user.password);

// image
const dashImg = document.querySelector(".dash-img");
dashImg.attributes["src"].value = rootPath + "images/avatars/" + user.image;

const editImgs = document.querySelectorAll(".edit-img");
editImgs.forEach((img, i) => {
    img.addEventListener("click", () => {
        editImgsBox.classList.remove("show");
        user.image = "avatar"+(i+1)+".svg";
        dashImg.attributes["src"].value = rootPath + "images/avatars/" + user.image;
        updateUser(userIndex, user);
    });
});

// user name
const dashName = document.querySelector(".dash-name");

// account tab
const accountInputs = document.querySelectorAll(".account-tab .dash-input");
function updateAccountTab() {
    accountInputs.forEach((input, i) => {
        input.value = "";
    });
    dashName.innerText = user.firstName + " " + user.lastName;
    if (user.firstName == "") {
        accountInputs[0].attributes["placeholder"].value = "empty"
        accountInputs[0].classList.add("empty");
    } else {
        accountInputs[0].attributes["placeholder"].value = user.firstName;
        accountInputs[0].classList.remove("empty");
    }

    if (user.lastName == "") {
        accountInputs[1].attributes["placeholder"].value = "empty"
        accountInputs[1].classList.add("empty");
    } else {
        accountInputs[1].attributes["placeholder"].value = user.lastName;
        accountInputs[1].classList.remove("empty");
    }

    if (user.email == "") {
        accountInputs[2].attributes["placeholder"].value = "empty"
        accountInputs[2].classList.add("empty");
    } else {
        accountInputs[2].attributes["placeholder"].value = user.email;
        accountInputs[2].classList.remove("empty");
    }

    if (user.phoneNumber == "") {
        accountInputs[3].attributes["placeholder"].value = "empty"
        accountInputs[3].classList.add("empty");
    } else {
        accountInputs[3].attributes["placeholder"].value = user.phoneNumber;
        accountInputs[3].classList.remove("empty");
    }

    if (user.address == "") {
        accountInputs[4].attributes["placeholder"].value = "empty"
        accountInputs[4].classList.add("empty");
    } else {
        accountInputs[4].attributes["placeholder"].value = user.address;
        accountInputs[4].classList.remove("empty");
    }

    if (user.designation == "") {
        accountInputs[5].attributes["placeholder"].value = "empty"
        accountInputs[5].classList.add("empty");
    } else {
        accountInputs[5].attributes["placeholder"].value = user.designation;
        accountInputs[5].classList.remove("empty");
    }
}
updateAccountTab();

const accountUpdateBtn = document.querySelector(".account-update-btn");
const deleteAccountLink = document.querySelector(".delete-account-link");
accountInputs.forEach((input, index) => {
    let writingInterval;
    input.addEventListener("focus", () => {
        input.parentElement.classList.remove("error");
        if (accountUpdateBtn.disabled) {
            writingInterval = setInterval(() => {
                if (input.value.trim().length != 0) {
                    accountUpdateBtn.disabled = false;
                    clearInterval(writingInterval);
                }
            }, 50);
        }
    });
    input.addEventListener("focusout", () => {
        clearInterval(writingInterval);
    });
});

accountUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = true;
    if (accountInputs[2].value.trim().length != 0) {
        if (!ValidateEmail(accountInputs[2].value)) {
            accountInputs[2].parentElement.classList.add("error");
            accountInputs[2].parentElement.setAttribute("data-error-message", "doesn't look like an email");
            isValid = false
        }
    }

    if (accountInputs[3].value.trim().length != 0) {
        if (!ValidatePhone(accountInputs[3].value)) {
            accountInputs[3].parentElement.classList.add("error");
            accountInputs[3].parentElement.setAttribute("data-error-message", "you sure about this number 🤔");
            isValid = false
        }
    }

    if (!isValid) return;
    user.firstName = accountInputs[0].value.trim().length == 0? user.firstName :   accountInputs[0].value ;
    user.lastName = accountInputs[1].value.trim().length == 0? user.lastName :   accountInputs[1].value ; 
    user.email = accountInputs[2].value.trim().length == 0? user.email :   accountInputs[2].value ; 
    user.phoneNumber = accountInputs[3].value.trim().length == 0? user.phoneNumber :   accountInputs[3].value ; 
    user.address = accountInputs[4].value.trim().length == 0? user.address :   accountInputs[4].value ;
    user.designation = accountInputs[5].value.trim().length == 0? user.designation :   accountInputs[5].value ; 

    updateAccountTab();
    updateUser(userIndex, user);
    accountUpdateBtn.disabled = true;
})

deleteAccountLink.addEventListener("click", (e)=> {
    e.preventDefault();
    removeUser(userIndex);
    setCurrentUser(null);
    window.location.href= "../index.html";
});


// selles tab
if (getCartLength() == 0) {
    document.querySelector(".selles-tab").innerHTML = `
        <div class="no-items-box">
            You haven't select any item!
        </div>
    `;
}
else {
    let items = getCartItems();
    const sellCardsBox = document.querySelector(".sell-cards");
    sellCardsBox.innerHTML = items.map(item => {
        return `
        <div class="sell-card">
        <div class="sell-img-box">
        <img src="${rootPath + "images/"+ (item.type == "device" ? "phones/":"gadgets/") +item.image}" class="sell-img">
        </div>
        <div class="sell-card-info">
        <p class="sell-name">${item.name}</p>
        <p class="sell-price">Price <strong>$${item.price}</strong></p>
        <p class="sell-quantity">quantity <strong>${item.quantity}</strong></p>
        </div>
        </div>
        `;
    }).join("");
    const sellTotalPrice = document.querySelector(".sell-total-price");
    sellTotalPrice.innerText = "$"+getCartPrice();

    const agree = document.querySelector("#agree");
    document.querySelector(".buy-product-btn").addEventListener("click",() => {
        if (agree.checked) showData("Well done");
        else showData("You didn't agreed to our conditions!");
    });
}


// logout btn
document.querySelector(".logout-btn").addEventListener("click", () => {
    setCurrentUser(null);
    window.location.href = "../index.html";
});


// password tab
const passUpdateBtn = document.querySelector(".password-update-btn");
const passInputs = document.querySelectorAll(".password-tab .dash-input");
passInputs[0].addEventListener("focus", () => {
    passInputs[0].parentElement.classList.remove("error");
    writingInterval = setInterval(() => {
        if (passInputs[0].value.trim().length != 0) {
            passUpdateBtn.disabled = false;
        } else {
            passUpdateBtn.disabled = true;
        }
    }, 50);
});

passInputs[0].addEventListener("focusout", () => {
    clearInterval(writingInterval);
});

passInputs[1].addEventListener("focus", () => {
    passInputs[1].parentElement.classList.remove("error");
})
passInputs[2].addEventListener("focus", () => {
    passInputs[2].parentElement.classList.remove("error");
})

passUpdateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let isValid = true;
    if (passInputs[0].value != user.password) {
        passInputs[0].parentElement.classList.add("error");
        passInputs[0].parentElement.setAttribute("data-error-message", "doesn't match your old one");
        isValid = false
    }

    if (passInputs[1].value != passInputs[2].value) {
        passInputs[1].parentElement.classList.add("error");
        passInputs[2].parentElement.classList.add("error");
        passInputs[1].parentElement.setAttribute("data-error-message", "aren't the same");
        passInputs[2].parentElement.setAttribute("data-error-message", "aren't the same");
        isValid = false
    }

    if (passInputs[1].value.trim().length == 0 && passInputs[2].value.trim().length == 0) {
        passInputs[1].parentElement.classList.add("error");
        passInputs[2].parentElement.classList.add("error");
        passInputs[1].parentElement.setAttribute("data-error-message", "can't be empty");
        passInputs[2].parentElement.setAttribute("data-error-message", "can't be empty");
        isValid = false
    }

    if (!isValid) return;
    user.password = passInputs[1].value;

    updateUser(userIndex, user);
    passUpdateBtn.disabled = true;
    passInputs.forEach(input => {
        input.value = "";
    })
});