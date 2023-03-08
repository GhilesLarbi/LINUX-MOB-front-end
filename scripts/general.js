// cart local storage functions
if (!localStorage.getItem("cartItems")) clearCart();

function getCartItems() {
    return JSON.parse(localStorage.getItem("cartItems"));
}
function addCartItem(object) {
    let data = JSON.parse(localStorage.getItem("cartItems"));
    let item = {
        name: object.name,
        image: object.image[0],
        price: object.price,
        quantity: 1,
        type: object.type
    }

    let isAvailable = false;
    let i = 0;
    for (i; i < data.length; i++) {
        if (data[i].name == item.name) {
            data[i].quantity += 1;
            isAvailable = true;
            break;
        }
    }

    if (!isAvailable) data.push(item);
    localStorage.setItem("cartItems", JSON.stringify(data));
    addCartElement(data[i], isAvailable, i);
}
function removeCartItem(index) {
    let data = JSON.parse(localStorage.getItem("cartItems"));
    data.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(data));
}
function clearCart() {
    localStorage.setItem("cartItems", "[]");
}
function getCartLength() {
    let data = JSON.parse(localStorage.getItem("cartItems"));
    return data.length;
}
function getCartPrice() {
    let data = JSON.parse(localStorage.getItem("cartItems"));
    let total = 0;
    for (let i = 0; i < data.length; i++) total += data[i].price * data[i].quantity;
    return parseFloat(total).toFixed(2);
}


// users local storage functions
if (!localStorage.getItem("users")) localStorage.setItem("users", "[]");


function isUserExist(email) {
    let users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email.toLowerCase()) {
            return i;
        } 
    }
    return null;
}

function addUser(user) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
function getUser(index) {
    return JSON.parse(localStorage.getItem("users"))[index];
}
function updateUser(index, object) {
    let users = JSON.parse(localStorage.getItem("users"));
    users[index].firstName = object.firstName;
    users[index].lastName = object.lastName; 
    users[index].email = object.email; 
    users[index].password = object.password;
    users[index].phoneNumber = object.phoneNumber; 
    users[index].address = object.address;
    users[index].designation = object.designation; 
    users[index].image = object.image; 
    localStorage.setItem("users", JSON.stringify(users));
}
function getNbrUser() {
    return JSON.parse(localStorage.getItem("users")).length;
}
function removeUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
}
function setCurrentUser(index) {
    localStorage.setItem("currentUser", index);
}
function getCurrentUser() {
    let index = localStorage.getItem("currentUser");
    if (index == undefined || index == null || Number(index) == NaN) return null;
    return JSON.parse(localStorage.getItem("users"))[Number(index)];
}


// ####################################################
// ###################  navbar   ######################
// ####################################################
const navbar = document.querySelector(".header");

if (navbar) {
    const navSiblingOffset = navbar.nextElementSibling.offsetHeight + navbar.offsetHeight;
    const navOffset = navbar.offsetHeight + navbar.offsetTop;

    window.addEventListener("scroll", (e) => {
        if (window.pageYOffset > navOffset) {
            navbar.classList.add("sticky");
            document.body.style.paddingTop = `${navbar.offsetHeight}px`;
            if (window.pageYOffset > navSiblingOffset) {
                navbar.classList.add("show");
            }
            else {
                navbar.classList.remove("show");
            }

        } else {
            navbar.classList.remove("sticky");
            document.body.style.paddingTop = "0px";
        }
    });

    // ################  navbar user   ###################
    let user = getCurrentUser()
    if (user != null) {
        const navbarUser = navbar.querySelector(".header-btns");
        if (navbarUser) {
            navbarUser.classList.add("user");
            const navbarImg = navbarUser.querySelector(".header-user-img");
            if (navbarImg) {
                navbarImg.attributes["src"].value = navbarImg.attributes["data-rootPath"].value + "images/avatars/" + user.image;
            }
        }
    }


    // ################  navbar menu   ###################
    navbar.querySelector(".navbar-menu-btn").addEventListener("click", () => {
        document.body.classList.toggle("nav-open");

        if (document.body.classList.contains("nav-open")) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "scroll";
        }
    });
}

// ####################################################
// ###############     dark mode    ###################
// ####################################################
const toggleMode = document.querySelector(".toggle-mode");
if (toggleMode) toggleMode.addEventListener("click", () => {
    toggleMode.classList.toggle("toggle");
    handleToggle();
});

if (localStorage.getItem("darkMode") == "false") {
    handleToggle();
}

