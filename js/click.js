const emojiOpen = document.querySelector('.open');
const emojiClose = document.querySelector('.close');
const counter = document.querySelector('.counter');
let counterNun = 0;

emojiOpen.addEventListener('click',  function(){
    emojiOpen.classList.remove('active');
    emojiClose.classList.add('active');
    counterNun++;
    counter.innerHTML = counterNun;
});

emojiClose.addEventListener('click',  function(){
    emojiClose.classList.remove('active');
    emojiOpen.classList.add('active');
    counterNun++;
    counter.innerHTML = counterNun;
});

