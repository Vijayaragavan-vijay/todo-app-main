const inputfield = document.querySelector('#inputmsg');
const inputbtn = document.querySelector('#inputbtn');
const inputcontainer = document.querySelector('#input');
const lists = document.querySelector('.lists');
const bottombar1 = document.querySelector('#bottombar1');
const one = document.querySelector('#one');
const clearbtn = document.querySelector('#clearbtn');
let itemsleft = document.querySelector('#itemsleft');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completedtodo = document.querySelector('#comple');
const moonimgimg = document.querySelector('#themeimg');
const sunimgimg = document.querySelector('#sun');
const ul = document.querySelectorAll('.lists');
let counter = 0;
let noOfLefts = 0;
let noOfCompleted = 0;
let noOfDeleted = 0;
let itemsleftcopy = 0;
let temp1 = 0;

if (moonimgimg.addEventListener('click', () => {
        temp1 = 1;
    }));
if (sunimgimg.addEventListener('click', () => {
        temp1 = 0;
    }));

inputfield.addEventListener('keyup', () => {
    inputbtn.style.visibility = 'visible';
    if (inputfield.value.trim() == '') {
        inputbtn.style.visibility = 'hidden';
    }
});

inputbtn.addEventListener('click', addlist);

function addlist() {
    counter++;
    console.log(counter);
    noOfLefts++;
    itemsleftcopy++;
    let textvalue = inputfield.value;
    let minicontainer = document.createElement('div');
    minicontainer.classList.add('minicontainermini');

    let li = document.createElement('li');

    function todark() {
        if (temp1 == 1) {
            li.style.backgroundColor = 'hsl(235, 24%, 19%)';
            li.style.color = 'hsl(234, 11%, 52%)';
            if (li.classList.contains('bright')) {
                li.classList.remove('bright');
            }
            li.classList.add('dark');
        }
    }
    todark();

    function tobright() {
        if (temp1 == 0) {
            li.style.backgroundColor = 'whitesmoke';
            if (li.classList.contains('dark')) {
                li.classList.remove('dark');
            }
            li.classList.add('bright');
        }
    }
    tobright();
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
    //------------------------------------------------------------------------------------//
    //-----------when clicking the empty circle-----------------------------------//
    tick.addEventListener('click', () => {

        img.style.visibility = 'visible';
        tick.style.visibility = 'hidden';
        li.style.textDecoration = "line-through";
        if (li.style.textDecoration == 'line-through') {
            li.style.color = ' hsl(234, 11%, 52%)';
            li.style.fontStyle = 'italic';
        }

        tick.classList.add('completed');
    });
    //---------------------when clicking the circle with tick---------------------//

    img.addEventListener('click', () => {

        tick.style.visibility = 'visible';
        img.style.visibility = 'hidden';
        li.style.textDecoration = "none";

        tick.classList.remove('completed');
        if (li.style.textDecoration == 'line-through') {
            li.style.color = ' hsl(234, 11%, 52%)';
            li.style.fontStyle = 'italic';

        } else {
            li.style.color = ' hsl(234, 11%, 52%)';
            li.style.fontStyle = 'normal';
        }
    });
    //--------------------when clicking the X (cross) for removing the todo----------------//
    crossimg.addEventListener('click', () => {
        noOfDeleted++;
        crossimg.parentNode.parentNode.removeChild(crossimg.parentNode);
        itemsleft.textContent = `${itemsleftcopy-noOfDeleted} items left`;
    });

    itemsleft.textContent = `${noOfLefts-noOfDeleted} items left`;

    //---------------------------------------------//

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

    clearbtn.addEventListener('click', () => {

        if (tick.classList.contains('completed')) {
            lists.removeChild(tick.parentNode);
        }
    });
    active.addEventListener('click', () => {

        all.style.color = "var(--DarkGrayishBluestrong) ";
        completedtodo.style.color = "var(--DarkGrayishBluestrong)";
        active.style.color = "hsl(220, 98%, 61%)";
        if (tick.classList.contains('completed')) {
            tick.parentNode.style.display = 'none';
        } else {
            tick.parentNode.style.display = 'block';
        }

    });
    completedtodo.addEventListener('click', () => {

        all.style.color = "var(--DarkGrayishBluestrong) ";
        completedtodo.style.color = "hsl(220, 98%, 61%)";
        active.style.color = "var(--DarkGrayishBluestrong)";
        if (!tick.classList.contains('completed')) {
            tick.parentNode.style.display = 'none';
        } else {
            tick.parentNode.style.display = 'block';
        }
    });
    all.addEventListener('click', () => {
        all.style.color = "hsl(220, 98%, 61%)";
        completedtodo.style.color = "var(--DarkGrayishBluestrong)";
        active.style.color = "var(--DarkGrayishBluestrong)";
        if (tick.classList.contains('circle')) {
            tick.parentNode.style.display = 'block';
        }
    })

}

