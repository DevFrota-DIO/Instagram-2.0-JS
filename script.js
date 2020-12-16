//Script mostra senha ao clicar


function func() {
    let input = document.querySelector('#pass');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
}

/*
function checkCookies() {
    if (navigator.cookieEnabled == true) {
        alert("Cookies são permitidos")
    } else {
        alert("Cookies não são permitidos")
    }
}*/