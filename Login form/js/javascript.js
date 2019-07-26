/*global console*/
var logBtn = document.getElementById('in'),
    sigBtn = document.getElementById('up'),
    logIn = document.getElementById('login'),
    signUp = document.getElementById('sign_up');

logBtn.onclick = function () {
    "use strict";
    logIn.style.display = 'block';
    signUp.style.display = 'none';
};

sigBtn.onclick = function () {
    "use strict";
    signUp.style.display = 'block';
    logIn.style.display = 'none';
};
