// Your JavaScript code goes here
const images = [
    "mium PSD _ Burger square banner for social media.jpeg"
];

const imageContainer = document.getElementById('imageContainer');
let currentIndex = 0;

function changeImage() {
    imageContainer.innerHTML = `<img src="${images[currentIndex]}" alt="Image ${currentIndex + 1}">`;
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeImage, 3000); // Change image every 3 seconds
}

changeImage(); 

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
        },
        loop: true,
        direction: 'horizontal',
    });
});

const totalSlides = document.querySelectorAll('.slide').length;

function updateSlide() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    const li = document.createElement('li');
    li.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItems.appendChild(li);

    const currentTotal = parseFloat(totalElement.textContent);
    const newTotal = currentTotal + itemPrice;
    totalElement.textContent = newTotal.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('nav a[href="#cart"]');
    const cartSection = document.getElementById('cart');

    cartButton.addEventListener('click', function (event) {
        event.preventDefault();
        cartSection.classList.toggle('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartLink = document.querySelector('li a[href="#cart"]');
    const cartSection = document.getElementById('cart');

    function toggleCart() {
        cartSection.classList.toggle('hidden');
    }

    cartLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleCart();
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('#cart') && !event.target.closest('li a[href="#cart"]')) {
            cartSection.classList.add('hidden');
        }
    });
});
function subscribe() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    if (validateEmail(email)) {
        // Assuming you have a server-side endpoint to handle subscriptions
        // You need to replace 'your-server-endpoint' with the actual URL
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message); // Display the server response
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    // Basic email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}