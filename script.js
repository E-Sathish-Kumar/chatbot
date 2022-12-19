function openchat() {
    document.getElementById("chat").style.display = "block";
}

function closechat() {
    document.getElementById("chat").style.display = "none";
}


let chatBody = document.querySelector('.body');
let textInput = document.querySelector('#textInput');
let send = document.querySelector('.send');


textInput.addEventListener("keydown", (key) => {
    if (key.keyCode === 13) {
        displayMsg();
    }
});



send.addEventListener('click', () => displayMsg());

function displayMsg() {
    let userInput = textInput.value;
    let msgDiv = document.createElement('div');
    msgDiv.classList.add('user-message');
    msgDiv.innerText = userInput;
    chatBody.append(msgDiv);
    textInput.value = '';
}
