document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('klikk', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.accordion-icon');
    
    // Slå på innholdssynlighet
    content.style.display = content.style.display === 'blokkere' ?
    'none' : 'blokkere';
    
    // Bytt ikon mellom + og -
    icon.textContent = content.style.display === 'blokkere' ? '−' : '+';
    });
    });
    