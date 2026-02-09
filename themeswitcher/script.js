const themeSelect = document.getElementById('themeSelect');
const body = document.body;

themeSelect.value = body.getAttribute('data-theme');

// EventListener 
themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    body.setAttribute('data-theme', selectedTheme);
});
