const inputfield = document.querySelector('#inputmsg');
const inputbtn = document.querySelector('#inputbtn');
const inputcontainer = document.querySelector('#input');
const lists = document.querySelector('.lists');
const bottombar1 = document.querySelector('#bottombar1');
const one = document.querySelector('#one');
const clearbtn = document.querySelector('#clearbtn');
let itemsleft = document.querySelector('#itemsleft');


let counter = 0;
let noOfLefts = 0;
let noOfCompleted = 0;
let noOfDeleted = 0;
let itemsleftcopy = 0;
let x = 0,
    y = 0;
inputfield.addEventListener('keyup', () => {
    inputbtn.style.visibility = 'visible';
    if (inputfield.value.trim() == '') {
        inputbtn.style.visibility = 'hidden';
    }
});

inputbtn.addEventListener('click', addlist);

function addlist() {
    counter++;
    noOfLefts++;
    itemsleftcopy++;
    let textvalue = inputfield.value;
    let minicontainer = document.createElement('div');
    let li = document.createElement('li');
    let tick = document.createElement('div');
    let img = document.createElement('img');
    let crossimg = document.createElement('img');
    li.textContent = textvalue;
    lists.appendChild(minicontainer);

    minicontainer.style.position = 'relative';
    minicontainer.appendChild(li);
    minicontainer.appendChild(img);
    minicontainer.appendChild(tick);
    minicontainer.appendChild(crossimg);

    li.classList.add('listlist');
    li.id = `l${counter}`;
    img.src = "images/icon-check.svg";
    img.alt = "Not found";
    crossimg.src = "images/icon-cross.svg";
    crossimg.alt = 'Not found';

    tick.classList.add('circle');
    img.classList.add('circle');
    img.classList.add('gradient');
    crossimg.classList.add('cross');


    img.style.visibility = 'hidden';
    tick.addEventListener('click', () => {
        x++;
        img.style.visibility = 'visible';
        tick.style.visibility = 'hidden';
        li.style.textDecoration = "line-through";
        //noOfCompleted++;
        noOfLefts--;
        itemsleft.textContent = `${noOfLefts+noOfCompleted} items left`;
        tick.classList.add('completed');
    });

    img.addEventListener('click', () => {
        y++;
        tick.style.visibility = 'visible';
        img.style.visibility = 'hidden';
        li.style.textDecoration = "none";
        noOfCompleted++;
        itemsleft.textContent = `${noOfLefts+noOfCompleted} items left`;
        tick.classList.remove('completed');
    });

    crossimg.addEventListener('click', () => {
        noOfDeleted++;
        crossimg.parentNode.parentNode.removeChild(crossimg.parentNode);
        noOfLefts--;
        // itemsleft.textContent = `${noOfLefts-noOfDeleted} items left`;
        // if (x > y) {
        //     itemsleft.textContent = `${noOfLefts} items left`;
        // } else if (x < y || x == y) {
        // itemsleft.textContent = `${noOfLefts+noOfCompleted+noOfDeleted} items left`;
        itemsleft.textContent = `${itemsleftcopy-noOfDeleted} items left`;
        // }

    })

    itemsleft.textContent = `${noOfLefts-noOfCompleted} items left`;



    insertbefore(minicontainer, lists.firstElementChild);
    inputfield.value = null;
    inputbtn.style.visibility = 'hidden';

    //setting border radius for element at top
    let elements = document.getElementById(`l${counter}`);
    elements.style.borderTopLeftRadius = '7px';
    elements.style.borderTopRightRadius = '7px';
    if (counter > 1) {
        let elementsprev = document.getElementById(`l${counter-1}`);
        elementsprev.style.borderTopLeftRadius = '0px';
        elementsprev.style.borderTopRightRadius = '0px';
    }


    if (counter != 0) {
        bottombar1.style.borderTopLeftRadius = '0px';
        bottombar1.style.borderTopRightRadius = '0px';
    }


}

function insertbefore(newelement, oldelement) {
    oldelement.parentNode.insertBefore(newelement, oldelement);
}