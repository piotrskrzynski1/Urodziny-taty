// Dodanie interaktywności z animacją
document.getElementById("surpriseButton").addEventListener("click", function () {
    const messageSection = document.getElementById("surpriseMessage");

    // Jeśli ukryte, pokaż z animacją
    if (messageSection.classList.contains("hidden")) {
        messageSection.classList.remove("hidden");
        messageSection.classList.remove("hide");
        messageSection.classList.add("show");
        this.textContent = "Ukryj niespodziankę";
    } else {
        // Jeśli widoczne, ukryj z animacją
        messageSection.classList.remove("show");
        messageSection.classList.add("hide");
        setTimeout(() => {
            messageSection.classList.add("hidden");
        }, 500); // Ukrycie po zakończeniu animacji
        this.textContent = "Kliknij, by zobaczyć niespodziankę!";
    }
});

// Select modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Add click event to all images in the grid
document.querySelectorAll('.image-grid img').forEach(img => {
    img.addEventListener('click', () => {
        modalImage.src = img.src; // Set modal image source to the clicked image
        modal.style.display = 'flex'; // Show the modal
    });
});

// Close the modal when clicking the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Hide the modal
    }
});

