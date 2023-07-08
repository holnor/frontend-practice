document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    container.addEventListener('click', function(event) {
        const card = event.target.closest('.card');
        if (card) {
            let cardId = card.id; // Get the ID of the clicked card
            let productUrl = 'products/' + cardId; // Generate the product URL
            window.location.href = productUrl; // Redirect to the product page
        }
    });
});
