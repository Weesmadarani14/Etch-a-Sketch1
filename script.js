window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    // 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
    }
})