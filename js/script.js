document.addEventListener('DOMContentLoaded', () => {
    const courseSearchInput = document.getElementById('courseSearchInput');
    if (courseSearchInput) {
        courseSearchInput.addEventListener('keyup', () => {
            let filter = courseSearchInput.value.toLowerCase();
            let courseCards = document.querySelectorAll('.course-card-item');

            courseCards.forEach(card => {
                let title = card.querySelector('.card-title').textContent || card.querySelector('.card-title').innerText;
                if (title.toLowerCase().includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

    const internshipSearchInput = document.getElementById('internshipSearchInput');
    if (internshipSearchInput) {
        internshipSearchInput.addEventListener('keyup', () => {
            let filter = internshipSearchInput.value.toLowerCase();
            let internshipCards = document.querySelectorAll('.internship-card-item');

            internshipCards.forEach(card => {
                let title = card.querySelector('.card-title').textContent || card.querySelector('.card-title').innerText;
                if (title.toLowerCase().includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});