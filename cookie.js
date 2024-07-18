function setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Function to get a cookie by name
    function getCookie(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
    }

    // Function to load images from cookies
    function loadImagesFromCookies() {
      document.querySelectorAll('.movies-box img').forEach(img => {
        const cookieName = img.src.split('/').pop(); // Use image name as cookie key
        const savedSrc = getCookie(cookieName);
        if (savedSrc) {
          img.src = savedSrc;
        }
      });
    }

    // Function to save images to cookies
    function saveImageToCookie(img) {
      const cookieName = img.src.split('/').pop(); // Use image name as cookie key
      setCookie(cookieName, img.src, 7); // Save for 7 days
    }

    // Function to handle image load event
    function handleImageLoad(event) {
      saveImageToCookie(event.target);
    }

    // Function to add event listeners to images
    function addImageEventListeners() {
      document.querySelectorAll('.movies-box img').forEach(img => {
        img.addEventListener('load', handleImageLoad);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      loadImagesFromCookies();
      addImageEventListeners();
    });