function handleToggle() {
    if (!document.body.classList.contains("light-mode")) {
        localStorage.setItem("darkMode", "false");
        document.body.classList.add("light-mode");

        document.documentElement.style.setProperty("--text-important", "#0F1011");
        document.documentElement.style.setProperty("--text-normal", "#16181A");
        document.documentElement.style.setProperty("--text-slight", "#2C3034");


        document.documentElement.style.setProperty("--white", "#000000")
        document.documentElement.style.setProperty("--white-1", "#070809");
        document.documentElement.style.setProperty("--white-2", "#0F1011");
        document.documentElement.style.setProperty("--white-3", "#16181A");
        document.documentElement.style.setProperty("--white-4", "#1D2023");
        document.documentElement.style.setProperty("--white-5", "#25282C");
        document.documentElement.style.setProperty("--white-6", "#2C3034");
        document.documentElement.style.setProperty("--white-7", "#33383D");
        document.documentElement.style.setProperty("--white-8", "#3A4046");
        document.documentElement.style.setProperty("--white-9", "#42484E");

        document.documentElement.style.setProperty("--dark", "#FFFFFF");
        document.documentElement.style.setProperty("--dark-1", "#EDEEEE");
        document.documentElement.style.setProperty("--dark-2", "#DBDCDD");
        document.documentElement.style.setProperty("--dark-3", "#C8CBCD");
        document.documentElement.style.setProperty("--dark-4", "#B6B9BC");
        document.documentElement.style.setProperty("--dark-5", "#A4A8AB");
        document.documentElement.style.setProperty("--dark-6", "#92969A");
        document.documentElement.style.setProperty("--dark-7", "#808589");
        document.documentElement.style.setProperty("--dark-8", "#6D7379");
        document.documentElement.style.setProperty("--dark-9", "#5B6268");
    }
    else {
        localStorage.setItem("darkMode", "true");
        document.body.classList.remove("light-mode");

        document.documentElement.style.setProperty("--text-important", "#DBDCDD");
        document.documentElement.style.setProperty("--text-normal", "#C8CBCD");
        document.documentElement.style.setProperty("--text-slight", "#92969A");


        document.documentElement.style.setProperty("--dark", "#000000")
        document.documentElement.style.setProperty("--dark-1", "#070809");
        document.documentElement.style.setProperty("--dark-2", "#0F1011");
        document.documentElement.style.setProperty("--dark-3", "#16181A");
        document.documentElement.style.setProperty("--dark-4", "#1D2023");
        document.documentElement.style.setProperty("--dark-5", "#25282C");
        document.documentElement.style.setProperty("--dark-6", "#2C3034");
        document.documentElement.style.setProperty("--dark-7", "#33383D");
        document.documentElement.style.setProperty("--dark-8", "#3A4046");
        document.documentElement.style.setProperty("--dark-9", "#42484E");

        document.documentElement.style.setProperty("--white", "#FFFFFF");
        document.documentElement.style.setProperty("--white-1", "#EDEEEE");
        document.documentElement.style.setProperty("--white-2", "#DBDCDD");
        document.documentElement.style.setProperty("--white-3", "#C8CBCD");
        document.documentElement.style.setProperty("--white-4", "#B6B9BC");
        document.documentElement.style.setProperty("--white-5", "#A4A8AB");
        document.documentElement.style.setProperty("--white-6", "#92969A");
        document.documentElement.style.setProperty("--white-7", "#808589");
        document.documentElement.style.setProperty("--white-8", "#6D7379");
        document.documentElement.style.setProperty("--white-9", "#5B6268");
    }
}



// ###############   cart   ###################

