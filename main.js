const allSkeleton = document.querySelectorAll('.skeleton');

window.addEventListener('load', function() {
  setTimeout(function() {
    allSkeleton.forEach(item => {
      item.classList.remove('skeleton');
    });
  }, 1000);
});

function addOverlay(event) {
  var overlay = event.currentTarget.querySelector('.overlay');
  overlay.classList.add('active');
}

function removeOverlay(event) {
  var overlay = event.currentTarget.querySelector('.overlay');
  overlay.classList.remove('active');
}


function addOverlayNavbar(event) {
  var overlayNavbar = event.currentTarget.querySelector('.overlay-navbar');
  overlayNavbar.classList.add('active');
}

function removeOverlayNavbar(event) {
  var overlayNavbar = event.currentTarget.querySelector('.overlay-navbar');
  overlayNavbar.classList.remove('active');
}



function goToError(websiteURL) {
      //window.location.href = websiteURL;
      alert("Fitur segera hadir!");
    }
    
    const searchInput = document.getElementById("searchInput");
const dataItems = document.querySelectorAll(".data-item");

searchInput.addEventListener("input", function() {
  const searchQuery = searchInput.value.toLowerCase();
  
  dataItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    
    if (itemText.includes(searchQuery)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      
    }
  });
});


function tampilkanSection(id) {
  // Menampilkan section yang dipilih
  var sections = document.querySelectorAll('.container, .filterbutton');
  
  sections.forEach(function(section) {
    if (section.id === id) {
      section.style.display = 'flex'; // Menampilkan section dengan display flex jika id adalah 'semua'
    } else {
      section.style.display = 'none'; // Menyembunyikan section yang tidak dipilih
    }
  });

  // Menghapus kelas active dari semua tombol
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.classList.remove('active');
    if (button.getAttribute('data-id') === id) {
      button.classList.add('active');
    }
  });
}
function goToWebsite(websiteURL) {
      window.location.href = websiteURL;
//alert("Server sedang diperbaiki, mohon menunggu.");
    }
function goToLink(websiteURL) {
      window.location.href = websiteURL;

    }
function tampilkanStudio(studioId) {
    // Menampilkan atau menyembunyikan studio berdasarkan filter yang dipilih
    var studios = document.querySelectorAll('.movies-box');

    if (studioId === 'all') {
        studios.forEach(function(studio) {
            studio.style.display = 'flex'; // Menampilkan semua studio jika 'all' dipilih
        });
        // Nonaktifkan semua tombol filter kecuali tombol 'all'
        var buttons = document.querySelectorAll('.studio-button');
        buttons.forEach(function(button) {
            button.classList.remove('active');
        });
        var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
        var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
        allButton.classList.add('active');
        allButton1.classList.add('active');
    } else {
        var selectedFilters = new Set();
        var buttons = document.querySelectorAll('.studio-button');
        
        // Toggle kelas active untuk tombol yang dipilih
        buttons.forEach(function(button) {
            if (button.getAttribute('data-studio-id') === studioId) {
                if (button.classList.contains('active')) {
                    button.classList.remove('active');
                } else {
                    button.classList.add('active');
                }
            }
            if (button.classList.contains('active')) {
                selectedFilters.add(button.getAttribute('data-studio-id'));
            }
        });

        // Tambahkan atau hapus filter dari Set selectedFilters
        if (selectedFilters.size === 0) {
            // Jika tidak ada filter yang aktif, tampilkan semua studio
            studios.forEach(function(studio) {
                studio.style.display = 'flex';
            });
            var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
            var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
            allButton.classList.add('active');
            allButton1.classList.add('active');
        } else {
            // Nonaktifkan tombol 'all'
            var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
            var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
            allButton.classList.remove('active');
allButton1.classList.remove('active');
            studios.forEach(function(studio) {
                let shouldDisplay = false;
                selectedFilters.forEach(function(filter) {
                    if (studio.classList.contains(filter)) {
                        shouldDisplay = true;
                    }
                });
                studio.style.display = shouldDisplay ? 'flex' : 'none';
            });
        }
    }
}