let colorButton = document.getElementById("colorButton");

chrome.storage.sync.get('color', (data) => {
    colorButton.setAttribute('value', data.color)
    colorButton.style.backgroundColor = data.color;

})

colorButton.onClick = function(button){
    let color = button.target.value
    console.log(color)
}