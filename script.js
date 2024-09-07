document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const loading = document.getElementById('loading');
    let page = 0;  // Start at page 0 to ensure items start from 1
    let isLoading = false;
    const itemsPerLoad = 10;  // Load only 10 items at a time

    function loadContent() {
        if (isLoading) return;
        isLoading = true;
        loading.style.display = 'block';  // Show loading indicator

        // Simulate an API call to fetch new content
        setTimeout(() => {
            const newContent = Array.from({ length: itemsPerLoad }, (_, i) => { 
                // Calculate correct item number
                return `<div class="item">Item ${page * itemsPerLoad + i + 1}</div>`;
            }).join('');
            contentContainer.insertAdjacentHTML('beforeend', newContent);  // Add new items

            // Hide loading indicator
            loading.style.display = 'none';
            isLoading = false;
            page++;  // Increment page after items are loaded
        }, 1000);  // Simulate a 1-second delay
    }

    function onScroll() {
        console.log("Scroll position:", window.scrollY, "Window height:", window.innerHeight, "Document height:", document.documentElement.scrollHeight);
        // Check if the user has scrolled near the bottom of the page (within 50px)
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50 && !isLoading) {
            loadContent();  // Load more content when user is near the bottom
        }
    }

    window.addEventListener('scroll', onScroll);

    // Load initial content
    loadContent();  // Load the first set of content
});
