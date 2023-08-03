// JavaScript for toggle functionality
const toggleButton = document.querySelector(".navbar-toggle");
const navbarItems = document.querySelector(".navbar-items");

toggleButton.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

const logos = document.querySelector(".logodivHidden");
const seeMore = document.querySelector('.moreBtnDiv');
const seeLess = document.getElementById('seeLess');

seeLess.style.display = 'none';
logos.style.display = 'none';  

function showDiv(){
    logos.style.display = 'flex';
    seeMore.style.display = 'none'
    seeLess.style.display = 'block'
}

function hideDiv(){
    logos.style.display = 'none';
    seeMore.style.display = 'block'
    seeLess.style.display = 'none'
}

const dropdownBtn = document.querySelector('.dropdown-btn');
dropdownBtn.addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('active');
});
