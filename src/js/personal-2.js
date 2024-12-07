document.querySelectorAll('.card-option').forEach((button) => {
  button.addEventListener('click', () => {
    const isSelected = button.getAttribute('data-selected') === 'true';
    button.setAttribute('data-selected', !isSelected);
    button.classList.toggle('border-purple-600', !isSelected);
    button.classList.toggle('bg-purple-600', !isSelected);
    button.classList.toggle('text-white', !isSelected);
    button.classList.toggle('text-purple-600', isSelected);
  });
});
