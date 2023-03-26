const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increaseButton');
const decreaseButton = document.getElementById('decreaseButton');

let count = 0;
increaseButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});
decreaseButton.addEventListener('click', () => {
    count--;
    countElement.textContent = count;
});

