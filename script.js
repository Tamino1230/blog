// Enhanced JavaScript for interactive and dynamic behavior

document.addEventListener('DOMContentLoaded', () => {
    const articleLinks = document.querySelectorAll('.article-item a');

    articleLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6f61';
            link.style.textShadow = '0 0 8px rgba(255, 111, 97, 0.8)';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#00d4ff';
            link.style.textShadow = 'none';
        });
    });

    // Add a smooth scroll effect for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});