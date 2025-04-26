document.addEventListener('DOMContentLoaded', function() {
    // Get the counter element
    const counterElement = document.getElementById('visit-count');
    
    // Function to update visit count
    function updateVisitCount() {
        // Try to get the current count from localStorage
        let visitCount = localStorage.getItem('page_view_count');
        
        // If it doesn't exist yet, initialize it
        if (visitCount === null) {
            visitCount = 0;
        }
        
        // Increment the count for this visit
        visitCount = parseInt(visitCount) + 1;
        
        // Store the updated count back in localStorage
        localStorage.setItem('page_view_count', visitCount);
        
        // Display the count on the page with animation
        animateValue(counterElement, 0, visitCount, 1000);
    }
    
    // Function to animate counting from start to end
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Call the function to update the count when page loads
    updateVisitCount();
});