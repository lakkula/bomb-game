const imageArray =[
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'star',
        image: 'images/star.png',
    },
    {
        name: 'bomb',
        image: 'images/bomb.png',
    },
    {
        name: 'bomb',
        image: 'images/bomb.png',
    },
    {
        name: 'bomb',
        image: 'images/bomb.png',
    },
];

imageArray.sort(() => 0.5 - Math.random());
console.log(imageArray);

const gridDisplay = document.getElementById('grid');

function createBoard(){
    imageArray.forEach((img,index)=>{
        const card = document.createElement('img');
        card.setAttribute('data-id',index);
        card.setAttribute('src','images/dot.jpg');
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);

    });
}

createBoard();

function flipCard(){
    const cardId = this.getAttribute('data-id');
    console.log(cardId);
    console.log(imageArray);
    this.setAttribute('src',imageArray[cardId].image);
}