function addCartElement(itemData, isAvailable, itemIndex) {
    let cartItemsContainer = navbar.querySelector(".cart-items");
    const totalPrice = cartItemsContainer.parentElement.querySelector(".cart-price");

    if (!cartItemsContainer) return;

    function updateTotalPrice() {
        totalPrice.innerText = getCartPrice();
    }

    const items = cartItemsContainer.querySelectorAll(".cart-item");
    if (isAvailable) {
        const itemQuantity = items[itemIndex].querySelector(".cart-item-quantity");
        itemQuantity.classList.add("anim");
        setTimeout(() => {
            itemQuantity.classList.remove("anim");
        }, 200);
        itemQuantity.innerHTML = `quantity: <span>${itemData.quantity}</span>`;
        updateTotalPrice();
        navbar.querySelector(".cart-box").classList.add("show");
        document.body.classList.add("nav-open");

        // scroll
        if (cartItemsContainer.scrollHeight > cartItemsContainer.clientHeight) items[itemIndex].scrollIntoView()
        return;
    }

    let elm = document.createElement("div");
    elm.classList.add("cart-item", "remove");
    elm.innerHTML = `
        <div class="cart-item-img-box">
            <img src="${rootPath + "images/" + (itemData.type == "device" ? "phones/" : "gadgets/") + itemData.image}" class="cart-item-img">
        </div>
        <div class="cart-item-text">
            <p class="cart-item-name" role="heading">${itemData.name}</p>
            <p class="cart-item-price"><strong>$</strong>${itemData.price}</p>
            <p class="cart-item-quantity">quantity: ${itemData.quantity}</p>

        </div>
        <button class="cart-item-remove" aria-label="remove this item from the cart">
            <i class="fa fa-trash" role="none"></i>
        </button>
    `;

    cartItemsContainer.appendChild(elm);

    elm.querySelector(".cart-item-remove").addEventListener("click", () => {
        elm.classList.add("remove");
        const cartItems = cartItemsContainer.querySelectorAll(".cart-item");
        let itemsNbr = getCartLength();
        for (let i = 0; i < itemsNbr; i++) {
            if (elm == cartItems[i]) {
                removeCartItem(i);
                break
            }
        }
        if (getCartLength() == 0) cartItemsContainer.parentElement.classList.add("empty");
        setTimeout(() => {
            cartItemsContainer.removeChild(elm);
        }, 500);
        itemsNumber.innerText = itemsNumber.innerText - 1;
        updateTotalPrice();
        itemsNumberAnim();
    });

    cartItemsContainer.parentElement.classList.remove("empty");
    setTimeout(() => {
        elm.classList.remove("remove");
        
        setTimeout(() => {
            if (cartItemsContainer.scrollHeight > cartItemsContainer.clientHeight) elm.scrollIntoView()
        }, 200);
    }, 10);

    const itemsNumber = document.querySelector(".cart-items-number");
    itemsNumber.innerText = items.length + 1;

    function itemsNumberAnim() {
        itemsNumber.classList.add("anim");
        setTimeout(() => {
            itemsNumber.classList.remove("anim");
        }, 200);
    }

    itemsNumberAnim();

    updateTotalPrice();
    navbar.querySelector(".cart-box").classList.add("show");
    document.body.classList.add("nav-open");
}

function insertCart(btn) {

    function updateTotalPrice() {
        cartPrice.innerText = getCartPrice();
    }

    function insertCartElements() {
        let isEmpty = getCartLength() == 0 ? true : false;
        let data = getCartItems();

        if (isEmpty) cart.classList.add("empty");
        cartItemsContainer.innerHTML = data.map((elm) => {
            return `
                <div class="cart-item">
                    <div class="cart-item-img-box">
                        <img src="${rootPath + "images/" + (elm.type == "device" ? "phones/" : "gadgets/") + elm.image}" class="cart-item-img">
                    </div>
                    <div class="cart-item-text">
                        <p class="cart-item-name">${elm.name}</p>
                        <p class="cart-item-price"><strong>$</strong>${elm.price}</p>
                        <p class="cart-item-quantity">quantity: <span>${elm.quantity}</span></p>

                    </div>
                    <button class="cart-item-remove" aria-label="remove this item from the list">
                        <i class="fa fa-trash" role="none"></i>
                    </button>
                </div>
            `;
        }).join("");
        const cartItemsRemovebtns = cartItemsContainer.querySelectorAll(".cart-item-remove");
        itemsNumber.innerText = cartItemsRemovebtns.length;
        cartItemsRemovebtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                removeCartElement(btn.parentElement);
            })
        });
        updateTotalPrice()
    }

    function removeCartElement(elm) {
        elm.classList.add("remove");
        const cartItems = cartItemsContainer.querySelectorAll(".cart-item");
        let itemsNbr = getCartLength();
        for (let i = 0; i < itemsNbr; i++) {
            if (elm == cartItems[i]) {
                removeCartItem(i);
                break
            }
        }
        if (getCartLength() == 0) cart.classList.add("empty");
        setTimeout(() => {
            cartItemsContainer.removeChild(elm);
        }, 500);

        itemsNumberAnim();
        itemsNumber.innerText = itemsNumber.innerText - 1;
        updateTotalPrice();
    }

    const cartConatiner = btn.parentElement;
    const cart = document.createElement("div");
    cart.classList.add("cart-box");

    cart.innerHTML = `
        <p class="cart-price-text" role="heading">
            Total price <strong>$<span class="cart-price"></span></strong>
        </p>
        <p class="cart-empty-message" role="alert">You haven't select any item !</p>
        <div class="cart-items" role="list">
        </div>

        <div class="cart-control">
            <button class="btn btn--primary btn--small but-all-btn">Buy all</button>
            <button class="btn btn--secondary btn--small btn-outline remove-all">Remove all</button>
        </div>
        <a href="#section-devices" class="link link--arrow">Keep shoping</a>
    `;

    cartConatiner.appendChild(cart);

    const cartPrice = cart.querySelector(".cart-price");
    let cartItemsContainer = cart.querySelector(".cart-items");
    const cartRemoveAllBtn = cart.querySelector(".remove-all");
    cartRemoveAllBtn.addEventListener("click", () => {
        cart.classList.add("empty")
        cartItemsContainer.querySelectorAll(".cart-item").forEach((elm) => {
            elm.classList.add("remove");
            clearCart();
            setTimeout(() => {
                cartItemsContainer.removeChild(elm);
            }, 500);
        });
        itemsNumberAnim();
        itemsNumber.innerText = "0";
        updateTotalPrice();

    });


    const itemsNumber = document.createElement("span");
    itemsNumber.classList.add("cart-items-number");
    btn.appendChild(itemsNumber);
    function itemsNumberAnim() {
        itemsNumber.classList.add("anim");
        setTimeout(() => {
            itemsNumber.classList.remove("anim");
        }, 200);
    }

    cart.querySelector(".but-all-btn").addEventListener("click", () => {
        if (!getCurrentUser()) {
            showLog(false);
        } else {
            localStorage.setItem("tab", "3");
            window.location.href = rootPath + "content/account.html";
        }
    });

    insertCartElements();


    btn.addEventListener("click", () => {
        cart.classList.toggle("show");
    });
}

