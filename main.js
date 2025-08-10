const modal = document.getElementById('modal');
const learnMoreBtn = document.getElementById('learnMoreBtn');
const closeModal = document.getElementById('closeModal');

learnMoreBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
