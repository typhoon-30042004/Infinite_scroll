document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const loading = document.getElementById('loading');
    let currentIndex = 1; // Start item index from 1
    let isLoading = false;
    const initialLoadCount = 20; // Number of items to load initially
    const additionalLoadCount = 10; // Number of items to load on scroll

    function loadContent(itemCount) {
        if (isLoading) return;
        isLoading = true;
        loading.style.display = 'block';

        // Simulate an API call to fetch new content
        setTimeout(() => {
            // Generate new content
            const newContent = Array.from({ length: itemCount }, (_, i) => {
                return `<div class="item">Item ${currentIndex + i}</div>`;
            }).join('');
            contentContainer.insertAdjacentHTML('beforeend', newContent);

            // Update currentIndex for next load
            currentIndex += itemCount;

            // Hide loading indicator
            loading.style.display = 'none';
            isLoading = false;
        }, 1000); // Simulate network delay
    }

    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
            // Load more items when near the bottom
            loadContent(additionalLoadCount);
        }
    }

    window.addEventListener('scroll', onScroll);

    // Initial load of 20 items
    loadContent(initialLoadCount);
});