// ####################################################
// ############   text write effect    ################
// ####################################################
function addWriteEffect(elm, user, startDelay, speed) {

    if (elm.attributes["data-isWriting"]) {
        return 0;
    }

    elm.setAttribute("data-isWriting", "true");
    const text = elm.innerText;
    elm.innerHTML = "<span class='terminal-user'></span><span class = 'terminal-write-box'><span class = 'terminal-cursor'></span></span>";

    const terminalUserElm = elm.querySelector(".terminal-user");
    const terminalCursorElm = elm.querySelector(".terminal-cursor");
    const writeBoxElm = elm.querySelector(".terminal-write-box");

    terminalUserElm.innerText = user;

    let rand = startDelay;

    for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
            writeBoxElm.innerHTML = text.slice(0, i) + "<span class = 'terminal-cursor'>";
        }, rand);
        rand += Math.floor(Math.random() * speed);
    }
}


// ####################################################
// ###############     modular    ####################
// ####################################################
function showModular(elm) {
    const modular = document.createElement("aside");
    modular.classList.add("modular");
    modular.innerHTML = `
        <div class="container" aria-expanded="true">
            <div class="modular-box">
                <button class="modular-close-btn">
                    <i class="fa fa-xmark"></i>
                </button>
            </div>
        </div>`;

    const closeBtn = modular.querySelector(".modular-close-btn");
    closeBtn.addEventListener("click", () => {
        modular.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(modular);
        }, 500);
        document.body.style.overflowY = "scroll";
    });


    modularBox = modular.querySelector(".modular-box");
    modularBox.appendChild(elm);
    modularBox.style.willChange = "clip-path";
    
    
    
    
    document.body.appendChild(modular);

    setTimeout(() => {
        modular.classList.add("show");
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            modularBox.style.willChange = "auto";
        }, 1000);
    }, 50);
}

//////////// simple modular message ///////////////
function showData(data) {
    const message = document.createElement("p")
    message.innerHTML = `<p class="alert-message" role="alertdialog">${data}</p>`;
    showModular(message);
}

//////////// login & sign up ///////////
function ValidatePhone(text) {
    // steal it from internet
    var phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(text.match(phoneformat)) return true;
    else return false;
}
function ValidateEmail(text) {
    // steal it from internet
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(text.match(mailformat)) return true;
    else return false;
}

