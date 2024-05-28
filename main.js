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
        var selectedStudios = new Set();
        var selectedGenres = new Set();
        var selectedFormats = new Set();

        function tampilkanStudio(studioId) {
            var studios = document.querySelectorAll('.movies-box');

            if (studioId === 'all') {
                selectedStudios.clear();
                selectedGenres.clear();
                selectedFormats.clear();
                studios.forEach(function(studio) {
                    studio.style.display = 'flex';
                });
                var buttons = document.querySelectorAll('.studio-button, .genre-button, .format-button');
                buttons.forEach(function(button) {
                    button.classList.remove('active');
                });
                var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
                var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
                allButton.classList.add('active');
                allButton1.classList.add('active');
            } else {
                var buttons = document.querySelectorAll('.studio-button');
                buttons.forEach(function(button) {
                    if (button.getAttribute('data-studio-id') === studioId) {
                        if (button.classList.contains('active')) {
                            button.classList.remove('active');
                            selectedStudios.delete(studioId);
                        } else {
                            button.classList.add('active');
                            selectedStudios.add(studioId);
                        }
                    }
                });

                var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
                var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
                if (selectedStudios.size === 0) {
                    studios.forEach(function(studio) {
                        studio.style.display = 'flex';
                    });
                    allButton.classList.add('active');
                    allButton1.classList.add('active');
                } else {
                    allButton.classList.remove('active');
                    allButton1.classList.remove('active');
                    filterAndDisplayStudios();
                }
            }
        }

        function tampilkanGenre(genreId) {
            var genres = document.querySelectorAll('.movies-box');

            var genreButtons = document.querySelectorAll(`.genre-button[data-genre-id="${genreId}"]`);
            genreButtons.forEach(function(genreButton) {
                if (genreButton.classList.contains('active')) {
                    genreButton.classList.remove('active');
                    selectedGenres.delete(genreId);
                } else {
                    genreButton.classList.add('active');
                    selectedGenres.add(genreId);
                }
            });

            var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
            var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
            if (selectedGenres.size === 0 && selectedStudios.size === 0 && selectedFormats.size === 0) {
                allButton.classList.add('active');
                allButton1.classList.add('active');
            } else {
                allButton.classList.remove('active');
                allButton1.classList.remove('active');
            }

            filterAndDisplayStudios();
        }

        function tampilkanFormat(formatId) {
            var formats = document.querySelectorAll('.movies-box');

            var formatButton = document.querySelector(`.format-button[data-format-id="${formatId}"]`);
            if (formatButton.classList.contains('active')) {
                formatButton.classList.remove('active');
                selectedFormats.delete(formatId);
            } else {
                formatButton.classList.add('active');
                selectedFormats.add(formatId);
            }

            var allButton = document.querySelector('.studio-button[data-studio-id="all"]');
            var allButton1 = document.querySelector('.studio-button[data-studio-id="all1"]');
            if (selectedFormats.size === 0 && selectedStudios.size === 0 && selectedGenres.size === 0) {
                allButton.classList.add('active');
                allButton1.classList.add('active');
            } else {
                allButton.classList.remove('active');
                allButton1.classList.remove('active');
            }

            filterAndDisplayStudios();
        }

        function filterAndDisplayStudios() {
            var studios = document.querySelectorAll('.movies-box');

            studios.forEach(function(studio) {
                let shouldDisplay = true;

                if (selectedStudios.size > 0) {
                    shouldDisplay = Array.from(selectedStudios).some(function(filter) {
                        return studio.classList.contains(filter);
                    });
                }

                if (shouldDisplay && selectedGenres.size > 0) {
                    shouldDisplay = Array.from(selectedGenres).some(function(filter) {
                        return studio.classList.contains(filter);
                    });
                }

                if (shouldDisplay && selectedFormats.size > 0) {
                    shouldDisplay = Array.from(selectedFormats).some(function(filter) {
                        return studio.classList.contains(filter);
                    });
                }

                studio.style.display = shouldDisplay ? 'flex' : 'none';
            });
        }