const images = ['0.jpeg', '1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg', '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg', '21.jpeg', '22.jpeg', '23.jpeg', '24.jpeg', '25.jpeg'];

document.body.addEventListener('click', () => {
    const random = randomImg();
    document.body.style.backgroundImage = `url(img/${random}.jpeg)`;
    document.querySelector('h6').style.visibility = 'hidden';
});

function randomImg() {
    return Math.floor(Math.random() * images.length);
}