function showLog(sign) {
    const logModular = document.createElement("div");
    logModular.classList.add("log-modular");
    if (sign) {
        logModular.classList.add("switch");
    }

    logModular.innerHTML = `
            <div class="form-imgs">
                <img src="${rootPath + "images/login.jpg"}" class="form-img login--img">
                <img src="${rootPath + "images/signup.jpg"}" class="form-img signup--img">
            </div>


            <div class="forms-conatiner">
                <!-- ########## -->
                <!-- login form -->
                <!-- ########## -->
                <div class="form login--form">
                    <h2 class="heading-1 write-effect" data-speed="150" data-user data-start-speed="1000">
                        Log in&MediumSpace;</h2>
                    <p class="form-description">Enter you credintial to acces your account</p>

                    <form class="inputs">
                        <div class="input">
                            <label for="login-email" class="input-placeholder">Enter email</label>
                            <label for="login-email" class="input-icon">
                            <i class="fa fa-envelope"></i></label>
                            <input type="email" id="login-email" required>
                        </div>
                        <div class="input margin--0">
                            <label for="login-password" class="input-placeholder" role="none" aria-label="">Enter
                                password</label>
                            <label for="login-password" class="input-icon" role="none"
                                aria-label="">
                                <i class="fa fa-key"></i></label>
                            <input type="password" id="login-password" required>
                            <button class="show-password-btn" aria-label="show password">
                            <i class="fa fa-eye"></i></button>
                        </div>
                        <div class="junky-input">
                            <div class="save-input">
                                <input type="checkbox" id="save-user" required>
                                <label for="save-user">save for next time</label>
                            </div>
                            <a href="#" class="password-fogot-link" data-modular="This page doesn't exist">Forgot
                                password</a>
                        </div>
                        <button class="form-btn btn btn--primary login-btn">Log In</button>
                    </form>
                    <p class="switch-view-text">
                        don't have an account? <a href="#" class="switch-view">create account.</a>
                    </p>
                </div>

                <!-- ########### -->
                <!-- signup form -->
                <!-- ########### -->
                <div class="form signup--form">

                    <h2 class="heading-1 write-effect" data-speed="150" data-user data-start-speed="1000">
                        Sign up&MediumSpace;</h2>
                    <p class="form-description">Create a fully function account</p>

                    <form class="inputs">
                        <div class="input">
                            <label for="signup-name" class="input-placeholder">Enter name</label>
                            <label for="signup-name" class="input-icon">
                            <i class="fa fa-user"></i></label>
                            <input type="text" id="signup-name" required>
                        </div>
                        <div class="input">
                            <label for="signup-email" class="input-placeholder">Enter email</label>
                            <label for="signup-email" class="input-icon">
                            <i class="fa fa-envelope"></i></label>
                            <input type="email" id="signup-email" required>
                        </div>
                        <div class="input margin--0">
                            <label for="signup-password" class="input-placeholder" role="none" aria-label="">Enter
                                password</label>
                            <label for="signup-password" class="input-icon" role="none"
                                aria-label="">
                                <i class="fa fa-key"></i>
                                </label>
                            <input type="password" id="signup-password" required>
                            <button class="show-password-btn" aria-label="show password">
                            <i class="fa fa-eye"></i>
                            </button>
                        </div>
                        <div class="junky-input">
                            <div class="save-input">
                                <input type="checkbox" id="save-user-sign" required>
                                <label for="save-user-sign">save for next time</label>
                            </div>
                        </div>
                        <button class="form-btn btn btn--primary signup-btn">Sign Up</button>
                    </form>
                    <p class="switch-view-text">
                        already have an account? <a href="#" class="switch-view">log in.</a>
                    </p>

                </div>
            </div>
        `;

    // make inputs work
    const inputs = logModular.querySelectorAll(".input input");
    inputs.forEach(elm => {
        elm.value = "";
        elm.addEventListener("focus", () => {
            elm.parentElement.classList.add("focus");
            elm.parentElement.classList.remove("empty");
            elm.parentElement.classList.remove("error");

        });
        elm.addEventListener("focusout", () => {
            if (elm.value.trim().length === 0) {
                elm.parentElement.classList.remove("focus");
                elm.value = "";
            }
        });
    });

    // make show password works
    logModular.querySelectorAll('.show-password-btn').forEach(elm => {
        elm.addEventListener("click", e => {
            e.preventDefault();
            if (elm.previousElementSibling.type == "password") {
                elm.previousElementSibling.type = "text"
                elm.classList.add("show");
            } else {
                elm.previousElementSibling.type = "password"
                elm.classList.remove("show");
            }
        })
    });


    // switch view
    logModular.querySelectorAll(".switch-view").forEach(elm => {
        elm.addEventListener("click", e => {
            e.preventDefault();
            inputs.forEach(elm => {
                elm.parentElement.classList.remove("empty");
                elm.parentElement.classList.remove("error");
            });


            logModular.classList.toggle("switch");

            
        })
    });

    // forget password
    logModular.querySelector(".password-fogot-link").addEventListener("click", e => {
        e.preventDefault();
        const message = document.createElement("p")
        message.innerHTML = `<p class="alert-message">This page doesn't exist</p>`;
        showModular(message);
    });


    // make the form work

    // login
    const loginInputs = logModular.querySelectorAll("*[id|='login']");
    const emptyMessage = "This shouldn't be empty";
    const errorMessage = "This doesn't look like an email";
    logModular.querySelector(".login-btn").addEventListener("click", (e) => {
        e.preventDefault();
        let isValid = true;
        if (loginInputs[0].value == "") {
            loginInputs[0].parentElement.classList.add("empty");
            loginInputs[0].parentElement.setAttribute("data-error-message", emptyMessage);
            isValid = false;
        }
        if (!ValidateEmail(loginInputs[0].value) && isValid) {
            loginInputs[0].parentElement.classList.add("error");
            loginInputs[0].parentElement.setAttribute("data-error-message", errorMessage);
            isValid = false;
        }
        if (loginInputs[1].value == "") {
            loginInputs[1].parentElement.classList.add("empty");
            loginInputs[1].parentElement.setAttribute("data-error-message", emptyMessage);
            isValid = false;
        }

        if (!isValid) return;
        
        let userIndex = isUserExist(loginInputs[0].value);
        if (userIndex == null) {
            loginInputs[0].parentElement.classList.add("error");
            loginInputs[0].parentElement.setAttribute("data-error-message", "this email doesn't exist!");
            return;
        }

        if (loginInputs[1].value != getUser(userIndex).password) {
            loginInputs[1].parentElement.classList.add("error");
            loginInputs[1].parentElement.setAttribute("data-error-message", "does't match the password!");
            return;
        }

        setCurrentUser(userIndex);
        location.reload()

    });

    // signup
    const signupInputs = logModular.querySelectorAll("*[id|='signup']");
    logModular.querySelector(".signup-btn").addEventListener("click", (e) => {
        e.preventDefault();

        let isValid = true;

        if (signupInputs[1].value == "") {
            signupInputs[1].parentElement.classList.add("empty");
            signupInputs[1].parentElement.setAttribute("data-error-message", emptyMessage);
            isValid = false;
        }

        if (!ValidateEmail(signupInputs[1].value) && isValid) {
            signupInputs[1].parentElement.classList.add("error");
            signupInputs[1].parentElement.setAttribute("data-error-message", errorMessage);
            isValid = false;
        }

        if (signupInputs[0].value == "") {
            signupInputs[0].parentElement.classList.add("empty");
            signupInputs[0].parentElement.setAttribute("data-error-message", emptyMessage);
            isValid = false;
        }

        if (signupInputs[2].value == "") {
            signupInputs[2].parentElement.classList.add("empty");
            signupInputs[2].parentElement.setAttribute("data-error-message", emptyMessage);
            isValid = false;
        }

        if (!isValid) return;
        
        let userIndex = isUserExist(signupInputs[1].value);
        if (userIndex != null) {
            const message = document.createElement("p")
            message.innerHTML = `<p class="alert-message">User already exist!</p>`;
            showModular(message);
            return;
        }

        userIndex = getNbrUser();

        let user = {
            firstName : signupInputs[0].value,
            lastName : "",
            email : signupInputs[1].value,
            password : signupInputs[2].value,
            phoneNumber : "",
            address : "",
            designation : "",
            image : "avatar.svg"
        }

        console.log(localStorage.getItem("users"));
        addUser(user);
        setCurrentUser(userIndex);
        window.location.href= rootPath + "content/account.html";

    });

    showModular(logModular);
}


