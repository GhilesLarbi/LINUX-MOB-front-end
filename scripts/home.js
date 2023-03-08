const rootPath = "";
Devicesdata = Devicesdata.slice(0, 4);

insertCart(navbar.querySelector(".cart-btn"));
insertDevices(document.querySelector(".devices"));

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



// write effect
const elmnts = document.querySelectorAll(".write-effect");
function writeEffectCaller(elm) {
    if (window.pageYOffset + window.innerHeight >= elm.offsetTop && window.pageYOffset < elm.offsetTop + elm.offsetHeight ) {
        let user = elm.attributes["data-user"];
        let startDelay = elm.attributes["data-start-speed"];
        let speed = elm.attributes["data-speed"];

        if (!user) user = "";
        else user = user.value + " ";

        if (!startDelay) startDelay = 0;
        else startDelay = Number(startDelay.value);

        if (!speed) speed = 70;
        else speed = Number(speed.value);

        addWriteEffect(elm, user , startDelay, speed);
    }
}
window.addEventListener("scroll", () => {
    elmnts.forEach(elm => {
        writeEffectCaller(elm)
    })
});
window.addEventListener("load", () => {
    elmnts.forEach(elm => {
        writeEffectCaller(elm)
    })
});


// ####################################################
// ##################     chat    #####################
// ####################################################

const chatBox = document.querySelector(".chat-box");

const expendBtn = document.querySelector(".chat-expend-btn");
const exitExpendBtn = document.querySelector(".chat-exit-expend-btn");

expendBtn.addEventListener("click", () => {
    chatBox.classList.add("expend");
});

exitExpendBtn.addEventListener("click", () => {
    chatBox.classList.remove("expend");
})

// enter message
let firstTimeChat = true;
let messageNbr = 0;
const chatInput = document.querySelector(".chat-input");
const chatMessages = document.querySelector(".chat-messages");

function sendMessage() {
    if (chatInput.value.trim().length === 0) return;
    chatMessages.innerHTML += `
            <span class="chat-message chat-message-you">
                ${chatInput.value}
            </span>
        `;
    chatInput.value = "";
    messageNbr++;

    if (firstTimeChat) {
        firstTimeChat = false;
        setTimeout(() => {
            chatMessages.innerHTML += `
                <span class="chat-message chat-message-me">
                Thank you for bringing this to our attention! Our engineering support team is fully booked for the day, but your request has been internally prioritized, and we'll get back to you as soon as possible.
                </span>`;
            chatMessages.scrollTo(0, chatMessages.scrollHeight);
        }, 1000);
    }
    if (messageNbr == 3) {
        setTimeout(() => {
            chatMessages.innerHTML += `
                <span class="chat-message chat-message-me">
                    Dyn tmargett, adarudh ad cheg3edh message wayedh ak blokigh
                </span>`;
            chatMessages.scrollTo(0, chatMessages.scrollHeight);
        }, 500);
    }
    if (messageNbr == 4) {
        setTimeout(() => {
            chatMessages.innerHTML += `
                <span class="chat-message chat-message-me">
                    Bon block
                </span>`;

            chatInput.value = "";
            document.querySelector(".chat-name").innerText = "User"
            document.querySelector(".chat-description").innerText = "We will never reply to you"
            chatInput.disabled = true;
            chatInput.placeholder = "You can't message this person";
            document.querySelector(".chat-send-btn").disabled = true;
            chatMessages.scrollTo(0, chatMessages.scrollHeight);
        }, 2000);
    }

    chatMessages.scrollTo(0, chatMessages.scrollHeight);
}



document.querySelector(".chat-send-btn").addEventListener("click", () => {
    sendMessage();
});

chatInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});