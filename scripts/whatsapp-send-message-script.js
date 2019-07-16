module.exports = `
var sent = false;
var interval = null
function tryToSend() {
    var btn = document.querySelector('._35EW6');
    var input = document.querySelector('._2S1VP');
    if (typeof input !== 'undefined' && input.textContent && !sent) {
        btn.click();
        sent = true;
    } else if(sent == true) clearInterval(interval);
}

interval = setInterval(tryToSend, 3000);
`;