// ####################################################
// ###############     devices     ####################
// ####################################################
function insertDevices(elm) {
    if (elm == undefined) return 0;

    elm.innerHTML = Devicesdata.map(function (device) {
        return `
        <div class="device-card ${(device.bestOffer) ? "device-best-offer" : ""}" aria-label="${(device.bestOffer) ? "best offer device" : ""}">
        <div class="device-img-box">
            <img src="${rootPath + "images/phones/" + device.image[0]}" class="device-img">
        </div>
        
        <div class="device-text">
            <button class="device-more-info" title="More Info" aria-label="show more info about this device"><i class="fa fa-info-circle" role="none"></i>
            </button>
    
            <p class="device-name" role="heading">
                ${device.name}
            </p>
    
            <div class="device-tags" role="list">
                ${device.system.map(function (system) {
            return `<span class="tag ${"tag--" + system.toLowerCase()}">${system}</span>`;
        }).join("")}
    
            </div>
        
            <ul class="device-capacities">
                <li class="device-capacity">
                    <i class="capacity-icon fa fa-microchip" role="none"></i>
                    
                    <p class="capacity-text">
                        <strong>CPU</strong>
                        ${device.cpu}
                    </p>
                </li>
                <li class="device-capacity">
                    <i class="capacity-icon fa fa-memory" role="none"></i>
        
                    <p class="capacity-text">
                        <strong>RAM</strong>
                        ${device.ram}
                    </p>
                </li>
                <li class="device-capacity">
                    <i class="capacity-icon fa fa-hard-drive" role="none"></i>
        
                    <p class="capacity-text">
                        <strong>Storage</strong>
                        ${device.storage}
                    </p>
                </li>
                <li class="device-capacity">
                    <i class="capacity-icon fa fa-battery-half" role="none"></i>
        
                    <p class="capacity-text">
                        <strong>Battery</strong>
                        ${device.battery}
                    </p>
                </li>
            </ul>
    
            <div class="device-bottom-container">
            <button class="btn btn--small btn--primary btn-outline device-buy-btn">Add to cart</button>
            <p class="device-price">$${device.price}</p>
            </div>
        </div>
        </div>
        `;
    }).join('');

    elm.querySelectorAll(".device-buy-btn").forEach((elm, indx) => {
        elm.addEventListener("click", () => {
            addCartItem(Devicesdata[indx]);
        });
    });

    ///////////// device more info ///////////
    elm.querySelectorAll(".device-more-info").forEach((elm, indx) => {
        elm.addEventListener("click", (e) => {

            e.preventDefault();
            const device = document.createElement("div");
            device.classList.add("device-info");
            device.innerHTML = `
                <div class="modular-gallery">
                    <div class="modular-img-box">
                        ${Devicesdata[indx].image.map(function (elm) {
                return `<img src="${rootPath + "images/phones/" + elm}" class="modular-img" role="tab">`;
            }).join("")}
                    </div>
    
                    <div class="modular-controls" role="tabpanel">
                        ${Devicesdata[indx].image.map(function (elm) {
                return `<button class="modular-control" arial-label="show image"></button>`;
            }).join("")}
                    </div>
                </div>
    
                <div class="modular-info-box">
                    <h2 class="modular-title">
                        ${Devicesdata[indx].name}
                    </h2>
    
                    <div class="modular-tags" role="list">
                        ${Devicesdata[indx].system.map(function (system) {
                return `<span class="tag ${"tag--" + system.toLowerCase()}">${system}</span>`;
            }).join("")}
                    </div>
    
                    <p class="modular-description">
                        ${Devicesdata[indx].description}
                    </p>
    
                    <div class="modular-specs-box">
                        <ul class="modular-specs">
                            <li class="modular-spec">
                                <i class="fa fa-microchip" role="none"></i>
                                <strong>CPU</strong>
                                    ${Devicesdata[indx].cpu}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-cube" role="none"></i>
                                <strong>GPU</strong>
                                    ${Devicesdata[indx].gpu}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-memory" role="none"></i>
                                <strong>RAM</strong>
                                    ${Devicesdata[indx].ram}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-hard-drive" role="none"></i>
                                <strong>Storage</strong>
                                    ${Devicesdata[indx].storage}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-maximize" role="none"></i>
                                <strong>Screen</strong>
                                    ${Devicesdata[indx].screen}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-microphone" role="none"></i>
                                <strong>Sound</strong>
                                    ${Devicesdata[indx].sound}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-battery-half" role="none"></i>
                                <strong>Battery</strong>
                                    ${Devicesdata[indx].battery}
                            </li>
                            <li class="modular-spec">
                                <i class="fa-brands fa-usb" role="none"></i>
                                <strong>USB</strong>
                                    ${Devicesdata[indx].usb}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-camera" role="none"></i>
                                <strong>Back Camera</strong>
                                    ${Devicesdata[indx].camBack}
                            </li>
                            <li class="modular-spec">
                                <i class="fa fa-camera-rotate" role="none"></i>
                                <strong>Front Camera</strong>
                                    ${Devicesdata[indx].camFront}
                            </li>
                        </ul>
    
                        <div class="modular-features">
                            ${Devicesdata[indx].features.map(
                function (elm) {
                    return `
                                        <div class="modular-feature">
                                            <p class="modular-feature-title">
                                               ${elm[0]}
                                            </p>
            
                                            <p class="modular-feature-description">
                                               ${elm[1]}
                                         </p>
                                        </div>`;
                }
            ).join("")}
                        </div>
                    </div>
                </div>
            `;

            // all of modular effects and events must goes here
            device.querySelector(".modular-img").classList.add("select");
            device.querySelector(".modular-control").classList.add("select");

            const modularCtrl = device.querySelectorAll(".modular-control");

            const modularImgs = device.querySelectorAll(".modular-img");

            const modularImgBox = device.querySelector(".modular-img-box");

            modularCtrl.forEach((elm, indx) => {
                elm.addEventListener("click", () => {
                    modularCtrl.forEach((ctrl) => {
                        ctrl.classList.remove("select");
                    });

                    modularImgs.forEach((imgs) => {
                        imgs.classList.remove("select");
                    });

                    elm.classList.add("select");
                    modularImgs[indx].classList.add("select");

                });
            });

            showModular(device);
        });
    });
}

