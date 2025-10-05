const grid = document.querySelector('.grid');
const fragment = document.createDocumentFragment();
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const cell = document.createElement('div');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'lightblue';
        })
        cell.className = 'cell';
        fragment.appendChild(cell);
    }
}

function makeGrid(gridSize) {
    const fragment = document.createDocumentFragment();
    for (let i=0; i<gridSize; i++) {
        for (let j=0; j<gridSize; j++) {
            const cell = document.createElement('div');
            cell.addEventListener('mouseenter', () => {
                cell.style.backgroundColor = 'lightblue';
            })
            cell.className = 'cell';
            cell.style.flex = `0 0 calc(100% / ${gridSize})`
            fragment.appendChild(cell);
            grid.appendChild(fragment);
        }
    }
}

const myButton = document.querySelector('.restart');
myButton.addEventListener('click', function() {
    let gridSize = parseInt(prompt('Enter a number to set grid size: '));
    while (parseInt(gridSize) >= 100) {
        gridSize = parseInt(prompt('Grid size can not be larger than 100'));
    }
    grid.innerHTML = '';
    makeGrid(gridSize);
    
    
})
grid.appendChild(fragment);

