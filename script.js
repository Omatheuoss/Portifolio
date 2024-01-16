document.getElementById("scrollButton").addEventListener("click", function() {
    Scroll down 500 pixels in 500 milliseconds
    window.scrollBy({
        top: 500,
        behavior: 'smooth'
     });
});