function handleToggle(buttonId, overlayId, containerId, closeFunction) {
    const button = document.getElementById(buttonId);
    const overlay = document.getElementById(overlayId);
    const container = document.getElementById(containerId);

    button.addEventListener('click', function() {
        if (!container.classList.contains('active')) {
            overlay.classList.add('active');
            container.classList.add('active');
            container.style.bottom = '0'; // Set bottom to 0 to make it visible
        } else {
            closeFunction();
        }
    });

    overlay.addEventListener('click', closeFunction);

    let startY, currentY, initialBottom, isDragging = false;

    container.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
        initialBottom = parseFloat(window.getComputedStyle(this).bottom);
        this.style.transition = 'none'; // Disable transition during touch
        isDragging = true;
    }, false);

    container.addEventListener('touchmove', function(event) {
        if (!isDragging) return;

        const containerRect = this.getBoundingClientRect();
        const genreList = this.querySelector('.overflowy');
        const contentRect = genreList.getBoundingClientRect();

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
        if (diffY > 100) { // Jika geser lebih dari 100px, tutup filter
            closeFunction();
        } else {
            this.style.bottom = '0'; // Kembalikan ke posisi awal jika tidak cukup geser
        }
    }, false);
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