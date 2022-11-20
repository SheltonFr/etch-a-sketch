const DEFAULT_SIIZE = 16;
const container = document.querySelector('.container');
const range = document.querySelector('#range')
const displaySize = document.querySelector('#display-size');

range.value = DEFAULT_SIIZE;
currentSize = range.value;
displaySize.value = `${currentSize} X ${currentSize}`;

function setupGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`


    for (let i = 0; i < size * size; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('gird-element');
        gridElement.addEventListener('mouseover', () =>{
            gridElement.style.backgroundColor = 'red';
        });

        gridElement.addEventListener('mouseout', () =>{
            gridElement.style.backgroundColor = 'white'; 
        });

        
        container.appendChild(gridElement);
    }
}

function updateTextSize() {
    displaySize.value = `${currentSize} X ${currentSize}`;
}
range.addEventListener('mousemove', () => {
    currentSize = range.value;
    removeElements();
    updateTextSize();
    setupGrid(currentSize);
});

function removeElements() {
    container.innerHTML = '';
}

setupGrid(currentSize);