function insertbefore(newelement, oldelement) {
    oldelement.parentNode.insertBefore(newelement, oldelement);
}

console.log(screen.width)
    //------------------------------------------------------themes-------------------------------------------------------------------------//

const moonimg = document.querySelector('#themeimg');
const sunimg = document.querySelector('#sun');
const head = document.querySelector('#head');
let minicontainermini = document.querySelector('.minicontainer');
let bottom1 = document.querySelector('#bottombar1');
let listlist1 = document.querySelector('.listlist');
let bottom2 = document.querySelector('#bottombar2');
let ulchildnodes = document.querySelector('.lists').childNodes;


let DARK_MODE = 'dark';
let LIGHT_MODE = 'light';
let DEFAULT_MODE = LIGHT_MODE;


init();

function init() {
    let curmode = sessionStorage.getItem('mode');
    if (!curmode) {
        curmode = DEFAULT_MODE;
        sessionStorage.setItem('mode', LIGHT_MODE);
    }
    setmode(curmode);
}

function setmode(mode) {
    if (mode == LIGHT_MODE) {
        // btn.textContent = 'LIGHT';
        // document.body.classList.add(DARK_MODE);
        if (screen.width > 420) {
            document.body.firstElementChild.style.backgroundImage = 'url(images/bg-desktop-dark.jpg)';
        } else {
            document.body.firstElementChild.style.backgroundImage = 'url(images/bg-mobile-dark.jpg)';
        }

        document.body.style.backgroundColor = 'hsl(235, 21%, 11%)';
        sunimg.style.display = 'block';
        moonimg.style.display = 'none';
        inputfield.style.backgroundColor = 'hsl(235, 24%, 19%)';
        inputfield.style.color = 'hsl(234, 11%, 52%)';
        bottom1.style.backgroundColor = 'hsl(235, 24%, 19%)';
        bottom2.style.backgroundColor = 'hsl(235, 24%, 19%)';

        for (let i = 1; i <= ul[0].childElementCount; i++) {
            ul[0].childNodes[i].firstElementChild.style.backgroundColor = 'hsl(235, 24%, 19%)';
        };

    } else {
        // btn.textContent = 'DARK';
        // document.body.classList.remove(DARK_MODE);
        if (screen.width > 420) {
            document.body.firstElementChild.style.backgroundImage = 'url(images/bg-desktop-light.jpg)';
        } else {
            document.body.firstElementChild.style.backgroundImage = 'url(images/bg-mobile-light.jpg)';
        }

        document.body.style.backgroundColor = 'hsl(0, 0%, 97%)';
        sunimg.style.display = 'none';
        moonimg.style.display = 'block';
        inputfield.style.backgroundColor = 'whitesmoke';
        bottom1.style.backgroundColor = 'whitesmoke';
        bottom2.style.backgroundColor = 'whitesmoke';

        for (let i = 1; i <= ul[0].childElementCount; i++) {
            ul[0].childNodes[i].firstElementChild.style.backgroundColor = 'whitesmoke';
        };
    }
}
moonimg.addEventListener('click', () => {
    let mode = sessionStorage.getItem('mode');
    console.log(mode);
    let newmode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    console.log(newmode);
    setmode(newmode);
    sessionStorage.setItem('mode', newmode);
});
sunimg.addEventListener('click', () => {
    let mode = sessionStorage.getItem('mode');
    console.log(mode);
    let newmode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
    console.log(newmode);
    setmode(newmode);
    sessionStorage.setItem('mode', newmode);
});
//-----------------------------------------------------------------------------------------------------//