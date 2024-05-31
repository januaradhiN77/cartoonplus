function handleToggle(buttonId, overlayId, containerId, closeFunction) {
    const button = document.getElementById(buttonId);
    const overlay = document.getElementById(overlayId);
    const container = document.getElementById(containerId);
    const stackedElements = document.querySelectorAll('.stacked-element');

    let startY, currentY, initialBottom, isDragging = false;

    button.addEventListener('click', function() {
        if (!container.classList.contains('active')) {
            overlay.classList.add('active');
            container.classList.add('active');
            container.style.bottom = '0'; // Set bottom to 0 to make it visible
            disableScroll(); // Disable scroll on stacked elements when filter container is active
        } else {
            closeFunction();
            enableScroll(); // Enable scroll on stacked elements when filter container is closed
        }
    });

    overlay.addEventListener('click', closeFunction);

    container.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
        initialBottom = parseFloat(window.getComputedStyle(this).bottom);
        this.style.transition = 'none'; // Disable transition during touch
        isDragging = true;
    }, false);

    container.addEventListener('touchmove', function(event) {
        if (!isDragging) return;

        const content = this.querySelector('.nodragy');
        const contentRect = content.getBoundingClientRect();

        // Check if touch event is inside the content area
        if (event.touches[0].clientY > contentRect.top && event.touches[0].clientY < contentRect.bottom) {
            return; // Don't handle touchmove if inside content area
        }

        currentY = event.touches[0].clientY;

        let diffY = currentY - startY;

        if (diffY > 0) {
            this.style.bottom = `${initialBottom - diffY}px`;
        }
    }, false);

    container.addEventListener('touchend', function(event) {
        if (!isDragging) return;
        isDragging = false;
        let diffY = currentY - startY;
        this.style.transition = 'bottom 0.5s ease'; // Re-enable transition after touch
        if (diffY > 100) { // If dragged more than 100px vertically, close the filter
            closeFunction();
            enableScroll(); // Enable scroll on stacked elements when filter container is closed
        } else {
            this.style.bottom = '0'; // Return to initial position if not dragged enough
        }
    }, false);

    // Handle touch events for filter-studio separately
    const filterStudio = container.querySelector('.filter-studio-container');
    filterStudio.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
        this.style.transition = 'none';
        isDragging = true;
    }, false);

    filterStudio.addEventListener('touchmove', function(event) {
        if (!isDragging) return;
        event.stopPropagation(); // Stop event propagation to prevent interference with container scrolling
        currentY = event.touches[0].clientY;
        let diffY = currentY - startY;
        this.scrollTop -= diffY; // Scroll the filter studio
        startY = currentY;
    }, false);

    filterStudio.addEventListener('touchend', function(event) {
        this.style.transition = 'all 0.5s ease';
        isDragging = false;
    }, false);

    // Disable scroll on stacked elements
    function disableScroll() {
        stackedElements.forEach(function(element) {
            element.style.overflowY = 'hidden';
        });
    }

    // Enable scroll on stacked elements
    function enableScroll() {
        stackedElements.forEach(function(element) {
            element.style.overflowY = 'auto';
        });
    }
}

function closeFilter() {
    const container = document.getElementById('filterContainer');
    const overlay = document.getElementById('overlay-filter');
    container.classList.remove('active');
    overlay.classList.remove('active');
    container.style.transition = 'bottom 0.5s ease';
    container.style.bottom = '-150%';
}

function closeFilter2() {
    const container = document.getElementById('filterContainer2');
    const overlay = document.getElementById('overlay-filter2');
    container.classList.remove('active');
    overlay.classList.remove('active');
    container.style.transition = 'bottom 0.5s ease';
    container.style.bottom = '-150%';
}

handleToggle('filterButton', 'overlay-filter', 'filterContainer', closeFilter);
handleToggle('filterButton2', 'overlay-filter2', 'filterContainer2', closeFilter2);


