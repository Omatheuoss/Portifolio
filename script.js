function clickMenu() {
    var menu = document.getElementById("menu");
    var displayStyle = window.getComputedStyle(menu).display;

    if (displayStyle === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}