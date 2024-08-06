// Example of toggling code visibility
document.querySelectorAll('.pattern').forEach((pattern) => {
    pattern.addEventListener('click', () => {
        const codeBlock = pattern.querySelector('pre');
        codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
    });
});
