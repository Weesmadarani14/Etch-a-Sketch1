window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const clearButton = document.getElementById('clear');

    // 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
    }

    // drawing 
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; 
        });
    });


    clearButton.addEventListener ('click', () => {
        squares.forEach((square) => {
            square.style.backgroundColor = 'white';
        });
    });

});