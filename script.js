const grid = document.querySelector('.grid');
const fragment = document.createDocumentFragment();
for (let i=0; i<16; i++) {
    for (let j=0; j<16; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        fragment.appendChild(cell);
    }
}

grid.appendChild(fragment);