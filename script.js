document.addEventListener('DOMContentLoaded', function () {
    // Show the content of the initially selected section
    showContent('home');

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1);
            showContent(targetSectionId);
        });
    });
});

function showContent(sectionId) {
    // Hide all sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
