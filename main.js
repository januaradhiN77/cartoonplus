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
    // Menampilkan studio yang dipilih atau semua studio
    var studios = document.querySelectorAll('.movies-box');
    
    studios.forEach(function(studio) {
        if (studioId === 'all' || studio.id === studioId) {
            studio.style.display = 'flex'; // Menampilkan studio dengan display flex jika ID sesuai atau 'all'
        } else {
            studio.style.display = 'none'; // Menyembunyikan studio yang tidak dipilih
        }
    });

    // Menghapus kelas active dari semua tombol studio
    var buttons = document.querySelectorAll('.studio-button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
        if (button.getAttribute('data-studio-id') === studioId) {
            button.classList.add('active');
        }
    });
}
