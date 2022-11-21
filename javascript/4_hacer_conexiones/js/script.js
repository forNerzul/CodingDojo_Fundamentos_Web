var requestCount = parseInt(document.getElementById('request-counter').innerHTML);
var connectionCount = parseInt(document.getElementById('connection-counter').innerHTML);

function requestCountRemove () {
    requestCount--;
    document.getElementById('request-counter').innerHTML = requestCount;
};

function connectionCountAdd () {
    connectionCount++;
    document.getElementById('connection-counter').innerHTML = connectionCount;
};

function requestRemove(element) {
    element.parentNode.parentNode.remove();
    requestCountRemove();
}

function requestAcepted (element) {
    requestRemove(element);
    connectionCountAdd();
}

function requestDenied (element) {
    requestRemove(element);
}

function changeUser(){
    document.getElementById('username').innerHTML = "Pablo Marmol"
};

