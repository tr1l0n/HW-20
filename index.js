// 1
// let img = document.querySelectorAll('.image');
// let x = 0;
// document.addEventListener('keydown', e => {
//     e.preventDefault();
//     if (e.key === 'ArrowRight') {
//         x -= 10;
//     }
//     else if (e.key === 'ArrowLeft') {
//         x += 10;
//     }
//     img.forEach(Element => {
//         Element.style.transform = `translateX(${x}px)`;
//     });
// });


// 2
let ammountBox = document.getElementById('ammountBox');
let boxes = document.getElementById('boxes');
let createBtn = document.getElementById('createBtn');
let clearBtn = document.getElementById('clearBtn')
let form = document.getElementById('form');
let fantomBox = document.createDocumentFragment();
let createBoxes = function (e) {
    e.preventDefault();
    let amount = ammountBox.value;
    let x = 20;
    for (let i = 0; i < amount; i++){
        x += 10;
        let red = Math.floor(Math.random() * 255) + 1;
        let blue = Math.floor(Math.random() * 255) + 1;
        let green = Math.floor(Math.random() * 255) + 1;
        let box = document.createElement('div');
        box.style.width = `${x}px`;
        box.style.height = `${x}px`
        box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
        fantomBox.append(box);
    }
    boxes.append(fantomBox);
}

let destroyBoxes = function (e) {
    e.preventDefault();
    boxes.innerHTML = '';
    ammountBox.value = '';
}
createBtn.addEventListener('click', createBoxes);
clearBtn.addEventListener('click', destroyBoxes);