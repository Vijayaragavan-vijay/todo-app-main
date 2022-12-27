# Todo App Solution 
# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode

### Screenshot

# Desktop view:

![desktopbright](https://user-images.githubusercontent.com/95960286/209557726-49ae31eb-a18a-4885-9512-6aecb44b0c31.png)

![desktopdark](https://user-images.githubusercontent.com/95960286/209558064-d2fd4719-40b0-4677-9993-b5c7c243a0ab.png)

# Mobile view:

![mobilebright](https://user-images.githubusercontent.com/95960286/209558083-548e8aa7-949f-4ec7-b09e-5c7797fcbf2d.png)

![mobiledark](https://user-images.githubusercontent.com/95960286/209558089-95fa161c-317f-4979-8028-51f88cde13fd.png)

### Links

- Solution URL: [Solution Url](https://www.frontendmentor.io/solutions/todo-app-zWUTBTeFAz)
- Live Site URL: [Live Site](https://todoapp-vijay.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This project is a very helpful for understanding session storage, theme_change, creating elements dynamically, deleting and filtering elements. I felt difficult to complete this challenge and there is a issue , in default if we create a dynamic elements it will place one after another , but the task is to show the recent todo at the top. So, I tried different ways to achieve it, but finally I had used insertBefore method to solve the problem.

```js
function insertbefore(newelement, oldelement) {
    oldelement.parentNode.insertBefore(newelement, oldelement);
}
```
Checking the current theme
```js 
function init() {
    let curmode = sessionStorage.getItem('mode');
    if (!curmode) {
        curmode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DARK_MODE);
    }
    setmode(curmode);
}
```
To change the elements according to theme

```js
moonimg.addEventListener('click', () => {
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
});
```
## Author
- Frontend Mentor - [@Vijayaragavan](https://www.frontendmentor.io/profile/vijayaragavankts)