// ####################################################
// ###############     gadgets     ####################
// ####################################################
function insertGadgets(elm) {
    if (elm == undefined) return 0;

    function insertGadgetRate(num) {
        let str = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(num)) {
                str += '<i class="fa fa-star" role="none"></i>';
            } else {
                if (i == Math.ceil(num)) {
                    str += '<i class="fa fa-star-half-alt" role="none"></i>';
                } else {
                    str += '<i class="far fa-star" role="none"></i>';
                }
            }

        }
        return str;
    }


    elm.innerHTML = `
        <div class="gadget-container">
            <button class="gadget-btn gadget-btn-left" aria-label="scroll to right">
                <i class="fa fa-angle-left" role="none"></i>
            </button>

            <div class="gadgets">
                ${gadgetData.map(function (gadget) {
        return `
                            <div class="gadget-card">
                                <div class="gadget-img-box">
                                    <img src="${rootPath + "images/gadgets/" + gadget.image}" class="gadget-img">
                                </div>
                                <p class="gadget-price">
                                    <strong>$</strong>${gadget.price}
                                </p>
                                <div class="gadget-info">
                                    <div>
                    
                                        <h3 class="gadget-name">${gadget.name}</h3>
                                        <p class="gadget-description">
                                            ${gadget.description}
                                        </p>
                    
                                    </div>
                                    <div>
                    
                                        <div class="gadget-reviews">
                                            <div class="gadget-rating" role="text" aria-label="this gadget have a rate of ${gadget.rate}">
                                                ${insertGadgetRate(gadget.rate)}
                                            </div>
                                            <div class="gadget-reviews-namber">
                                                (<strong>${gadget.review}</strong> reviews)
                                            </div>
                                        </div>
                    
                                        <button class="btn btn--small btn--primary btn-outline add-to-cart">Add to cart</button>
                                    </div>
                                </div>
                    
                            </div>
                        `;
    }).join('')
        }
            </div>

            <button class="gadget-btn gadget-btn-right" aria-label="scroll to left">
                <i class="fa fa-angle-right" role="none"></i>
            </button>
        </div>
    `;

    // cart 
    elm.querySelectorAll(".add-to-cart").forEach((elm, indx) => {
        elm.addEventListener("click", () => {
            addCartItem(gadgetData[indx]);
        });
    });

    // gadget scroll btns
    const gadgets = elm.querySelector(".gadgets");
    const gadgetCardWidth = gadgets.querySelector(".gadget-card").offsetWidth;

    const controlRightBtn = elm.querySelector(".gadget-btn-right");
    const controlLeftBtn = elm.querySelector(".gadget-btn-left");

    controlRightBtn.addEventListener("click", () => {
        gadgets.scroll({
            top: 0,
            left: gadgets.scrollLeft + gadgetCardWidth + 32,
            behavior: 'smooth'
        });
    });

    controlLeftBtn.addEventListener("click", () => {
        gadgets.scroll({
            top: 0,
            left: gadgets.scrollLeft - gadgetCardWidth - 32,
            behavior: 'smooth'
        });
    });

    function scrollHideControls() {
        if (gadgets.scrollLeft == 0) {
            controlLeftBtn.classList.add("hide");
        } else {
            controlLeftBtn.classList.remove("hide");
        }

        if (gadgets.scrollLeft + gadgets.offsetWidth + 10 >= gadgets.scrollWidth) {
            controlRightBtn.classList.add("hide");
        } else {
            controlRightBtn.classList.remove("hide");
        }
    }

    scrollHideControls();
    gadgets.addEventListener("scroll", (e) => {
        scrollHideControls();
    });
}
