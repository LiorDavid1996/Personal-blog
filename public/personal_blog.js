
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved 'darkMode' in localStorage
    let darkMode = localStorage.getItem('darkMode'); 

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }
 
    // If the user already visited and enabled darkMode
    // start things off with it on
    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    // When someone clicks the button
    darkModeToggle.addEventListener('click', () => {
        // get their darkMode setting
        darkMode = localStorage.getItem('darkMode'); 
        
        // if it not current enabled, enable it
        if (darkMode !== 'enabled') {
            enableDarkMode();
        // if it has been enabled, turn it off  
        } else {  
            disableDarkMode(); 
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Existing dark mode toggle code...

    // Initialize the carousel
    new bootstrap.Carousel(document.getElementById('postCarousel'), {
        interval: 5000, // Change slide every 5 seconds
        wrap: true // Allow the carousel to cycle continuously
    });

    // Rest of your existing code...
});
// Add this to your existing DOMContentLoaded event listener
const addCardBtn = document.getElementById('addCardBtn');
const addPostModal = new bootstrap.Modal(document.getElementById('addPostModal'));
const savePostBtn = document.getElementById('savePostBtn');

addCardBtn.addEventListener('click', () => {
    addPostModal.show();
});

savePostBtn.addEventListener('click', () => {
    const title = document.getElementById('postTitle').value;
    const description = document.getElementById('postDescription').value;
    const imageUrl = document.getElementById('postImage').value;

    if (title && description && imageUrl) {
        addNewPost(title, description, imageUrl);
        addPostModal.hide();
        document.getElementById('newPostForm').reset();
    } else {
        alert('Please fill in all fields');
    }
});

function addNewPost(title, description, imageUrl) {
    const carousel = document.querySelector('#postCarousel .carousel-inner');
    const newPost = document.createElement('div');
    newPost.className = 'carousel-item';
    newPost.innerHTML = `
        <div class="card mb-4">
            <img src="${imageUrl}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-primary">Read More</a>
            </div>
        </div>
    `;
    carousel.appendChild(newPost);

    // Refresh the carousel
    const carouselInstance = bootstrap.Carousel.getInstance(document.getElementById('postCarousel'));
    carouselInstance.to(carousel.children.length - 1);
}