document.addEventListener('DOMContentLoaded', function() {
    const contentContainer = document.getElementById('content-container');
    const loading = document.getElementById('loading');
    let page = 1;
    let isLoading = false;

    function loadContent() {
        if (isLoading) return;
        isLoading = true;
        loading.style.display = 'block';

        // Simulate an API call to fetch new content
        setTimeout(() => {
            // Generate new content
            const newContent = Array.from({ length: 10 }, (_, i) => {
                return `<div class="item">Item ${page * 10 + i + 1}</div>`;
            }).join('');
            contentContainer.insertAdjacentHTML('beforeend', newContent);

            // Hide loading indicator
            loading.style.display = 'none';
            isLoading = false;
            page++;
        }, 1000); // Simulate network delay
    }

    function onScroll() {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            loadContent();
        }
    }

    window.addEventListener('scroll', onScroll);

    // Load initial content
    loadContent();
});
