document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`Bạn đã chọn: ${card.querySelector('p').textContent}`);
    });
});
