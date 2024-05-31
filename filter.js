document.getElementById('filterButton').addEventListener('click', function() {
    if (!document.getElementById('filterContainer').classList.contains('active')) {
        // Jika filter container belum aktif, aktifkan overlay dan filter container
        document.getElementById('overlay-filter').classList.add('active');
        document.getElementById('filterContainer').classList.add('active');
    } else {
        // Jika filter container sudah aktif, tutup overlay dan filter container
        closeFilter();
    }
});

document.getElementById('overlay-filter').addEventListener('click', function() {
    closeFilter();
});

function closeFilter() {
    document.getElementById('overlay-filter').classList.remove('active');
    document.getElementById('filterContainer').classList.remove('active');
}


document.getElementById('filterButton2').addEventListener('click', function() {
    if (!document.getElementById('filterContainer2').classList.contains('active')) {
        // Jika filter container belum aktif, aktifkan overlay dan filter container
        document.getElementById('overlay-filter2').classList.add('active');
        document.getElementById('filterContainer2').classList.add('active');
    } else {
        // Jika filter container sudah aktif, tutup overlay dan filter container
        closeFilter2();
    }
});

document.getElementById('overlay-filter2').addEventListener('click', function() {
    closeFilter2();
});

function closeFilter2() {
    document.getElementById('overlay-filter2').classList.remove('active');
    document.getElementById('filterContainer2').classList.remove('active');
}