document.addEventListener('DOMContentLoaded', () => {
    const ceasSection = document.querySelector('.ceas');
    setTimeout(() => {
        ceasSection.classList.add('animate-ceas');
    }, 300);

    const menuButton = document.getElementById('menuButton');
    const menuDropdown = document.getElementById('menuDropdown');
    let isMenuOpen = false;

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!isMenuOpen) {
            menuDropdown.style.display = 'block';
            isMenuOpen = true;
        } else {
            menuDropdown.style.display = 'none';
            isMenuOpen = false;
        }
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !menuDropdown.contains(e.target) && !menuButton.contains(e.target)) {
            menuDropdown.style.display = 'none';
            isMenuOpen = false;
        }
    });
}); 