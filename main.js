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
function filterBoxes(studio) {
    // Save the selected studio to localStorage
    localStorage.setItem('selectedStudio', studio);

    // Get all box elements
    const boxes = document.querySelectorAll('.movies-box');

    // Loop through all boxes and display only those that match the selected studio
    boxes.forEach(box => {
        if (studio === 'all') {
            box.style.display = 'block';
        } else if (box.classList.contains(studio)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// When the page loads, retrieve the selected studio from localStorage
window.onload = () => {
    const selectedStudio = localStorage.getItem('selectedStudio') || 'all';
    filterBoxes(selectedStudio);
};
    