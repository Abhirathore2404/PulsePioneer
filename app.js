const tipsButton = document.getElementById('tipsButton');
const tipMessage = document.getElementById('tipMessage');

tipsButton.addEventListener('click', () => {
    // Toggle visibility of the tip message
    if (tipMessage.style.display === 'none') {
        tipMessage.style.display = 'block';
    } else {
        tipMessage.style.display = 'none';
    }
});