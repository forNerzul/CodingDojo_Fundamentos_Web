function loginBtn (btn) {
    if (btn.innerHTML == "Login") {
        btn.innerHTML = "LogOut";
    } else {
        btn.innerHTML = "Login";
    }
}

function removeBtn (btn) {
    btn.remove();
}

function liked () {
    alert('Nija was liked');
}