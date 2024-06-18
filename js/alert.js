document.addEventListener('DOMContentLoaded', (event) => {
    const content4 = document.querySelector('.content4');
    if (content4) {
        const links = content4.querySelectorAll('.store');
        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent the default link behavior
                alert('준비중입니다!');
            });
        });
    }
});