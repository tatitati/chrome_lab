let colorButton = document.getElementById("colorButton");

chrome.storage.sync.get('color', (data) => {
    colorButton.setAttribute('value', data.color)
    colorButton.style.backgroundColor = data.color;

})