function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('content').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
populatePre('text.txt');
