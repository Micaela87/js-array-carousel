// data to work with

// images to display on page
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// titles to display on page
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

// paragraphs to display on page
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// selects DOM nodes
const itemContainer = document.querySelector('.items'); // container for bigger pictures
const thumbContainer = document.querySelector('.thumbs'); // container for smaller pictures
const arrowUp = document.querySelector('.prev'); // arrow up
const arrowDown = document.querySelector('.next'); // arrow down

for (let i = 0; i < items.length; i++) {
    // adds bigger pictures to the page
    itemContainer.innerHTML += 
    `<div class="item">
        <img src="./public/resources/${items[i]}" alt="">
        <div class="text">
            <h3>${title[i]}</h3>
            <p>${text[i]}</p>
        </div>
    </div>`;

    // adds smaller pictures to the page
    thumbContainer.innerHTML +=
    `<div class="thumb">
        <img src="./public/resources/${items[i]}" alt="">
    </div>`;
}

// selects and displays the first bigger picture
document.getElementsByClassName('item')[0].classList.add('active');

// selects and displays the first smaller picture
document.getElementsByClassName('thumb')[0].classList.add('active');

// sets a counter to select previous or next picture
let counter = 0;

// adds click event on arrow up
document.querySelector('.prev').addEventListener('click',

    function() {
        document.getElementsByClassName('item')[counter].classList.remove('active');
        document.getElementsByClassName('thumb')[counter].classList.remove('active');

        ++counter;

        document.getElementsByClassName('item')[counter].classList.add('active');
        document.getElementsByClassName('thumb')[counter].classList.add('active');

    }

)

document.querySelector('.next').addEventListener('click', 

    function() {
        document.getElementsByClassName('item')[counter].classList.remove('active');
        document.getElementsByClassName('thumb')[counter].classList.remove('active');

        --counter;

        document.getElementsByClassName('item')[counter].classList.add('active');
        document.getElementsByClassName('thumb')[counter].classList.add('active');
    }

);